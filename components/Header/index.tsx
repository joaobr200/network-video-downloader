import React from "react";

import { IoMdMenu } from "react-icons/io";
import * as S from "./styles";

const Header = () => (
  <header className={`${S.Header()}`}>
    <div>
      <a href="/">SV Downloader</a>
    </div>
    <div>
      <IoMdMenu className={S.MenuIcon()} />
    </div>
  </header>
);

export default Header;
