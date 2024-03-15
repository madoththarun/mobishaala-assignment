import ReactPlayer from "react-player";
import "./index.css";
const VideoPlayer = () => (
  <div className="video-player-container">
    <div>
      <ReactPlayer
        width="100%"
        height="100%"
        style={{ borderRadius: "10px", overflow: "hidden" }}
        url="https://youtu.be/jg5d59ligW4?si=K_7Nzpz6aVNM7PA-"
      />
    </div>
    <div className="button-container">
      <button type="button" className="btn text-center">
        Buy
      </button>
    </div>
  </div>
);
export default VideoPlayer;
