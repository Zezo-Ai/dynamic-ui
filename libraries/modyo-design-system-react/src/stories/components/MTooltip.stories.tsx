import { StoryFn, Meta } from '@storybook/react';

import { MTooltip } from '../../components';

const config: Meta<typeof MTooltip> = {
  title: 'React/Components/Tooltip',
  component: MTooltip,
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'left', 'bottom', 'right'],
      defaultValue: 'bottom',
    },
    withHover: {
      type: 'boolean',
      defaultValue: true,
    },
    withClick: {
      type: 'boolean',
      defaultValue: false,
    },
    withFocus: {
      type: 'boolean',
      defaultValue: false,
    },
    classNameContainer: {
      type: 'string',
      control: 'text',
    },
    className: {
      type: 'string',
      control: 'text',
    },
    Component: {
      defaultValue: 'Link',
      type: 'string',
      control: 'text',
    },
    children: {
      control: 'text',
      type: 'string',
      defaultValue: 'Lorem ipsum dolor sit amet consectetur.',
    },
    offSet: {
      type: 'number',
    },
    padding: {
      type: 'number',
    },
  },
};

export default config;

export const Default = {
  render: (args) => (
    <div className='d-flex justify-content-center align-items-center p-5 w-100'>
      <MTooltip {...args} />
    </div>
  ),
};
