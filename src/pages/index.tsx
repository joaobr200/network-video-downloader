import { MouseEvent } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { motion, useMotionValue } from "framer-motion";
import Header from "../components/Header";
import Download from "../components/Download";
import youtubeImg from "../../public/static/youtube.png";

import * as S from "../styles/pages/Home";
import { Rainbow } from "../components/Ui/Rainbow";

const Home: NextPage = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function onMouseUpImage(e: MouseEvent) {
    x.set(e.clientX / -32);
    y.set(e.clientY / -32);
  }

  function onMouseDownImage() {
    function decreaseX() {
      let i = 0;

      if (i > x.get() || i > y.get()) {
        x.set(x.get() + 1);
        y.set(y.get() + 1);
        return;
      }

      clearInterval(myInterval);
    }

    const myInterval = setInterval(decreaseX, 10);
  }

  return (
    <>
      <Head>
        <title>SV Downloader</title>
        <meta name="description" content="Baixe qualquer vídeo do youtube." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Rainbow />

      <Header />

      <main>
        <section className={S.HeroSection()}>
          <div className={`${S.HeroWrapper()}`}>
            <div className={S.HeroContent()}>
              <h1>Baixe qualquer vídeo do youtube.</h1>
              <p>
                Copie o link do vídeo que você deseja baixar e cole no campo de
                texto abaixo e em alguns instantes seu vídeo estará pronto para
                download.
              </p>
            </div>

            <motion.div
              onMouseMove={onMouseUpImage}
              onMouseLeave={onMouseDownImage}
              style={{ x, y }}
              className={S.HeroImage()}
            >
              <Image
                src={youtubeImg}
                alt="Youtube"
                width={600}
                height={600}
                quality={100}
                placeholder="blur"
              />
            </motion.div>
          </div>
        </section>
        <Download />
      </main>
    </>
  );
};

export default Home;
