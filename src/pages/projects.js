import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import EcommerceImg from "../../public/images/projects/ecommerce.jpg";
import YtCloneImg from "../../public/images/projects/YoutubeClone.jpg";
import TAImg from "../../public/images/projects/TechAlliance.jpg";
import ReactPortfolioImg from "../../public/images/projects/Portfolio-React.jpg";
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between  relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-2xl dark:bg-light" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg relative"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw,50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            Visit Project{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-2xl  dark:border-light " />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg relative"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw,50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg underline  font-semibold"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Naveen Kumar Chitturi | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Ecommerce Application-(MERN Stack)"
                summary="This project integrates modern technologies such as React, Node.js, Tailwind CSS, and MongoDB to implement essential e-commerce features like purchasing, payment processing, cart management, and user authentication, delivering a secure and efficient online shopping platform."
                link="/"
                img={EcommerceImg}
                github="https://github.com/Naveen963/ecommerce"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Tech Alliance Community Portal"
                summary="This project integrates modern technologies such as React, React Query and Styled Components. It consists of features like registering for webinars, courses and Search functionalities and animations/"
                link="https://techalliance.netlify.app/login"
                img={TAImg}
                github="https://github.com/Naveen963/Tech-Alliance"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Ecommerce Application-(MERN Stack)"
                summary="This project integrates modern technologies such as React, Node.js, Tailwind CSS, and MongoDB to implement essential e-commerce features like purchasing, payment processing, cart management, and user authentication, delivering a secure and efficient online shopping platform."
                link="/"
                img={EcommerceImg}
                github="https://github.com/Naveen963/ecommerce"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Youtube Clone"
                summary="This project integrates modern technologies such as React, Tailwind CSS and Rapid API implement essential features like searching and streaming videos."
                link="https://stream-youtube.netlify.app/"
                img={YtCloneImg}
                github="https://github.com/Naveen963"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Ecommerce Application-(MERN Stack)"
                summary="Portfolio made with React and Tailwind CSS"
                link="https://naveen-kumar-chitturi.netlify.app/"
                img={ReactPortfolioImg}
                github="https://github.com/Naveen963/Portfolio"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
