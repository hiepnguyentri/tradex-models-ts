/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {BaseRequest} from "../common";

/**
 * openApiDeleteRequest schema
 */
export type OpenApiDeleteRequest = BaseRequest & {
  /**
   * list of open api id to delete
   */
  scopeIdList: number[];
  [k: string]: any;
};
