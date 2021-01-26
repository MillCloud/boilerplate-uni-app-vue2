import { formatYuan2Fen, formatFen2Yuan } from '@u/formatter';

describe('formatter', () => {
  it('formatYuan2Fen', () => {
    expect(formatYuan2Fen(1)).toBe(100);
    expect(formatYuan2Fen(0.1)).toBe(10);
    expect(formatYuan2Fen(0.01)).toBe(1);
    expect(formatYuan2Fen('1')).toBe(100);
    expect(formatYuan2Fen('0.1')).toBe(10);
    expect(formatYuan2Fen('0.01')).toBe(1);
  });
  it('formatFen2Yuan', () => {
    expect(formatFen2Yuan(1)).toBe(0.01);
    expect(formatFen2Yuan(10)).toBe(0.1);
    expect(formatFen2Yuan(100)).toBe(1);
    expect(formatFen2Yuan('1')).toBe(0.01);
    expect(formatFen2Yuan('10')).toBe(0.1);
    expect(formatFen2Yuan('100')).toBe(1);
  });
});
