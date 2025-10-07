import jasmineDom from '@testing-library/jasmine-dom';
import { cleanup } from '@testing-library/react';

beforeAll(() => {
  // Registra todos los matchers: toBeInTheDocument, etc.
  jasmine.addMatchers(jasmineDom);
});

afterEach(() => {
  cleanup();
});
