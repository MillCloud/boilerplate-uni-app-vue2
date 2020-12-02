/**
 * @param {string|number} amountYuan
 */
export const formatYuan2Fen = (amountYuan) =>
  Number.parseInt((Number.parseFloat(amountYuan) * 100).toFixed(0), 10);

/**
 * @param {string|number} amountFen
 */
export const formatFen2Yuan = (amountFen) =>
  Number.parseFloat((Number.parseFloat(amountFen) / 100).toFixed(2));
