import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

//Components
import LoadingAnimation from "../components/LoadingAnimation/LoadingAnimation";
import MainScreens from "../components/MainScreens/MainScreens";
import Navigation from "../components/Navigations/Navigation";
import Container from "../layouts/Container";

const Home: NextPage = () => {
  const [showAnimation, setShowAnimation] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
    }, 1000);
  }, []);

  if (showAnimation) {

    return (
      <div className={``}>
        <Head>
          <title>Kartik</title>
          <link rel='icon' href='/favicon.ico' />
          <meta name="author" content="Kartik Sharma"></meta>
          <meta name="keywords" content="Kartik,krtk-097,kartik.ts,Development,Android Development,Web Development, portfolio,TailwindCSS,React.js,react,github, Next.js,Redux,Framer Motion, projects, skills"></meta>
        </Head>
        <LoadingAnimation />
      </div>
    );
  } else {
    return (
      <Container>
        <div className='min-h-screen h-full max-w-screen-md mx-4 md:mx-auto flex flex-col flex-grow '>
          <Navigation />
          <MainScreens />
        </div>
      </Container>
    );
  }
};

export default Home;
