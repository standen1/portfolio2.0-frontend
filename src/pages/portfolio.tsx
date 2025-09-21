import UnderConstruction from "@/components/lib/UnderConstruction/UnderConstruction";
import Head from "next/head";
import { default as PortfolioPage } from "@/components/pages/portfolio/Portfolio";
import Hero from "@/components/Hero/Hero";
import Button from "@/components/Button/Button";
import ButtonNavWrapper from "@/components/lib/ButtonNavWrapper/ButtonNavWrapper";
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { PortfolioPageProps } from "@/types/interfaces";
import { getPortfolioPage } from "@/lib/api";

export default function Portfolio({ data }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Head>
        <title>Sean Standen | Portfolio</title>
        {/* ... (meta tags) */}
      </Head>
      <div>
        <main style={{ backgroundColor: "#F8F8F8"}}>
          <Hero pageInfo={{
              Title: data.PageInfo?.Title || "",
              Description: data.PageInfo?.Description || "",
              featuredImage: data.PageInfo?.featuredImage ? {
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
          </section>
        </main>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<PortfolioPageProps | any> = async () => {
      // Fetch your data here
      const portfolioPage = await getPortfolioPage();

      return {
        props: {
          data: portfolioPage
        },
      };
};