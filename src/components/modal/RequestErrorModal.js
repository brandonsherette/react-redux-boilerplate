import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { IconError } from '~components/icon';

const RequestErrorModal = ({ className, title, children, isOpen, onResetStatus }) => (
  <Modal className={`requestErrorModal ${className}`} toggle={onResetStatus} isOpen={isOpen}>
    <ModalHeader toggle={() => onResetStatus()}>
      {title}
    </ModalHeader>
    <ModalBody>
      <h4 className="text-center"><IconError />&nbsp;{title}</h4>
      {children}
    </ModalBody>
    <ModalFooter>
      <button type="button" className="btn btn-success" onClick={() => onResetStatus()}>Ok</button>
    </ModalFooter>
  </Modal>
);

RequestErrorModal.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  onResetStatus: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

RequestErrorModal.defaultProps = {
  className: '',
  title: 'Error',
};

export default RequestErrorModal;