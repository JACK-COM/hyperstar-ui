import { ComponentPropsWithRef } from "react";
import styled from "styled-components";
import { isImageFile } from "utils";
import ImageLoader from "./ImageLoader";
import MIcon from "./MIcon";

export type VideoLoaderProps = {
  src?: string;
  icon?: boolean;
} & ComponentPropsWithRef<"video">;

const VideoLoader = styled((props: VideoLoaderProps) => {
  const { src, icon = false, className = "", ...rest } = props;
  const cName = `${className} slide-down-fade-in`.trim();

  if (icon) return <MIcon>check_circle</MIcon>;
  if (src && isImageFile(src)) return <ImageLoader {...(props as any)} />;

  return (
    <video className={cName} width="100%" muted controls loop {...rest}>
      <source src={src} />
      <span>Unsupported File</span>
    </video>
  );
})`
  flex-shrink: 0;
`;

export default VideoLoader;
