import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";
import Download from "../components/Download";
import midiaImg from "../public/static/midias.png";

import * as S from "../styles/pages/Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SV Downloader</title>
        <meta
          name="description"
          content="Baixe qualquer vídeo do youtube, facebook, tiktok e outras networks, confira a lista em nosso site."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main>
        <section className={S.HeroSection()}>
          <div className={`${S.HeroWrapper()}`}>
            <div className={S.HeroContent()}>
              <h1>
                Baixe qualquer vídeo das principais plataformas de streaming do
                mundo.
              </h1>
              <p>
                Copie o link do vídeo que você deseja baixar e cole no campo de
                texto abaixo e em alguns instantes seu vídeo estará pronto para
                download.
              </p>
            </div>

            <Image
              src={midiaImg}
              alt="Midias Suportadas para download"
              width={800}
              height={600}
              quality={100}
              placeholder="blur"
            />
          </div>
        </section>
        <Download />
      </main>
    </>
  );
};

export default Home;
