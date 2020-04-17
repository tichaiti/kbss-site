import React from "react";

function RenderYouTubeVideos(props) {
  if (!props.videos.length) {
    return null;
  }

  const listOfVideosToRender = props.videos.map((youtubeVideoId, index) => {
    return (
      <div className="youtube-video columns" key={index}>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeVideoId}`}
          frameBorder="0"
          className="column"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div>
    );
  });

  return listOfVideosToRender;
}

export default RenderYouTubeVideos;
