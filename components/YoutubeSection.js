import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import articles from "./data/articles.json";

// Import css files
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./YouTubeSection.scss";

function RenderYouTubeVideos(list) {
  if (!list.length) {
    return null;
  }

  const videos = list.map(youtubeVideoId => {
    return (
      <div className="youtube-video columns">
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

function RenderArticle(articles) {
  if (!articles.length) {
    return null;
  }

  const listOfArticles = articles.map((article) => {
    // JSX
    return (
      <div className="columns text-section">
        <img
          src={`${article.imageUrl}`}
          className="column is-one-fifth image-container"
          alt={`${article.title}`}
        />
        <div className="column">
          <h2>
            <a href={`${article.link}`} target="_blank">{article.title}</a>
          </h2>
          <p>{article.body}</p>
        </div>
      </div>
    );
  });

  return listOfArticles;
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

        {RenderArticle(articles)}
      </div>
    </Section>
  );
}

export default YouTubeSection;
