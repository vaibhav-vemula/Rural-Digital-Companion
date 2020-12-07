import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';


const NotFound = () => {
  return (
    <div className="NotFoundWrapper">
      <span className="NotfoundIcon">
        <FontAwesomeIcon icon={faFrown} />
      </span>
      <span className="NotFoundText">Sorry, the specified city was not found..</span>
    </div>
  );
};

export default NotFound;
