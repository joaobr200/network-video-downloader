import React from "react";

import * as S from "./styles";
import { IoMdMenu } from "react-icons/io";

const Header: React.FC = () => {
  return (
    <div className={`${S.Container()}`}>
      <header className={`${S.Header()}`}>
        <div>
          <a href="/">SV Downloader</a>
        </div>
        <div>
          <IoMdMenu className={S.MenuIcon()} />
        </div>
      </header>
    </div>
  );
};

export default Header;
