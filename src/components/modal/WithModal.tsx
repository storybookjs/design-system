import React, { Children, ComponentProps, ReactNode, useState } from 'react';

import { Modal } from './Modal';

const PureWithModal = ({
  isOpen,
  onOpen,
  onClose,
  modal,
  children,
  ...rest
}: Props & Omit<ComponentProps<typeof Modal>, 'children'>) => {
  return (
    <>
      {Children.only(children({ isOpen, onOpen, onClose }))}
      <Modal isOpen={isOpen} onClose={onClose} {...rest}>
        {modal}
      </Modal>
    </>
  );
};

type AnyFn = (...args: any[]) => void;

interface Props {
  isOpen: boolean;
  onOpen: AnyFn;
  onClose: AnyFn;
  modal: ComponentProps<typeof Modal>['children'];
  children: (o: { isOpen?: boolean; onClose?: AnyFn; onOpen?: AnyFn }) => ReactNode;
}

export default function WithModal({
  startOpen = false,
  onOpen,
  onClose,
  ...rest
}: Omit<ComponentProps<typeof PureWithModal>, 'onOpen' | 'onClose' | 'isOpen'> & {
  startOpen?: boolean;
  onOpen?: AnyFn;
  onClose?: AnyFn;
}) {
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
