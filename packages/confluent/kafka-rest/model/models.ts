import localVarRequest from 'request';

export * from './abstractConfigData';
export * from './abstractConfigDataAllOf';
export * from './aclData';
export * from './aclDataAllOf';
export * from './aclDataList';
export * from './aclResourceType';
export * from './alterConfigBatchRequestData';
export * from './alterConfigBatchRequestDataData';
export * from './brokerConfigData';
export * from './brokerConfigDataAllOf';
export * from './brokerConfigDataList';
export * from './brokerConfigDataListAllOf';
export * from './brokerData';
export * from './brokerDataAllOf';
export * from './brokerDataList';
export * from './brokerDataListAllOf';
export * from './clusterConfigData';
export * from './clusterConfigDataAllOf';
export * from './clusterConfigDataList';
export * from './clusterConfigDataListAllOf';
export * from './clusterData';
export * from './clusterDataAllOf';
export * from './clusterDataList';
export * from './clusterDataListAllOf';
export * from './configSynonymData';
export * from './consumerAssignmentData';
export * from './consumerAssignmentDataAllOf';
export * from './consumerAssignmentDataList';
export * from './consumerAssignmentDataListAllOf';
export * from './consumerData';
export * from './consumerDataAllOf';
export * from './consumerDataList';
export * from './consumerDataListAllOf';
export * from './consumerGroupData';
export * from './consumerGroupDataAllOf';
export * from './consumerGroupDataList';
export * from './consumerGroupDataListAllOf';
export * from './consumerGroupLagSummaryData';
export * from './consumerGroupLagSummaryDataAllOf';
export * from './consumerLagData';
export * from './consumerLagDataAllOf';
export * from './consumerLagDataList';
export * from './consumerLagDataListAllOf';
export * from './createAclRequestData';
export * from './createTopicRequestData';
export * from './createTopicRequestDataConfigs';
export * from './createTopicRequestDataReplicasAssignments';
export * from './inlineResponse200';
export * from './partitionData';
export * from './partitionDataAllOf';
export * from './partitionDataList';
export * from './partitionDataListAllOf';
export * from './produceRequest';
export * from './produceRequestData';
export * from './produceRequestHeader';
export * from './produceResponse';
export * from './produceResponseData';
export * from './reassignmentData';
export * from './reassignmentDataAllOf';
export * from './reassignmentDataList';
export * from './reassignmentDataListAllOf';
export * from './relationship';
export * from './replicaData';
export * from './replicaDataAllOf';
export * from './replicaDataList';
export * from './replicaDataListAllOf';
export * from './resource';
export * from './resourceCollection';
export * from './resourceCollectionMetadata';
export * from './resourceMetadata';
export * from './topicConfigData';
export * from './topicConfigDataAllOf';
export * from './topicConfigDataList';
export * from './topicConfigDataListAllOf';
export * from './topicData';
export * from './topicDataAllOf';
export * from './topicDataList';
export * from './topicDataListAllOf';
export * from './updateConfigRequestData';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AbstractConfigData } from './abstractConfigData';
import { AbstractConfigDataAllOf } from './abstractConfigDataAllOf';
import { AclData } from './aclData';
import { AclDataAllOf } from './aclDataAllOf';
import { AclDataList } from './aclDataList';
import { AclResourceType } from './aclResourceType';
import { AlterConfigBatchRequestData } from './alterConfigBatchRequestData';
import { AlterConfigBatchRequestDataData } from './alterConfigBatchRequestDataData';
import { BrokerConfigData } from './brokerConfigData';
import { BrokerConfigDataAllOf } from './brokerConfigDataAllOf';
import { BrokerConfigDataList } from './brokerConfigDataList';
import { BrokerConfigDataListAllOf } from './brokerConfigDataListAllOf';
import { BrokerData } from './brokerData';
import { BrokerDataAllOf } from './brokerDataAllOf';
import { BrokerDataList } from './brokerDataList';
import { BrokerDataListAllOf } from './brokerDataListAllOf';
import { ClusterConfigData } from './clusterConfigData';
import { ClusterConfigDataAllOf } from './clusterConfigDataAllOf';
import { ClusterConfigDataList } from './clusterConfigDataList';
import { ClusterConfigDataListAllOf } from './clusterConfigDataListAllOf';
import { ClusterData } from './clusterData';
import { ClusterDataAllOf } from './clusterDataAllOf';
import { ClusterDataList } from './clusterDataList';
import { ClusterDataListAllOf } from './clusterDataListAllOf';
import { ConfigSynonymData } from './configSynonymData';
import { ConsumerAssignmentData } from './consumerAssignmentData';
import { ConsumerAssignmentDataAllOf } from './consumerAssignmentDataAllOf';
import { ConsumerAssignmentDataList } from './consumerAssignmentDataList';
import { ConsumerAssignmentDataListAllOf } from './consumerAssignmentDataListAllOf';
import { ConsumerData } from './consumerData';
import { ConsumerDataAllOf } from './consumerDataAllOf';
import { ConsumerDataList } from './consumerDataList';
import { ConsumerDataListAllOf } from './consumerDataListAllOf';
import { ConsumerGroupData } from './consumerGroupData';
import { ConsumerGroupDataAllOf } from './consumerGroupDataAllOf';
import { ConsumerGroupDataList } from './consumerGroupDataList';
import { ConsumerGroupDataListAllOf } from './consumerGroupDataListAllOf';
import { ConsumerGroupLagSummaryData } from './consumerGroupLagSummaryData';
import { ConsumerGroupLagSummaryDataAllOf } from './consumerGroupLagSummaryDataAllOf';
import { ConsumerLagData } from './consumerLagData';
import { ConsumerLagDataAllOf } from './consumerLagDataAllOf';
import { ConsumerLagDataList } from './consumerLagDataList';
import { ConsumerLagDataListAllOf } from './consumerLagDataListAllOf';
import { CreateAclRequestData } from './createAclRequestData';
import { CreateTopicRequestData } from './createTopicRequestData';
import { CreateTopicRequestDataConfigs } from './createTopicRequestDataConfigs';
import { CreateTopicRequestDataReplicasAssignments } from './createTopicRequestDataReplicasAssignments';
import { InlineResponse200 } from './inlineResponse200';
import { PartitionData } from './partitionData';
import { PartitionDataAllOf } from './partitionDataAllOf';
import { PartitionDataList } from './partitionDataList';
import { PartitionDataListAllOf } from './partitionDataListAllOf';
import { ProduceRequest } from './produceRequest';
import { ProduceRequestData } from './produceRequestData';
import { ProduceRequestHeader } from './produceRequestHeader';
import { ProduceResponse } from './produceResponse';
import { ProduceResponseData } from './produceResponseData';
import { ReassignmentData } from './reassignmentData';
import { ReassignmentDataAllOf } from './reassignmentDataAllOf';
import { ReassignmentDataList } from './reassignmentDataList';
import { ReassignmentDataListAllOf } from './reassignmentDataListAllOf';
import { Relationship } from './relationship';
import { ReplicaData } from './replicaData';
import { ReplicaDataAllOf } from './replicaDataAllOf';
import { ReplicaDataList } from './replicaDataList';
import { ReplicaDataListAllOf } from './replicaDataListAllOf';
import { Resource } from './resource';
import { ResourceCollection } from './resourceCollection';
import { ResourceCollectionMetadata } from './resourceCollectionMetadata';
import { ResourceMetadata } from './resourceMetadata';
import { TopicConfigData } from './topicConfigData';
import { TopicConfigDataAllOf } from './topicConfigDataAllOf';
import { TopicConfigDataList } from './topicConfigDataList';
import { TopicConfigDataListAllOf } from './topicConfigDataListAllOf';
import { TopicData } from './topicData';
import { TopicDataAllOf } from './topicDataAllOf';
import { TopicDataList } from './topicDataList';
import { TopicDataListAllOf } from './topicDataListAllOf';
import { UpdateConfigRequestData } from './updateConfigRequestData';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AclResourceType": AclResourceType,
}

