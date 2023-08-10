import type { Preview } from '@storybook/react';

export default {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Design System',
          [
            'Tokens',
            [
              'Typography',
              'Colors',
              'Spacing',
              'Border',
              'Shadow',
              'Layout',
            ],
            'Components',
            [
              'Button',
              'Icon',
              'Input',
              'Input Search',
              'Input Password',
              'Input Currency Base',
              'Input Currency',
              'Input Counter',
              'Input Pin',
              'Input Select',
              'Input Check',
              'Input Switch',
              'Formik Input',
              'Formik Input Select',
              'Progress Bar',
              'Tooltip',
              'Quick Action Button',
              'Quick Action Check',
              'Quick Action Select',
              'Quick Action Switch',
              'List',
              'List Item',
              'List Item Movement',
              '*',
              'Skeleton',
              'Box File',
              'Chip',
              'Badge',
            ],
            'Patterns',
            [
              'Alert',
              'Modal',
              'Offcanvas',
              'Popover',
              'Tabs',
              'Collapse',
              'Collapse Icon Text',
            ],
          ],
        ],
      },
    },
  },
} as Preview;
