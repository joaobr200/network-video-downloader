import React, { useState } from "react";
import { validateUrl } from "../../utils/validateUrl";
import { fetchVideo } from "../../store/duck/fetchVideo";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import NetworkIcon, { TNetwork } from "../NetworkIcon";
import Video from "../Video";
import Loading from "../Loading";

import * as S from "./styles";

const Download = () => {
  const [inputValue, setInputValue] = useState("");

  // AFTER SUBMIT AND VALIDATE URL, THIS STATE SAVE THE WHICHI NETWORK FOR DOWNLOAD
  const [inputWithIcon, setInputWithIcon] = useState<TNetwork>("");

  const dispatch = useAppDispatch();
  const { video } = useAppSelector((state) => state);

  /**
   * This function takes a string and returns a TNetwork object.
   * @param {string} url - string - the url to validate
   * @returns the network object.
   */
  function handleValidateUrl(url: string): TNetwork {
    const network = validateUrl(url);
    setInputWithIcon(network);

    return network;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (handleValidateUrl(inputValue) === "error") {
      console.error("URL INVÁLIDA!");
      return;
    }

    dispatch(fetchVideo(inputValue));
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
    setInputValue(data);
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
      {video.success ? video.data && <Video data={video.data} /> : ""}
      {video.error?.ok && video.error.message && (
        <span>{video.error.message}</span>
      )}
    </section>
  );
};

export default Download;
