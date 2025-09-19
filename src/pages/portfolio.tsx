import UnderConstruction from "@/components/lib/UnderConstruction/UnderConstruction";
import Head from "next/head";
import { default as PortfolioPage } from "@/components/pages/portfolio/Portfolio";
import Hero from "@/components/Hero/Hero";
import Button from "@/components/Button/Button";
import ButtonNavWrapper from "@/components/lib/ButtonNavWrapper/ButtonNavWrapper";
// import type { GetStaticProps, InferGetStaticPropsType } from 'next';

export default function Portfolio() {
  const data = {
    PageInfo: {
      Title: "Portfolio",
      Description: "A showcase of my projects and work.",
      featuredImage: {
          src: "https://intuitive-gem-3495d29428.media.strapiapp.com/ocean_waves_610c11520b.jpeg",
          alt: "Test Hero Image",
          width: "1400",
          height: "915"
        }
    },
    Projects: [
      {
        name: "Test Project",
        websiteURL: "https://webpunk.tech",
        description: "Technologies used: React, Next.js, TypeScript, Strapi, CSS Modules",
        featuredImage: {
          src: "https://intuitive-gem-3495d29428.media.strapiapp.com/seanstanden_bb1761511e.jpeg",
          alt: "Test Image",
          width: "750",
          height: "622"
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Sean Standen | Portfolio</title>
        {/* ... (meta tags) */}
      </Head>
      <div>
        <main style={{ backgroundColor: "#F8F8F8"}}>
          <section id="under-construction">
            <UnderConstruction />
          </section>
          {/* <Hero pageInfo={{
              Title: data.PageInfo.Title || "",
              Description: data.PageInfo.Description || "",
            featuredImage: data.PageInfo.featuredImage ? {
              src: data.PageInfo.featuredImage.src,
              alt: data.PageInfo.featuredImage.alt,
              width: data.PageInfo.featuredImage.width,
              height: data.PageInfo.featuredImage.height
            } : null
          }} />
          <section id="portfolio-selections">
            <ButtonNavWrapper>
              <Button onClick={() => (null)} isActive={true}>Portfolio</Button>
            </ButtonNavWrapper>
          </section>
          <section id="portfolio-page">
            <PortfolioPage data={data.Projects} />
          </section> */}
        </main>
      </div>
    </>
  );
}
