import { describe, it, expect } from 'vitest';
import { sum, difference, product } from './math.js';

describe('Math functions', () => {
  it('sum: 2 + 3 = 5', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('difference: 10 - 4 = 6', () => {
    expect(difference(10, 4)).toBe(6);
  });

  it('product: 3 * 4 = 12', () => {
    expect(product(3, 4)).toBe(12);
  });
});
