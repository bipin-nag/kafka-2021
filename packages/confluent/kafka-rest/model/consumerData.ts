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
import { ConsumerDataAllOf } from './consumerDataAllOf';
import { Relationship } from './relationship';
import { Resource } from './resource';
import { ResourceMetadata } from './resourceMetadata';

export class ConsumerData {
    'kind': string;
    'metadata': ResourceMetadata;
    'clusterId': string;
    'consumerGroupId': string;
    'consumerId': string;
    'instanceId'?: string | null;
    'clientId': string;
    'assignments': Relationship;

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
            "name": "consumerGroupId",
            "baseName": "consumer_group_id",
            "type": "string"
        },
        {
            "name": "consumerId",
            "baseName": "consumer_id",
            "type": "string"
        },
        {
            "name": "instanceId",
            "baseName": "instance_id",
            "type": "string"
        },
        {
            "name": "clientId",
            "baseName": "client_id",
            "type": "string"
        },
        {
            "name": "assignments",
            "baseName": "assignments",
            "type": "Relationship"
        }    ];

    static getAttributeTypeMap() {
        return ConsumerData.attributeTypeMap;
    }
}

