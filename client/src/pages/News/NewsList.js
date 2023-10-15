import React, { Component } from 'react';
import axios from 'axios';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArticles: [],
    };
  }

  componentDidMount() {
    // Fetch news articles from the server
    axios.get('http://localhost:3001/api/getNews')
      .then((response) => {
        this.setState({ newsArticles: response.data });
      })
      .catch((error) => {
        console.error('Error fetching news articles:', error);
      });
  }

  render() {
    const { newsArticles } = this.state;

    return (
      <div>
        <h2>News Articles</h2>
        <ul>
          {newsArticles.map((article) => (
            <li key={article.news_id}>
              <h3>{article.news_title}</h3>
              <p>{article.news_description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NewsList;
