import React from 'react';

function DeleteNewsButton({ news, onDelete }) {
  const handleDelete = () => {
    // Send a DELETE request to delete the news article
    fetch(`http://localhost:3001/api/deleteNews/${news.news_id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        // Check if the deletion was successful and inform the parent component
        if (data.success) {
          onDelete();
        }
      })
      .catch((error) => {
        console.error('Error deleting news article:', error);
        // Handle errors, e.g., show an error message to the user
      });
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default DeleteNewsButton;
