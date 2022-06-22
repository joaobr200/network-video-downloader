import React from "react";

import * as S from "./styles";
import { FaGithub, FaHeart } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={S.Footer()}>
      <div>
        <span>
          Feito com <FaHeart color="red" /> by{" "}
          <a href="https://www.github.com/joaobr200">JoaoBR200</a>{" "}
        </span>
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
    </footer>
  );
};

export default Footer;
