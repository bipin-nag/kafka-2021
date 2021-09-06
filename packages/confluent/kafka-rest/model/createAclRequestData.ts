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
import { AclResourceType } from './aclResourceType';

export class CreateAclRequestData {
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
        return CreateAclRequestData.attributeTypeMap;
    }
}

