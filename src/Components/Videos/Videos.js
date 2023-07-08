import React from "react";
import "./Videos.css";
import VideoCard from "../VideoCard/VideoCard";

const Videos = ({ videos }) => {
  return (
    <div className="videos">
      {videos.map((iteam, index) => (
        <VideoCard
        key={iteam.image}
        image={iteam.image}
        name={iteam.name}
        index={index}
        ></VideoCard>
      ))}
    </div>
  );
};

export default Videos;
