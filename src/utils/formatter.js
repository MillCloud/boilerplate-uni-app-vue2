import { isNumber } from 'lodash-es';

/**
 * @param {string|number} amountYuan
 */
export const formatYuan2Fen = (amountYuan) => {
  if (isNumber(amountYuan)) {
    return Number.parseInt((amountYuan * 100).toFixed(0), 10);
  }
  return Number.parseInt((Number.parseFloat(amountYuan) * 100).toFixed(0), 10);
};

/**
 * @param {string|number} amountFen
 */
export const formatFen2Yuan = (amountFen) => {
  if (isNumber(amountFen)) {
    return Number.parseFloat((amountFen / 100).toFixed(2));
  }
  return Number.parseFloat((Number.parseFloat(amountFen) / 100).toFixed(2));
};
