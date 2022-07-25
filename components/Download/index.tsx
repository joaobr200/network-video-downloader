import React, { useState } from "react";
import { validateUrl } from "../../utils/validateUrl";
import { fetchVideo } from "../../store/duck/fetchVideo";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import NetworkIcon, { TNetwork } from "../NetworkIcon";
import Video from "../Video";
import Loading from "../Loading";

import * as S from "./styles";

function Download() {
  const [inputState, setInputState] = useState("");
  const [inputWithIcon, setInputWithIcon] = useState<TNetwork>("");
  const dispatch = useAppDispatch();
  const { video } = useAppSelector((state) => state);

  function handleValidateUrl(url: string): TNetwork {
    const network = validateUrl(url);
    setInputWithIcon(network);

    return network;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (handleValidateUrl(inputState) === "error") {
      console.error("URL INVÁLIDA!");
      return;
    }

    dispatch(fetchVideo(inputState));
  }

  function handlePaste(e: React.ClipboardEvent) {
    const pasteData = e.clipboardData.getData("text");

    if (handleValidateUrl(pasteData) === "error") {
      console.error("URL INVÁLIDA!");
      return;
    }

    dispatch(fetchVideo(pasteData));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const data = e.target.value;
    setInputState(data);
  }

  return (
    <section id="download" className={S.DownloadSection()}>
      <form onSubmit={(e) => handleSubmit(e)} className={S.From()}>
        <div className={S.InputWrapper()}>
          <input
            type="text"
            name="download"
            id="download"
            placeholder="Cole o link do vídeo aqui..."
            className={S.Input({
              withIcon: Boolean(inputWithIcon),
            })}
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
      {video.error?.ok && video.error.message && (
        <span>{video.error.message}</span>
      )}
    </section>
  );
}

export default Download;