let typeMap: {[index: string]: any} = {
    "AbstractConfigData": AbstractConfigData,
    "AbstractConfigDataAllOf": AbstractConfigDataAllOf,
    "AclData": AclData,
    "AclDataAllOf": AclDataAllOf,
    "AclDataList": AclDataList,
    "AlterConfigBatchRequestData": AlterConfigBatchRequestData,
    "AlterConfigBatchRequestDataData": AlterConfigBatchRequestDataData,
    "BrokerConfigData": BrokerConfigData,
    "BrokerConfigDataAllOf": BrokerConfigDataAllOf,
    "BrokerConfigDataList": BrokerConfigDataList,
    "BrokerConfigDataListAllOf": BrokerConfigDataListAllOf,
    "BrokerData": BrokerData,
    "BrokerDataAllOf": BrokerDataAllOf,
    "BrokerDataList": BrokerDataList,
    "BrokerDataListAllOf": BrokerDataListAllOf,
    "ClusterConfigData": ClusterConfigData,
    "ClusterConfigDataAllOf": ClusterConfigDataAllOf,
    "ClusterConfigDataList": ClusterConfigDataList,
    "ClusterConfigDataListAllOf": ClusterConfigDataListAllOf,
    "ClusterData": ClusterData,
    "ClusterDataAllOf": ClusterDataAllOf,
    "ClusterDataList": ClusterDataList,
    "ClusterDataListAllOf": ClusterDataListAllOf,
    "ConfigSynonymData": ConfigSynonymData,
    "ConsumerAssignmentData": ConsumerAssignmentData,
    "ConsumerAssignmentDataAllOf": ConsumerAssignmentDataAllOf,
    "ConsumerAssignmentDataList": ConsumerAssignmentDataList,
    "ConsumerAssignmentDataListAllOf": ConsumerAssignmentDataListAllOf,
    "ConsumerData": ConsumerData,
    "ConsumerDataAllOf": ConsumerDataAllOf,
    "ConsumerDataList": ConsumerDataList,
    "ConsumerDataListAllOf": ConsumerDataListAllOf,
    "ConsumerGroupData": ConsumerGroupData,
    "ConsumerGroupDataAllOf": ConsumerGroupDataAllOf,
    "ConsumerGroupDataList": ConsumerGroupDataList,
    "ConsumerGroupDataListAllOf": ConsumerGroupDataListAllOf,
    "ConsumerGroupLagSummaryData": ConsumerGroupLagSummaryData,
    "ConsumerGroupLagSummaryDataAllOf": ConsumerGroupLagSummaryDataAllOf,
    "ConsumerLagData": ConsumerLagData,
    "ConsumerLagDataAllOf": ConsumerLagDataAllOf,
    "ConsumerLagDataList": ConsumerLagDataList,
    "ConsumerLagDataListAllOf": ConsumerLagDataListAllOf,
    "CreateAclRequestData": CreateAclRequestData,
    "CreateTopicRequestData": CreateTopicRequestData,
    "CreateTopicRequestDataConfigs": CreateTopicRequestDataConfigs,
    "CreateTopicRequestDataReplicasAssignments": CreateTopicRequestDataReplicasAssignments,
    "InlineResponse200": InlineResponse200,
    "PartitionData": PartitionData,
    "PartitionDataAllOf": PartitionDataAllOf,
    "PartitionDataList": PartitionDataList,
    "PartitionDataListAllOf": PartitionDataListAllOf,
    "ProduceRequest": ProduceRequest,
    "ProduceRequestData": ProduceRequestData,
    "ProduceRequestHeader": ProduceRequestHeader,
    "ProduceResponse": ProduceResponse,
    "ProduceResponseData": ProduceResponseData,
    "ReassignmentData": ReassignmentData,
    "ReassignmentDataAllOf": ReassignmentDataAllOf,
    "ReassignmentDataList": ReassignmentDataList,
    "ReassignmentDataListAllOf": ReassignmentDataListAllOf,
    "Relationship": Relationship,
    "ReplicaData": ReplicaData,
    "ReplicaDataAllOf": ReplicaDataAllOf,
    "ReplicaDataList": ReplicaDataList,
    "ReplicaDataListAllOf": ReplicaDataListAllOf,
    "Resource": Resource,
    "ResourceCollection": ResourceCollection,
    "ResourceCollectionMetadata": ResourceCollectionMetadata,
    "ResourceMetadata": ResourceMetadata,
    "TopicConfigData": TopicConfigData,
    "TopicConfigDataAllOf": TopicConfigDataAllOf,
    "TopicConfigDataList": TopicConfigDataList,
    "TopicConfigDataListAllOf": TopicConfigDataListAllOf,
    "TopicData": TopicData,
    "TopicDataAllOf": TopicDataAllOf,
    "TopicDataList": TopicDataList,
    "TopicDataListAllOf": TopicDataListAllOf,
    "UpdateConfigRequestData": UpdateConfigRequestData,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
