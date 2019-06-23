import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { IconSuccess } from '~components/icon';

const RequestCompletedModal = ({ className, title, children, isOpen, onResetStatus }) => (
  <Modal className={`requestCompletedModal ${className}`} toggle={onResetStatus} isOpen={isOpen}>
    <ModalHeader toggle={() => onResetStatus()}>
      {title}
    </ModalHeader>
    <ModalBody>
      <h4 className="text-center"><IconSuccess />&nbsp;{title}</h4>
      {children}
    </ModalBody>
    <ModalFooter>
      <button type="button" className="btn btn-success" onClick={() => onResetStatus()}>Ok</button>
    </ModalFooter>
  </Modal>
);

RequestCompletedModal.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  onResetStatus: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

RequestCompletedModal.defaultProps = {
  className: '',
  title: 'Task Completed!',
};

export default RequestCompletedModal;