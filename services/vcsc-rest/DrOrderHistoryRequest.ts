/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Dr order history request schema
 */
export type DrOrderHistoryRequest = BaseRequest & {
  /**
   * Account number
   */
  accountNumber?: string;
  /**
   * Password
   */
  password?: string;
  /**
   * Date
   */
  date?: string;
  /**
   * Last next key
   */
  lastNextKey?: string;
  /**
   * Fetch count
   */
  fetchCount?: number;
  /**
   * Branch code
   */
  branchCode?: string;
  /**
   * Agency code
   */
  agencyCode?: string;
  /**
   * Emp group id
   */
  empGroupId?: string;
  [k: string]: any;
};
