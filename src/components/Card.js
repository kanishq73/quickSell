import React from 'react';
import './Card.css';

// Importing SVGs
import UncheckedIcon from '../assets/To-do.svg';
import CheckedIcon from '../assets/Done.svg';
import InProgressIcon from '../assets/in-progress.svg';
import BacklogIcon from '../assets/Backlog.svg';

// Status-to-SVG mapping function
const getStatusIcon = (status) => {
  switch (status) {
    case 'Todo':
      return UncheckedIcon;
    case 'In progress':
      return InProgressIcon;
    case 'Backlog':
      return BacklogIcon;
    case 'Completed':
      return CheckedIcon;
    default:
      return UncheckedIcon;
  }
};

const Card = ({ ticket }) => {
  const { id, title, status, tag } = ticket;

  return (
    <div className="card">
      <div className="card-header">
        {/* Ticket ID */}
        <span className="card-id">{id}</span>
        {/* Status Icon */}
        <div className="card-status-icon">
          <img src="" />
        </div>
      </div>
      {/* Ticket Title */}
      <div className="card-body">
        <div className="card-status-icon">
          <img src={getStatusIcon(status)} alt={status} />
        </div>
        <h4 className="card-title">{title}</h4>
      </div>

      <div className="bottom">
        {tag && (
          <>
            <div className="filled"></div>
            <span className="temp" >{tag}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;