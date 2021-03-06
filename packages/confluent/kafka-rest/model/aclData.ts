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
import { AclDataAllOf } from './aclDataAllOf';
import { AclResourceType } from './aclResourceType';
import { Resource } from './resource';
import { ResourceMetadata } from './resourceMetadata';

export class AclData {
    'kind': string;
    'metadata': ResourceMetadata;
    'clusterId': string;
    'resourceType': AclResourceType;
    'resourceName': string;
    'patternType': string;
    'principal': string;
    'host': string;
    'operation': string;
    'permission': string;

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
            "name": "resourceType",
            "baseName": "resource_type",
            "type": "AclResourceType"
        },
        {
            "name": "resourceName",
            "baseName": "resource_name",
            "type": "string"
        },
        {
            "name": "patternType",
            "baseName": "pattern_type",
            "type": "string"
        },
        {
            "name": "principal",
            "baseName": "principal",
            "type": "string"
        },
        {
            "name": "host",
            "baseName": "host",
            "type": "string"
        },
        {
            "name": "operation",
            "baseName": "operation",
            "type": "string"
        },
        {
            "name": "permission",
            "baseName": "permission",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AclData.attributeTypeMap;
    }
}

