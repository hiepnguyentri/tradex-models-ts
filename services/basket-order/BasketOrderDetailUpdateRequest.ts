/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * basketOrderDetailUpdateRequest schema
 */
export type BasketOrderDetailUpdateRequest = BaseRequest & {
  /**
   * basket order id
   */
  basketOrderId: number;
  /**
   * List of stock code, with creation unit and weight
   */
  symbolList: [
    {
      /**
       * symbol code
       */
      symbolCode: string;
      /**
       * creation unit
       */
      volume: number;
      [k: string]: any;
    },
    ...{
      /**
       * symbol code
       */
      symbolCode: string;
      /**
       * creation unit
       */
      volume: number;
      [k: string]: any;
    }[]
  ];
  [k: string]: any;
};
