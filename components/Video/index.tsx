import React from "react";
import { motion } from "framer-motion";

import Button from "../Button";
import * as S from "./styles";

const Video: React.FC = () => {
  return (
    <div className={S.Container()} id="video">
      <motion.article
        animate={{ opacity: [0, 1], y: [-20, 0] }}
        transition={{ duration: 2, ease: "anticipate" }}
        className={S.VideoArticle()}
      >
        <iframe
          className={S.Frame()}
          src="https://www.youtube.com/embed/4UprQWwhw_A"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div className={S.VideoDetails()}>
          <div>
            <h1>lil uzi vert - xo tour life + p2 [slowed + reverb]</h1>
            <span>8:42</span>
          </div>
          <div>
            <button className={Button({ size: "lg" })}>Download</button>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default Video;
