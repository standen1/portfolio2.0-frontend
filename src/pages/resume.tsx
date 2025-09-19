import Head from "next/head";
//API Imports
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getResumePage } from '@/lib/api';
import { ResumePageProps } from "@/types/interfaces";
//Component Imports
import Hero from "@/components/Hero/Hero";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import Button from "@/components/Button/Button";
import ButtonNavWrapper from "@/components/lib/ButtonNavWrapper/ButtonNavWrapper";
import { default as ResumePage } from "@/components/pages/resume/Resume";
import ResumeLink from "@/components/pages/resume/ResumeLink/ResumeLink";
export default function Resume({ data }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Head>
        <title>Sean Standen | Resume</title>
        {/* ... (meta tags) */}
      </Head>
      <div>
        <main style={{ backgroundColor: "#F8F8F8"}}>
          <Hero pageInfo={{
              Title: data.PageInfo.Title || "",
              Description: data.PageInfo.Description || "",
            featuredImage: data.PageInfo.featuredImage ? {
              src: data.PageInfo.featuredImage.src,
              alt: data.PageInfo.featuredImage.alt,
              width: data.PageInfo.featuredImage.width,
              height: data.PageInfo.featuredImage.height
            } : null
          }}>
            <ResumeLink />
          </Hero>
          <section id="resume-selections">
            <ButtonNavWrapper>
              <Button onClick={() => (null)} isActive={true}>Resume</Button>
            </ButtonNavWrapper>
          </section>
          <section style={{ margin: "0 auto" }}>
            <ContentContainer>
                <ResumePage data={data} />
            </ContentContainer>
          </section>
        </main>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<ResumePageProps | any> = async () => {
      // Fetch your data here
      const resumePage = await getResumePage();

      return {
        props: {
          data: resumePage
        },
      };
};
