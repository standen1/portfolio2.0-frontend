import Head from "next/head";
//API Imports
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getAboutPage, getSkillsPage } from '@/lib/api';
import { HomePageProps } from "@/types/interfaces";
//Component Imports
import Hero from "@/components/Hero/Hero";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import About from "@/components/pages/home/About/About";
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
        <main style={{ backgroundColor: "#F8F8F8", margin: "50px 0 100px" }}>
          <Hero pageInfo={{
            Title: "Welcome to My Portfolio",
            Description: "This is a showcase of my work.",
            featuredImage: {
              src: "/jsabet1.jpg",
              alt: "A description of the image",
              width: "800px",
              height: "600px"
            }
          }} />
          <section id="about-selections" style={{padding: "30px 0", width: '100%', maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '15px'}}>
            {/* Pass the boolean state to the isActive prop */}
            <Button onClick={() => setActiveTab("about")} isActive={activeTab === "about"}>About</Button>
            <Button onClick={() => setActiveTab("skills")} isActive={activeTab === "skills"}>Skills</Button>
          </section>
          <section style={{ paddingTop: "16px", maxWidth: "1200px", margin: "0 auto" }}>
            <ContentContainer>
                {pageData()}
            </ContentContainer>
          </section>
        </main>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async (context) => {
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
