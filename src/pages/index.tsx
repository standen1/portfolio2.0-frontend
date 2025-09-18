import Head from "next/head";
//API Imports
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getAboutPage, getSkillsPage } from '@/lib/api';
import { HomePageProps } from "@/types/interfaces";
//Component Imports
import Hero from "@/components/Hero/Hero";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import About from "@/components/pages/home/About/About";
import ButtonNavWrapper from "@/components/lib/ButtonNavWrapper/ButtonNavWrapper";
import Button from "@/components/Button/Button";
import { useState } from "react";
import Skills from "@/components/pages/home/Skills/Skills";

export default function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [activeTab, setActiveTab] = useState("about");

  const pageData = () => {
    if (activeTab == "about") {
      return (
        <About data={data.aboutPage} />
      );
    } else {
      return (
        <Skills data={data.skillsPage} />
      );
    }
  }

  return (
    <>
      <Head>
        <title>Sean Standen | About Me</title>
        {/* ... (meta tags) */}
      </Head>
      <div>
        <main style={{ backgroundColor: "#F8F8F8"}}>
          <Hero pageInfo={{
            Title: data.aboutPage.PageInfo.Title,
            Description: data.aboutPage.PageInfo.Description,
            featuredImage: {
              src: data.aboutPage.PageInfo.featuredImage.src,
              alt: data.aboutPage.PageInfo.featuredImage.alt,
              width: data.aboutPage.PageInfo.featuredImage.width,
              height: data.aboutPage.PageInfo.featuredImage.height
            }
          }} />
          <section id="about-selections">
            <ButtonNavWrapper>
              <Button onClick={() => setActiveTab("about")} isActive={activeTab === "about"}>About</Button>
              <Button onClick={() => setActiveTab("skills")} isActive={activeTab === "skills"}>Skills</Button>
            </ButtonNavWrapper>
          </section>
          <section style={{ margin: "0 auto" }}>
            <ContentContainer>
                {pageData()}
            </ContentContainer>
          </section>
        </main>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps | any> = async () => {
      // Fetch your data here
      const AboutData = await getAboutPage();
      const SkillsData = await getSkillsPage();

      const data = {
        aboutPage: AboutData, 
        skillsPage: SkillsData
      }
      return {
        props: {
          data: data
        },
      };
};
