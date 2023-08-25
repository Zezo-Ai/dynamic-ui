import { Meta, StoryObj } from '@storybook/react';

import { DButton, DModal } from '../../components';
import { ModalContextProvider, useModalContext as useModalContextHook } from '../../contexts';
import type { ModalProps } from '../../contexts';

const ExampleModal = ({ closeModal }: ModalProps) => (
  <DModal
    name="example"
    isCentered
    isStatic
    showCloseButton
    onEventClose={() => closeModal()}
  >
    <div slot="header">
      <h5 className="fw-bold">Do you want to reject the offer?</h5>
    </div>
    <div slot="body">
      <p className="py-3 px-5">Modal body</p>
    </div>
    <div slot="footer">
      <DButton
        text="cancel"
        theme="secondary"
        variant="outline"
        className="d-grid"
        isPill
        onEventClick={() => closeModal()}
      />
      <DButton text="ok" className="d-grid" isPill />
    </div>
  </DModal>
);

const ExampleChildren = () => {
  const { openModal } = useModalContextHook();
  return <DButton text="Open Modal" onEventClick={() => openModal('example')} />;
};

const Example = () => (
  <ModalContextProvider
    portalName="examplePortal"
    availableModals={{
      example: ExampleModal,
    }}
  >
    <ExampleChildren />
  </ModalContextProvider>
);

const config: Meta<typeof Example> = {
  title: 'Design System/Patterns/Modal',
  component: Example,
};

export default config;
type Story = StoryObj<typeof Example>;

export const useModalContext: Story = {
  args: {},
};
