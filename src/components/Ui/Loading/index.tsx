import { useRef, useEffect } from "react";
import { useScrollIntoView } from "../../../hooks/useScrollIntoView";

import Spinner from "./Spinner";

import * as S from "./styles";

const Loading: React.FC = () => {
  const loadingRef = useRef<HTMLDivElement>(null);
  useScrollIntoView(loadingRef);
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
