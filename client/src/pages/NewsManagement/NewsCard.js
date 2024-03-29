import React from 'react';
import './NewsCard.css';

const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      <img src={news.news_image} alt="News Image" />
      <h2>{news.news_title}</h2>
      {/* <p>{news.news_description}</p> */}
      <p>Published on: {new Date(news.created_at).toLocaleString()}</p>
    </div>
  );
};

export default NewsCard;
