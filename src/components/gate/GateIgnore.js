import PropTypes from 'prop-types';

export const GateIgnore = ({ children, ignore }) => {
  return (ignore) ? null : children;
}

GateIgnore.propTypes = {
  children: PropTypes.node.isRequired,
  ignore: PropTypes.bool.isRequired,
};

export default GateIgnore;