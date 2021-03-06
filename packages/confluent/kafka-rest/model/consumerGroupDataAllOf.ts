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
import { Relationship } from './relationship';

export class ConsumerGroupDataAllOf {
    'clusterId': string;
    'consumerGroupId': string;
    'isSimple': boolean;
    'partitionAssignor': string;
    'state': string;
    'coordinator': Relationship;
    'consumer'?: Relationship;
    'lagSummary': Relationship;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clusterId",
            "baseName": "cluster_id",
            "type": "string"
        },
        {
            "name": "consumerGroupId",
            "baseName": "consumer_group_id",
            "type": "string"
        },
        {
            "name": "isSimple",
            "baseName": "is_simple",
            "type": "boolean"
        },
        {
            "name": "partitionAssignor",
            "baseName": "partition_assignor",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "coordinator",
            "baseName": "coordinator",
            "type": "Relationship"
        },
        {
            "name": "consumer",
            "baseName": "consumer",
            "type": "Relationship"
        },
        {
            "name": "lagSummary",
            "baseName": "lag_summary",
            "type": "Relationship"
        }    ];

    static getAttributeTypeMap() {
        return ConsumerGroupDataAllOf.attributeTypeMap;
    }
}

