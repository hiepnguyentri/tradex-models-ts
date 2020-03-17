/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Account loan history response schema
 */
export interface AccountLoanHistoryResponse {
  /**
   * Status
   */
  status?: null | string;
  /**
   * Next key
   */
  nextKey?: null | string;
  /**
   * Loan date
   */
  loanDate?: null | string;
  /**
   * Loan type
   */
  loanType?: null | string;
  /**
   * Stock code
   */
  stockCode?: null | string;
  /**
   * Loan amount
   */
  loanAmount?: null | number;
  /**
   * Expired date
   */
  expiredDate?: null | string;
  /**
   * total remaining unread notification
   */
  totalUnread?: null | number;
  /**
   * Loan interest
   */
  loanInterest?: null | number;
  /**
   * Loan quantity
   */
  loanQuantity?: null | number;
  /**
   * Loan repay amount
   */
  loanRepayAmount?: null | number;
  /**
   * Loan remain amount
   */
  loanRemainAmount?: null | number;
  [k: string]: any;
}
