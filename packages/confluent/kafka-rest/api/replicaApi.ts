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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { ReplicaData } from '../model/replicaData';
import { ReplicaDataList } from '../model/replicaDataList';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'http://localhost:8082/v3';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ReplicaApiApiKeys {
}

export class ReplicaApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: ReplicaApiApiKeys, value: string) {
        (this.authentications as any)[ReplicaApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * [![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)  Returns the list of replicas assigned to the specified broker.
     * @summary Search Replicas by Broker
     * @param clusterId The Kafka cluster ID.
     * @param brokerId The broker ID.
     */
    public async clustersClusterIdBrokersBrokerIdPartitionReplicasGet (clusterId: string, brokerId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ReplicaDataList;  }> {
        const localVarPath = this.basePath + '/clusters/{cluster_id}/brokers/{broker_id}/partition-replicas'
            .replace('{' + 'cluster_id' + '}', encodeURIComponent(String(clusterId)))
            .replace('{' + 'broker_id' + '}', encodeURIComponent(String(brokerId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'clusterId' is not null or undefined
        if (clusterId === null || clusterId === undefined) {
            throw new Error('Required parameter clusterId was null or undefined when calling clustersClusterIdBrokersBrokerIdPartitionReplicasGet.');
        }

        // verify required parameter 'brokerId' is not null or undefined
        if (brokerId === null || brokerId === undefined) {
            throw new Error('Required parameter brokerId was null or undefined when calling clustersClusterIdBrokersBrokerIdPartitionReplicasGet.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ReplicaDataList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ReplicaDataList");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * [![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)  Returns the replica for the specified partition assigned to the specified broker.
     * @summary Get Replica
     * @param clusterId The Kafka cluster ID.
     * @param topicName The topic name.
     * @param partitionId The partition ID.
     * @param brokerId The broker ID.
     */
    public async clustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdGet (clusterId: string, topicName: string, partitionId: number, brokerId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ReplicaData;  }> {
        const localVarPath = this.basePath + '/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/replicas/{broker_id}'
            .replace('{' + 'cluster_id' + '}', encodeURIComponent(String(clusterId)))
            .replace('{' + 'topic_name' + '}', encodeURIComponent(String(topicName)))
            .replace('{' + 'partition_id' + '}', encodeURIComponent(String(partitionId)))
            .replace('{' + 'broker_id' + '}', encodeURIComponent(String(brokerId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'clusterId' is not null or undefined
        if (clusterId === null || clusterId === undefined) {
            throw new Error('Required parameter clusterId was null or undefined when calling clustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdGet.');
        }

        // verify required parameter 'topicName' is not null or undefined
        if (topicName === null || topicName === undefined) {
            throw new Error('Required parameter topicName was null or undefined when calling clustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdGet.');
        }

        // verify required parameter 'partitionId' is not null or undefined
        if (partitionId === null || partitionId === undefined) {
            throw new Error('Required parameter partitionId was null or undefined when calling clustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdGet.');
        }

        // verify required parameter 'brokerId' is not null or undefined
        if (brokerId === null || brokerId === undefined) {
            throw new Error('Required parameter brokerId was null or undefined when calling clustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerIdGet.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ReplicaData;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ReplicaData");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * [![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)  Returns the list of replicas for the specified partition.
     * @summary List Replicas
     * @param clusterId The Kafka cluster ID.
     * @param topicName The topic name.
     * @param partitionId The partition ID.
     */
    public async clustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasGet (clusterId: string, topicName: string, partitionId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ReplicaDataList;  }> {
        const localVarPath = this.basePath + '/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/replicas'
            .replace('{' + 'cluster_id' + '}', encodeURIComponent(String(clusterId)))
            .replace('{' + 'topic_name' + '}', encodeURIComponent(String(topicName)))
            .replace('{' + 'partition_id' + '}', encodeURIComponent(String(partitionId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'clusterId' is not null or undefined
        if (clusterId === null || clusterId === undefined) {
            throw new Error('Required parameter clusterId was null or undefined when calling clustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasGet.');
        }

        // verify required parameter 'topicName' is not null or undefined
        if (topicName === null || topicName === undefined) {
            throw new Error('Required parameter topicName was null or undefined when calling clustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasGet.');
        }

        // verify required parameter 'partitionId' is not null or undefined
        if (partitionId === null || partitionId === undefined) {
            throw new Error('Required parameter partitionId was null or undefined when calling clustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasGet.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ReplicaDataList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ReplicaDataList");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
