import React from 'react';

const SubmissionStatus = ({ success, message }) => {
  return (
    <div className={`submission-status ${success ? 'success' : 'error'}`}>
      {message}
    </div>
  );
};

export default SubmissionStatus;
