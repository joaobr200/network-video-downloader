import React from "react";

import Spinner from "./Spinner";

import * as S from "./styles";

const Loading: React.FC = () => {
  const loadingRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const element = loadingRef.current;
    console.log("scroll");

    element?.scrollIntoView();
  }, []);
  return (
    <div className={S.Container()} ref={loadingRef}>
      <div className={S.LoadingWrapper()}>
        <Spinner />
        <span>Buscando vídeo...</span>
      </div>
    </div>
  );
};

export default Loading;
