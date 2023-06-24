import { render } from '@testing-library/react';

import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  test('renders without errors', () => {
    const { container } = render(<ProgressBar />);
    expect(container).toBeEmptyDOMElement();
  });
});
