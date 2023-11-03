import React, { Component } from 'react';
import NewsCard from './NewsCard';
import { Link } from 'react-router-dom';

import './NewsIndex.css';

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArticles: [],
    };
  }

  componentDidMount() {
    // Fetch the list of news articles from the server when the component mounts
    fetch('http://localhost:3001/api/getNews')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ newsArticles: data });
      })
      .catch((error) => {
        console.error('Error fetching news articles:', error);
      });
  }

  render() {
    const { newsArticles } = this.state;

    return (
      <div className="news-page">
        <h1>News Articles</h1>
        <Link to='/news/addnews'>Add news</Link>
        <div className="news-cards-container">
          {newsArticles.map((news) => (
            <NewsCard key={news.news_id} news={news} />
          ))}
        </div>
      </div>
    );
  }
}

export default NewsPage;
