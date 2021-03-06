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
import { BrokerDataAllOf } from './brokerDataAllOf';
import { Relationship } from './relationship';
import { Resource } from './resource';
import { ResourceMetadata } from './resourceMetadata';

export class BrokerData {
    'kind': string;
    'metadata': ResourceMetadata;
    'clusterId': string;
    'brokerId': number;
    'host'?: string | null;
    'port'?: number | null;
    'rack'?: string | null;
    'configs': Relationship;
    'partitionReplicas': Relationship;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "ResourceMetadata"
        },
        {
            "name": "clusterId",
            "baseName": "cluster_id",
            "type": "string"
        },
        {
            "name": "brokerId",
            "baseName": "broker_id",
            "type": "number"
        },
        {
            "name": "host",
            "baseName": "host",
            "type": "string"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number"
        },
        {
            "name": "rack",
            "baseName": "rack",
            "type": "string"
        },
        {
            "name": "configs",
            "baseName": "configs",
            "type": "Relationship"
        },
        {
            "name": "partitionReplicas",
            "baseName": "partition_replicas",
            "type": "Relationship"
        }    ];

    static getAttributeTypeMap() {
        return BrokerData.attributeTypeMap;
    }
}

