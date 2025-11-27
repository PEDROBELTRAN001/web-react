import React, { useEffect, useRef } from "react";

const Trailer: React.FC = () => {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cargar la API de YouTube
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    // Cuando la API esté lista
    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player("yt-player", {
  videoId: "EC8cnpLJLl0",
  playerVars: {
    autoplay: 1, // autoplay
    controls: 0,
    modestbranding: 1,
    mute: 1,     // silenciar
  },
});

    };

    // IntersectionObserver para reproducir/pausar según visibilidad
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (playerRef.current && playerRef.current.playVideo) {
            if (entry.isIntersecting) {
              playerRef.current.playVideo();
            } else {
              playerRef.current.pauseVideo();
            }
          }
        });
      },
      { threshold: 0.5 } // se considera visible cuando al menos 50% de la sección está en viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[500px] mt-6 flex justify-center"
    >
      <div id="yt-player" className="w-full h-full"></div>
    </div>
  );
};

export default Trailer;
