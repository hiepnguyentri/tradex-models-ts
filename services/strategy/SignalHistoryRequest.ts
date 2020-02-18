/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * signalHistoryRequest schema
 */
export type SignalHistoryRequest = BaseRequest & {
  /**
   * strategyId: Unique id of the strategy which the signal belong
   */
  strategyId: number;
  /**
   * The time that user want to show signal history before it
   */
  lastTime?: string | null;
  /**
   * The number of record that user want to see at each page
   */
  fetchCount?: number | null;
  [k: string]: any;
};
