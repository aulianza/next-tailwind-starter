import { fireEvent, render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('renders without errors', () => {
    render(<Button>Hello</Button>);
  });

  it('calls onClick handler when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Button>Hello</Button>);
    const button = getByText('Hello');
    expect(button).toBeInTheDocument();
  });

  it('applies the "primary" variant class by default', () => {
    const { container } = render(<Button>Hello</Button>);
    const button = container.firstChild;
    expect(button).toHaveClass('bg-primary-500');
  });

  it('applies the "outline" variant class when variant prop is set to "outline"', () => {
    const { container } = render(<Button variant='outline'>Hello</Button>);
    const button = container.firstChild;
    expect(button).toHaveClass('border-primary-500');
  });

  it('disables the button when isLoading prop is true', () => {
    const { container } = render(<Button isLoading>Hello</Button>);
    const button = container.firstChild;
    expect(button).toBeDisabled();
  });

  it('renders spinner when isLoading prop is true', () => {
    const { container } = render(<Button isLoading>Hello</Button>);
    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('renders block button when isBlock prop is true', () => {
    const { container } = render(<Button isBlock>Hello</Button>);
    const button = container.firstChild;
    expect(button).toHaveClass('w-full justify-center');
  });
});
