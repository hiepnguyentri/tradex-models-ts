/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * Account change hts password request schema
 */
export type AccountChangeHtsPasswordRequest = BaseRequest & {
  /**
   * Username
   */
  username?: null | string;
  /**
   * New password
   */
  newPassword?: null | string;
  /**
   * Old password
   */
  oldPassword?: null | string;
  [k: string]: any;
};
