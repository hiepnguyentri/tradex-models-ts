/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Dr order available response schema
 */
export interface DrOrderAvailableResponse {
  /**
   * total remaining unread notification
   */
  totalUnread?: null | number;
  /**
   * Open position
   */
  openPosition?: null | number;
  /**
   * Available quantity
   */
  availableQuantity?: null | number;
  [k: string]: any;
}