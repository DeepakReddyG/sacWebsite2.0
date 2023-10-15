import React, { Component } from 'react';
import axios from 'axios';

class AddNewsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news_title: '',
      news_description: '',
      news_image: '',
      statusMessage: '', // Initialize status message state
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the news article data to send to the server
    const newsData = {
      news_title: this.state.news_title,
      news_description: this.state.news_description,
      news_image: this.state.news_image,
    };

    axios.post('http://localhost:3001/api/addNews', newsData)
      .then((response) => {
        // Set the success message
        this.setState({ statusMessage: 'News article added successfully' });

        // Clear the form fields after successful submission
        this.setState({
          news_title: '',
          news_description: '',
          news_image: '',
        });
      })
      .catch((error) => {
        // Set the error message
        this.setState({ statusMessage: 'Error adding news article' });
        console.error('Error adding news article:', error);
      });
  }

  render() {
    const { statusMessage } = this.state;
    return (
      <div>
        <h2>Add a News Article</h2>

        {statusMessage && (
          <div className={`status-message ${statusMessage.includes('Error') ? 'error' : 'success'}`}>
            {statusMessage}
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>News Title:</label>
            <input type="text" name="news_title" value={this.state.news_title} onChange={this.handleInputChange} />
          </div>

          <div>
            <label>News Description:</label>
            <textarea name="news_description" value={this.state.news_description} onChange={this.handleInputChange} />
          </div>

          <div>
            <label>News Image URL:</label>
            <input type="text" name="news_image" value={this.state.news_image} onChange={this.handleInputChange} />
          </div>

          <button type="submit">Add News</button>
        </form>
      </div>
    );
  }
}

export default AddNewsForm;
