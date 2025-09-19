import Head from "next/head";
//API Imports
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getPrivacyPolicyPage } from '@/lib/api';
import { PrivacyPolicyPageProps } from "@/types/interfaces";
//Component Imports
import { default as PrivacyPolicyPage } from "@/components/pages/privacy-policy/PrivacyPolicy";
import Hero from "@/components/Hero/Hero";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import Button from "@/components/Button/Button";
import ButtonNavWrapper from "@/components/lib/ButtonNavWrapper/ButtonNavWrapper";

export default function PrivacyPolicy({ data }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Head>
        <title>Sean Standen | Privacy Policy</title>
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
          }} />
          <section id="contact-selections">
            <ButtonNavWrapper>
              <Button onClick={() => (null)} isActive={true}>Contact</Button>
            </ButtonNavWrapper>
          </section>
          <section style={{ margin: "0 auto" }}>
            <ContentContainer>
                <PrivacyPolicyPage data={data} />
            </ContentContainer>
          </section>
        </main>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<PrivacyPolicyPageProps | any> = async () => {
      // Fetch your data here
      const privacyPolicyPage = await getPrivacyPolicyPage();

      return {
        props: {
          data: privacyPolicyPage
        },
      };
};
