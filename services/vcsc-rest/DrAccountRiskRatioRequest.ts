/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Account risk ratio request schema
 */
export type DrAccountRiskRatioRequest = BaseRequest & {
  /**
   * Account number
   */
  accountNumber: string;
  [k: string]: any;
};