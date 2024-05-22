import React from 'react';
import PropTypes from 'prop-types';
import './link.css';

export const Link = ({ label, target }) => {

  const DEFAULT_LINK = 'https://www.mohitbalwani.com'

  return (
    <a
      className='link'
      href={target ? target : DEFAULT_LINK}
    >
      {label}
    </a>
  );
};

Link.propTypes = {
  label: PropTypes.string.isRequired,
  target: PropTypes.string
};

Link.defaultProps = {
  label: 'This is a link',
  target: 'https://www.mohitbalwani.com'
};
