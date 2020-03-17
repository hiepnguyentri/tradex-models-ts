/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Account info request schema
 */
export type AccountInfoRequest = BaseRequest & {
  /**
   * Account number
   */
  accountNumber?: null | string;
  /**
   * Sub number
   */
  subNumber?: null | string;
  [k: string]: any;
};
