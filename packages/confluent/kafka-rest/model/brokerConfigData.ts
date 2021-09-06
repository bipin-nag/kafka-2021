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
import { AbstractConfigData } from './abstractConfigData';
import { BrokerConfigDataAllOf } from './brokerConfigDataAllOf';
import { ConfigSynonymData } from './configSynonymData';
import { ResourceMetadata } from './resourceMetadata';

export class BrokerConfigData {
    'kind': string;
    'metadata': ResourceMetadata;
    'clusterId': string;
    'name': string;
    'value'?: string | null;
    'isDefault': boolean;
    'isReadOnly': boolean;
    'isSensitive': boolean;
    'source': string;
    'synonyms': Array<ConfigSynonymData>;
    'brokerId': number;

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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "isDefault",
            "baseName": "is_default",
            "type": "boolean"
        },
        {
            "name": "isReadOnly",
            "baseName": "is_read_only",
            "type": "boolean"
        },
        {
            "name": "isSensitive",
            "baseName": "is_sensitive",
            "type": "boolean"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "synonyms",
            "baseName": "synonyms",
            "type": "Array<ConfigSynonymData>"
        },
        {
            "name": "brokerId",
            "baseName": "broker_id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return BrokerConfigData.attributeTypeMap;
    }
}

