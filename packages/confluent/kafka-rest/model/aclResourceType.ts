/**
 * REST Admin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: kafka-clients-proxy-team@confluent.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export enum AclResourceType {
    Unknown = <any> 'UNKNOWN',
    Any = <any> 'ANY',
    Topic = <any> 'TOPIC',
    Group = <any> 'GROUP',
    Cluster = <any> 'CLUSTER',
    TransactionalId = <any> 'TRANSACTIONAL_ID',
    DelegationToken = <any> 'DELEGATION_TOKEN'
}