import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
// import RenderYouTubeVideo from "./RenderYouTubeVideo";
import DisplayArticles from "./DisplayArticles";
import articles from "./data/articles.json";

// Import css files
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./YouTubeSection.scss";

function RenderYouTubeVideos(list) {
  if (!list.length) {
    return null;
  }

  const videos = list.map((youtubeVideoId, index) => {
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

  return videos;
}

function YouTubeSection(props) {
  // List of YouTube Videos id
  const listOfVideos = [
    "vkbPXkjJMDI",
    "a3Xe2eeBIpg",
    "8jv6_OblO0Y",
    "TjckCktaGi8",
    "2Db8Ap6minc",
    "TUNxPWo5tuk",
    "37cWAUnK_YM"
  ];

  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };

  return (
    <Section color={props.color} size={props.size}>
      <div className="container YouTubeSection">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Swiper {...params}>{RenderYouTubeVideos(listOfVideos)}</Swiper>

        <DisplayArticles articles={articles}/>
      </div>
    </Section>
  );
}

export default YouTubeSection;
