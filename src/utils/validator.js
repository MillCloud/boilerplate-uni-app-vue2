/* eslint-disable import/prefer-default-export */
import { formatYuan2Fen } from './formatter';

/**
 * @param {string} amountYuan
 */
export const validateAmountYuan = (amountYuan) => {
  const reg = /^\d+(\.\d{0,2})?$/;
  const regResult = reg.test(amountYuan);
  const amountFen = formatYuan2Fen(amountYuan);
  return !!amountYuan && regResult && amountFen !== 0;
};
