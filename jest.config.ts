module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.+(ts|tsx)", "**/?(*.)+(spec|test).+(ts|tsx)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
    jest: {
      expect: (element: HTMLElement) => ({
        toHaveTextContent: (text: string) => {
          const hasText = element.textContent?.includes(text);
          if (hasText) {
            return {
              pass: true,
              message: () =>
                `Expected element not to have text content: ${text}`,
            };
          } else {
            return {
              pass: false,
              message: () => `Expected element to have text content: ${text}`,
            };
          }
        },
      }),
    },
  },
};
