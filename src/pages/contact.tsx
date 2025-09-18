import Head from "next/head";
//API Imports
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getContactPage } from '@/lib/api';
import { ContactPageProps } from "@/types/interfaces";
//Component Imports
import { default as ContactPage } from "@/components/pages/contact/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import Button from "@/components/Button/Button";
import ButtonNavWrapper from "@/components/lib/ButtonNavWrapper/ButtonNavWrapper";

export default function Contact({ data }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Head>
        <title>Sean Standen | Contact</title>
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
                <ContactPage data={data} />
            </ContentContainer>
          </section>
        </main>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<ContactPageProps | any> = async () => {
      // Fetch your data here
      const contactPage = await getContactPage();

      return {
        props: {
          data: contactPage
        },
      };
};
