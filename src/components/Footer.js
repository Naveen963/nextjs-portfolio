import React from "react";
import Layout from "./Layout";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <Link
          href="/https://www.linkedin.com/in/naveen-kumar-79700a194/"
          className="underline underline-offset-2"
        >
          Naveen Kumar Chitturi
        </Link>
        <Link
          href="mailto:naveenkumar200101@gmail.com"
          className="bg-gradient-to-r from-gray-800 to-gray-500 rounded-lg p-3 text-white hover:text-dark hover:bg-none hover:border-2 border-black border-transparent"
        >
          Say Hello!
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
