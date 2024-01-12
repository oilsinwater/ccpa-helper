import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../theme'; // Import your custom theme

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider theme={customTheme}> {/* Wrap each story with ChakraProvider */}
        <Story />
      </ChakraProvider>
    ),
  ],
};

export default preview;
