import React from "react";

import * as S from "./styles";
import { FaGithub } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className={S.Header()}>
      <div>
        <h1>SV Downloader</h1>
      </div>
      <div>
        <a
          href="https://www.github.com/joaobr200"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className={S.GithubIcon()} />
        </a>
      </div>
    </header>
  );
};

export default Header;
