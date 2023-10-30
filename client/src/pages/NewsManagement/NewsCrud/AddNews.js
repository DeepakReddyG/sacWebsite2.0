import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddNewsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news_title: '',
      news_description: '',
      news_image: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { news_title, news_description, news_image } = this.state;

    // Send a POST request to add the news article to the server
    fetch('http://localhost:3001/api/addNews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        news_title,
        news_description,
        news_image,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response, e.g., show a success message or navigate to a different page
        console.log(data);
        // Optionally, reset the form
        this.setState({
          news_title: '',
          news_description: '',
          news_image: '',
        });
      })
      .catch((error) => {
        console.error('Error adding news:', error);
        // Handle errors, e.g., show an error message to the user
      });
  }

  render() {
    return (
      <div>
        <h2>Add News Article</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="news_title"
              value={this.state.news_title}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="news_description"
              value={this.state.news_description}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Image URL:</label>
            <input
              type="text"
              name="news_image"
              value={this.state.news_image}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Add News</button>
        </form>
      </div>
    );
  }
}

export default AddNewsForm;
