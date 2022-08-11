import React from "react";
import Link from "next/link";

import { IoMdMenu } from "react-icons/io";
import * as S from "./styles";

const Header = () => (
  <header className={`${S.Header()}`}>
    <div>
      <Link href="/">SV Downloader</Link>
    </div>
    <div>
      <IoMdMenu className={S.MenuIcon()} />
    </div>
  </header>
);

export default Header;
