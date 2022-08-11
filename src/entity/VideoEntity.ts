type Format = {
  qualityLabel: string;
  url: string;
  hasAudio: boolean;
  container: string;
};

export interface VideoEntity {
  title: string;
  duration: string;
  embed: string;
  url: string;
  mp4: Format[];
  webm: Format[];
  audio: Format[];
}
