import { isYuan, isMobileNumber } from '@u/validator';

describe('validator', () => {
  it('isYuan', () => {
    expect(isYuan()).toBe(false);
    expect(isYuan(null)).toBe(false);
    expect(isYuan('0')).toBe(false);
    expect(isYuan('.')).toBe(false);
    expect(isYuan('0.')).toBe(false);
    expect(isYuan('0.1')).toBe(true);
    expect(isYuan('0.01')).toBe(true);
    expect(isYuan('1')).toBe(true);
    expect(isYuan('1.')).toBe(true);
    expect(isYuan('1.0')).toBe(true);
    expect(isYuan('1.00')).toBe(true);
  });
  it('isMobileNumber Case1', () => {
    expect(isMobileNumber()).toBe(false);
    expect(isMobileNumber(null)).toBe(false);
    expect(isMobileNumber('')).toBe(false);
    expect(isMobileNumber('1')).toBe(false);
    expect(isMobileNumber('13')).toBe(false);
    expect(isMobileNumber('133')).toBe(false);
    expect(isMobileNumber('1331')).toBe(false);
    expect(isMobileNumber('13312')).toBe(false);
    expect(isMobileNumber('133123')).toBe(false);
    expect(isMobileNumber('1331234')).toBe(false);
    expect(isMobileNumber('13312345')).toBe(false);
    expect(isMobileNumber('133123456')).toBe(false);
    expect(isMobileNumber('1331234567')).toBe(false);
    expect(isMobileNumber('13312345678')).toBe(true);
    expect(isMobileNumber('133123456789')).toBe(false);
  });
});
