import React from 'react';

import { Button } from '../Button';

import WithModal from './WithModal';

// eslint-disable-next-line react/prop-types
const ModalContents = ({ onClose }) => (
  <div style={{ background: 'papayawhip', fontSize: '12px' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas, ante eu ornare
    tincidunt, justo velit ultrices est, eu porta libero ante malesuada ante. Maecenas fermentum ex
    nec justo tempor rutrum. Donec sapien nisl, sollicitudin sit amet lorem eget, congue pharetra
    nibh. Nulla eu lobortis ante. Vivamus tortor sapien, dictum sit amet lacus sit amet, cursus
    porttitor sapien. Donec a massa et felis dictum eleifend. Etiam in dui at magna imperdiet
    gravida. Nam id tortor in leo facilisis elementum sit amet accumsan nunc. Maecenas lacus metus,
    dapibus aliquam mauris ac, luctus gravida ex.Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Praesent egestas, ante eu ornare tincidunt, justo velit ultrices est, eu porta libero ante
    malesuada ante. Maecenas fermentum ex nec justo tempor rutrum. Donec sapien nisl, sollicitudin
    sit amet lorem eget, congue pharetra nibh. Nulla eu lobortis ante. Vivamus tortor sapien, dictum
    sit amet lacus sit amet, cursus porttitor sapien. Donec a massa et felis dictum eleifend. Etiam
    in dui at magna imperdiet gravida. Nam id tortor in leo facilisis elementum sit amet accumsan
    nunc. Maecenas lacus metus, dapibus aliquam mauris ac, luctus gravida ex.{' '}
    <Button appearance="primary" onClick={onClose} role="button" tabIndex="0">
      Close
    </Button>
  </div>
);

export default {
  title: 'Design System/modal/WithModal',

  decorators: [
    storyFn => (
      <div style={{ width: '1200px', height: '800px', background: 'purple', color: 'white' }}>
        This is an example background {storyFn()}
      </div>
    ),
  ],

  parameters: {
    component: WithModal,
  },
};

export const startsClosed = () => (
  <WithModal modal={ModalContents}>
    {({ onOpen }) => (
      <div>
        <Button appearance="primary" onClick={onOpen} role="button" tabIndex="0">
          Open Modal
        </Button>
      </div>
    )}
  </WithModal>
);

startsClosed.story = {
  name: 'starts closed',
};

export const startsOpen = () => (
  <WithModal startOpen modal={ModalContents}>
    {({ onOpen }) => (
      <div>
        <Button appearance="primary" onClick={onOpen} role="button" tabIndex="0">
          Open Modal
        </Button>
      </div>
    )}
  </WithModal>
);

startsOpen.story = {
  name: 'starts open',
};
