import { TransparentButton } from "components/Forms/Button";
import { ComponentPropsWithRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { isVideoFile } from "utils";
import MIcon from "./MIcon";
import VideoLoader from "./VideoLoader";

type ImageLoaderProps = {
  src?: string;
  icon?: boolean;
  activeClass?: string;
} & ComponentPropsWithRef<"img">;

const ILImage = styled.img`
  max-width: 100%;
  flex-shrink: 0;
`;

const ImageLoader = styled((props: ImageLoaderProps) => {
  const {
    src,
    icon = false,
    className = "",
    activeClass = "slide-down-fade-in",
    onClick,
    ...rest
  } = props;
  const containerRef = useRef(null);
  const cName = `${className} ${activeClass}`.trim();
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const scrollOpts = {
    capture: true,
    passive: true,
  };

  useEffect((): any => {
    const loadImageWhenInView = () => {
      const exit = !src;
      if (exit) return;

      window.removeEventListener("scroll", loadImageWhenInView, scrollOpts);

      const img = new Image();
      img.onerror = () => {
        setErr(true);
        setLoaded(true);
        setLoading(false);
      };
      img.onload = () => {
        setLoaded(true);
        setLoading(false);
      };
      img.src = src;
    };

    if (!src) return unmount;

    const { current } = containerRef;
    const notInView = Boolean(current) && !isInViewport(current);
    if (notInView) {
      window.addEventListener("scroll", loadImageWhenInView, scrollOpts);
      return unmount;
    }

    // If here, "containerRef.current" is falsy, or "forceLoad" is true
    loadImageWhenInView();
    return unmount;

    function unmount() {
      window.removeEventListener("scroll", loadImageWhenInView, true);
      setErr(false);
      setLoaded(false);
      setLoading(true);
    }
  }, [src]);

  if (src && isVideoFile(src))
    return <VideoLoader className={className} src={src} />;

  if (!loaded) return <MIcon ref={containerRef}>image</MIcon>;
  if (err) return <MIcon ref={containerRef}>close</MIcon>;
  if (loading) return <span ref={containerRef} className="spinner--before" />;
  if (icon) return <MIcon ref={containerRef}>check_circle</MIcon>;

  return (
    <ILImage
      onClick={onClick}
      className={cName}
      src={src}
      {...rest}
      alt={rest.alt}
    />
  );
})``;

export default ImageLoader;

export const ToggleImageLoader = styled((props: ImageLoaderProps) => {
  const { icon = false, ...rest } = props;
  const [iconOnly, showIcon] = useState(icon);
  const toggle = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    showIcon(!iconOnly);
  };

  if (iconOnly)
    return (
      <TransparentButton onClick={toggle} size="lg">
        <MIcon>image</MIcon> (View image)
      </TransparentButton>
    );

  return <ImageLoader {...rest} icon={iconOnly} onClick={toggle} />;
})`
  cursor: pointer;
`;

/** @description Assert that component bounding rect is on-screen */
export function isInViewport(elem: any) {
  if (!elem) return false;
  return elemInView(elem.getBoundingClientRect());
}

export function elemInView(boundingRect: any) {
  const { top, left, bottom, right } = boundingRect;
  const { documentElement } = window.document;
  return (
    top >= 0 &&
    left >= 0 &&
    bottom <= (window.innerHeight || documentElement.clientHeight) &&
    right <= (window.innerWidth || documentElement.clientWidth)
  );
}
