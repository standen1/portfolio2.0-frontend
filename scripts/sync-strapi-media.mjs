import { access, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const apiUrl = process.env.STRAPI_URL;
const apiToken = process.env.NEXT_FRONTEND_STRAPI_KEY;

if (!apiUrl || !apiToken) {
  throw new Error('STRAPI_URL and NEXT_FRONTEND_STRAPI_KEY must be configured.');
}

const endpoints = [
  '/about-page?populate=*',
  '/contact-page?populate=*',
  '/portfolio?populate=*',
  '/resume?populate[0]=PageInfo&populate[1]=FeaturedImage',
  '/privacy-policy?populate=*',
];
const uploadsDirectory = path.resolve('public/uploads');

function findMediaUrls(value, urls = new Set()) {
  if (typeof value === 'string') {
    const parsed = new URL(value, apiUrl);
    const isStrapiUpload = parsed.pathname.startsWith('/uploads/');
    const isStrapiCloudUpload = parsed.hostname.endsWith('.media.strapiapp.com');

    if (isStrapiUpload || isStrapiCloudUpload) {
      urls.add(parsed.href);
    }

    return urls;
  }

  if (Array.isArray(value)) {
    value.forEach((item) => findMediaUrls(item, urls));
  } else if (value && typeof value === 'object') {
    Object.values(value).forEach((item) => findMediaUrls(item, urls));
  }

  return urls;
}

async function getPageData(endpoint) {
  const apiBaseUrl = `${apiUrl.replace(/\/$/, '')}/`;
  const response = await fetch(new URL(endpoint.replace(/^\//, ''), apiBaseUrl), {
    headers: { Authorization: `Bearer ${apiToken}` },
  });

  if (!response.ok) {
    throw new Error(`Could not load ${endpoint}: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

await mkdir(uploadsDirectory, { recursive: true });

const pages = await Promise.all(endpoints.map(getPageData));
const mediaUrls = pages.reduce((urls, page) => findMediaUrls(page, urls), new Set());
let copied = 0;
let skipped = 0;

for (const mediaUrl of mediaUrls) {
  const parsed = new URL(mediaUrl);
  const filename = path.basename(decodeURIComponent(parsed.pathname));

  if (!filename || filename === '.' || filename === '/') {
    throw new Error(`Could not determine a safe filename for ${mediaUrl}`);
  }

  const destination = path.join(uploadsDirectory, filename);

  try {
    await access(destination);
    skipped += 1;
    continue;
  } catch {
    // The file is new and should be downloaded below.
  }

  const response = await fetch(mediaUrl);
  if (!response.ok) {
    throw new Error(`Could not download ${mediaUrl}: ${response.status} ${response.statusText}`);
  }

  await writeFile(destination, Buffer.from(await response.arrayBuffer()));
  copied += 1;
}

console.log(
  `Synced ${copied} new Strapi media file${copied === 1 ? '' : 's'} to public/uploads; ` +
  `${skipped} existing file${skipped === 1 ? '' : 's'} left unchanged.`
);
