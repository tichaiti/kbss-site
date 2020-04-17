import React from "react";

function RenderArticle({ articles }) {
  if (!articles.length) {
    return null;
  }

  const listOfArticles = articles.map((article, index) => {
    // JSX
    return (
      <div className="columns text-section" key={index}>
        <img
          src={`${article.imageUrl}`}
          className="column is-one-fifth image-container"
          alt={`${article.title}`}
        />
        <div className="column">
          <h2>
            <a href={`${article.link}`} target="_blank">
              {article.title}
            </a>
          </h2>
          <p>{article.body}</p>
        </div>
      </div>
    );
  });

  return listOfArticles;
}

export default RenderArticle;
