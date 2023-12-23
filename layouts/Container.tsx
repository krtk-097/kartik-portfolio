import Head from "next/head";
import React from "react";
import NavBar from "../components/NavBar/NavBar";

//Redux
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import { selectTheme } from "../reducers/themeSlice";



const Container = ({ children }: any) => {
  const value = useSelector(selectTheme);

  return (
    <motion.div
      className={``}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Kartik</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name="author" content="Kartik Sharma"></meta>
        <meta name="keywords" content="Kartik,Kartik554,Kartik.ts,Development,Android Development,Web Development, portfolio,TailwindCSS,React.js,react,github, Next.js,Redux,Framer Motion, projects, skills"></meta>
      </Head>
      <NavBar />
      {children}
      <Footer />
    </motion.div>
  );
};

export default Container;
