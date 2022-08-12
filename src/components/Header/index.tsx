import React from "react";
import Link from "next/link";

import { IoMdMenu } from "react-icons/io";
import * as S from "./styles";

const Header = () => (
  <header className={`${S.Header()}`}>
    <div className={S.Container()}>
      <div>
        <Link href="/">SV Downloader</Link>
      </div>
      <button
        type="button"
        title="Abrir menu"
        aria-label="Abrir menu"
        className={S.MenuButton()}
      >
        <IoMdMenu className={S.MenuIcon()} />
      </button>
    </div>
  </header>
);

export default Header;
