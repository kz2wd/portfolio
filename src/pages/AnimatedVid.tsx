import { useRef } from "react";

export default function HoverVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
  };

  const handleLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
  };

  return (
    <video
      ref={videoRef}
      muted
      loop
      preload="metadata"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ width: 75 }}
      id="animated-logo"
    >
      <source src="/logos/logo_anim2.webm" type="video/webm" />
    </video>
  );
}
