// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// JSDOM polyfills for APIs used by the app.
Object.defineProperty(window, "scrollTo", { value: () => {}, writable: true });

class MockIntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, "IntersectionObserver", {
  value: MockIntersectionObserver,
  writable: true,
});
Object.defineProperty(global, "IntersectionObserver", {
  value: MockIntersectionObserver,
  writable: true,
});
