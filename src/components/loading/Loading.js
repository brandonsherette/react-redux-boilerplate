import React from 'react';
import PropTypes from 'prop-types';

export const Loading = ({ title }) => {
  const hasTitle = title ? true : false;

  return (
    <div className="components-loading loading text-center">
      <i className="fa fa-spin fa-spinner" />
      {hasTitle && (
        <div className="mt-3 loading__title">{title}</div>
      )}
    </div>
  );
};

Loading.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element]),
};

Loading.defaultProps = {
  title: '',
};

export default Loading;