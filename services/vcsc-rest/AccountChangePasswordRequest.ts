/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Account change order password request schema
 */
export type AccountChangePasswordRequest = BaseRequest & {
  /**
   * Sub number
   */
  subNumber?: null | string;
  /**
   * New password
   */
  newPassword: string;
  /**
   * Old password
   */
  oldPassword?: null | string;
  /**
   * Account number
   */
  accountNumber: string;
  [k: string]: any;
};
