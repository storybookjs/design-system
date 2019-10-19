import React, { Children } from 'react';
import { PropTypes } from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';

import { Modal } from './Modal';

function WithModal({ isOpen, onOpen, onClose, modal, children }) {
  return (
    <>
      {Children.only(children({ isOpen, onOpen, onClose }))}
      <Modal isOpen={isOpen} onClose={onClose}>
        {modal}
      </Modal>
    </>
  );
}

WithModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  modal: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default compose(
  withState('isOpen', 'onSetIsOpen', ({ startOpen }) => !!startOpen),
  withHandlers({
    onOpen: ({ onSetIsOpen }) => () => onSetIsOpen(true),
    onClose: ({ onSetIsOpen, onClose }) => () => {
      onSetIsOpen(false);
      if (onClose) {
        onClose();
      }
    },
  })
)(WithModal);
