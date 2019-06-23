import React from 'react';
import PropTypes from 'prop-types';

const ModelDetailsPane = ({ model }) => (
  <div className="modelDetailsPane">
    <ul className="modelDetailsPane__list">
      {Object.keys(model).map(key => {
        if (model[key] && typeof model[key] === 'object') {
          return <li key={key}>{key}: <ModelDetailsPane model={model[key]} /></li>
        }

        if (typeof model[key] === 'boolean') {
          return (
            <li
              className="modelDetailsPane__list__item"
              key={key}>{key}: {model[key] ? 'true' : 'false'}</li>
          );
        }
        return (
          <li
            className="modelDetailsPane__list__item"
            key={key}>{key}: {model[key]}</li>
        );
      })}
    </ul>
  </div>
);

ModelDetailsPane.propTypes = {
  model: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default ModelDetailsPane;