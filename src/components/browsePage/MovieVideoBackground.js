import { useSelector } from "react-redux";
import useNowPlayingTrailer from "../../customHooks/useNowPlayingTrailer";

const MovieVideoBackground = ({ movieId }) => {
  useNowPlayingTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div>
      {trailerVideo && (
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo.key +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      )}
    </div>
  );
};

export default MovieVideoBackground;
