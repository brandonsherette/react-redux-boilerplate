import React from 'react';
import PropTypes from 'prop-types';

const NoRecordsFound = ({ body }) => (
  <div className="components-no-records-found">
    <div className="alert alert-warning text-center">
      {body}
    </div>
  </div>
);

NoRecordsFound.propTypes = {
  body: PropTypes.node,
};

NoRecordsFound.defaultProps = {
  body: (<h1>0 Records Found</h1>),
};

export default NoRecordsFound;