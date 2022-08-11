import React from "react";
import Link from "next/link";

import { IoMdMenu } from "react-icons/io";
import * as S from "./styles";

const Header = () => (
  <header className={`${S.Header()}`}>
    <div>
      <Link href="/">SV Downloader</Link>
    </div>
    <button type="button" title="Abrir menu" aria-label="Abrir menu">
      <IoMdMenu className={S.MenuIcon()} />
    </button>
  </header>
);

export default Header;
