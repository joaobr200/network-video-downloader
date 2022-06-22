import React from "react";
import { validateUrlByRegex } from "../../helpers/URLregex";
import { fetchVideo } from "../../store/duck/fetchVideo";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import NetworkIcon, { TNetwork } from "../NetworkIcon";
import Video from "../Video";
import Loading from "../Loading";

import * as S from "./styles";

const Download: React.FC = () => {
  const [inputState, setInputState] = React.useState("");
  const [inputWithIcon, setInputWithIcon] = React.useState<TNetwork>("");
  const dispatch = useAppDispatch();
  const { video } = useAppSelector((state) => state);

  function urlValidate(url: string) {
    const network = validateUrlByRegex(url);
    setInputWithIcon(network);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    dispatch(fetchVideo(inputState));

    return;
  }

  function handlePaste(e: React.ClipboardEvent) {
    const pasteData = e.clipboardData.getData("text");

    urlValidate(pasteData);

    dispatch(fetchVideo(pasteData));

    return;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const data = e.target.value;

    urlValidate(data);

    return;
  }
  return (
    <section id="download" className={S.DownloadSection()}>
      <form onSubmit={(e) => handleSubmit(e)} className={S.From()}>
        <label htmlFor="download" />
        <div className={S.InputWrapper()}>
          <input
            type="text"
            name="download"
            id="download"
            placeholder="Cole o link do vídeo aqui..."
            className={S.Input({ withIcon: inputWithIcon ? true : false })}
            onPaste={(e) => handlePaste(e)}
            onChange={(e) => handleChange(e)}
          />
          {inputWithIcon && <NetworkIcon network={inputWithIcon} />}
        </div>
      </form>
      {video.loading && <Loading />}
      {video.success
        ? video.data && (
            <Video
              title={video.data.title}
              duration={video.data.duration}
              url={video.data.url}
              embed={video.data.embed}
            />
          )
        : ""}
      {video.error && <h1>URL Inválida</h1>}
    </section>
  );
};

export default Download;
