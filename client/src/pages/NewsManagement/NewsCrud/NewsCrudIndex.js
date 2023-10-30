import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

class ViewNewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = () => {
    // Send a GET request to retrieve news articles from the server
    fetch('http://localhost:3001/api/getNews')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ news: data });
      })
      .catch((error) => {
        console.error('Error fetching news articles:', error);
        // Handle errors, e.g., show an error message to the user
      });
  }

  handleDeleteNews = () => {
    // After a successful deletion, trigger a data refresh
    this.fetchNews();
  }

  render() {
    const { news } = this.state;

    return (
      <div>
        <h2>News Table</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {news.map((article) => (
              <tr key={article.news_id}>
                <td>{article.news_title}</td>
                <td>{article.news_description}</td>
                <td>
                  <img
                    src={article.news_image}
                    alt={article.news_title}
                    style={{ maxWidth: '100px' }}
                  />
                </td>
                <td>{article.created_at}</td>
                <td>
                  <Link to={`/news/updateNews/${article.news_id}`}>Edit</Link> {/* Use Link to navigate to the edit route */}
                  <button onClick={() => this.handleDeleteNews(article.news_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ViewNewsList;
