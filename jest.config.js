
module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(mui-tel-input)/)',
    ],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      'mui-tel-input': '<rootDir>/mocks/mui-tel-input.js', 
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  };
  