import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { fireEvent, render } from '@testing-library/react';
import MyButton from './MyButton';

/// React Test Renderer ///

describe('MyButton', () => {
  /// -- Event -- ///

  it('raises onClick event when changed (@testing-library/react)', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(<MyButton onClick={handleClick} />);

    // trigger the onChange event for the select box
    const button = getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
