import React, { Children, useState } from 'react';
import { PropTypes } from 'prop-types';

import { Modal } from './Modal';

function PureWithModal({ isOpen, onOpen, onClose, modal, children, ...rest }) {
  return (
    <>
      {Children.only(children({ isOpen, onOpen, onClose }))}
      <Modal isOpen={isOpen} onClose={onClose} {...rest}>
        {modal}
      </Modal>
    </>
  );
}

PureWithModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  modal: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default function WithModal({ startOpen, onOpen, onClose, ...rest }) {
  const [isOpen, onSetIsOpen] = useState(startOpen);
  const handleOpen = () => {
    onSetIsOpen(true);
    if (onOpen) {
      onOpen();
    }
  };
  const handleClose = () => {
    onSetIsOpen(false);
    if (onClose) {
      onClose();
    }
  };
  return <PureWithModal isOpen={isOpen} onOpen={handleOpen} onClose={handleClose} {...rest} />;
}

WithModal.propTypes = {
  startOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
};

WithModal.defaultProps = {
  startOpen: false,
  onClose: undefined,
  onOpen: undefined,
};
