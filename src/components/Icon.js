import React from 'react';
import PropTypes from "prop-types";

const Icon = (props) => {
  return (
    <svg className={ props.isHighScore ? 'is-high-score' : null }></svg>
  )
}

Icon.propTypes = {
    isHighScore: PropTypes.bool
};

export default Icon;