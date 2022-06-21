import type { NextPage } from "next";
import Header from "../components/Header";
import Button from "../components/Button";
import Download from "../components/Download";
import Video from "../components/Video";

import * as S from "../styles/Home";
import { FaArrowRight } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <section className={S.HeroSection()}>
        <div className={S.HeroWrapper()}>
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
          <a
            href="#download"
            title="Cliquei aqui para fazer download de qualquer vídeo"
            className={Button({ withIcon: true })}
          >
            FAZER DOWNLOAD
            <div className={S.HeroIconButton()}>
              <FaArrowRight />
            </div>
          </a>
          <img src="/midias.png" alt="Midias Suportadas para download" />
        </div>
      </section>
      <Download />
      <Video />
    </>
  );
};

export default Home;
