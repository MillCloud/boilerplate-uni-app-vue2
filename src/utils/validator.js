import { formatYuan2Fen } from './formatter';

/**
 * @param {string} amount
 */
export const isYuan = (amount) => {
  const reg = /^\d+(\.\d{0,2})?$/;
  const regResult = reg.test(amount);
  const amountFen = formatYuan2Fen(amount);
  return !!amount && regResult && amountFen !== 0;
};

/**
 * @param {string} mobileNumber
 */
export function isMobileNumber(mobileNumber) {
  const regExp =
    /^(?:(?:\+|00)86)?1(?:(?:3\d)|(?:4[5-79|])|(?:5[0-35-9|])|(?:6[5-7])|(?:7[0-8])|(?:8\d)|(?:9[189|]))\d{8}$/;
  return regExp.test(mobileNumber);
}
