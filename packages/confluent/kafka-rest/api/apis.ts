export * from './aCLV3Api';
import { ACLV3Api } from './aCLV3Api';
export * from './brokerApi';
import { BrokerApi } from './brokerApi';
export * from './clusterApi';
import { ClusterApi } from './clusterApi';
export * from './clusterV3Api';
import { ClusterV3Api } from './clusterV3Api';
export * from './configsApi';
import { ConfigsApi } from './configsApi';
export * from './configsV3Api';
import { ConfigsV3Api } from './configsV3Api';
export * from './consumerGroupV3Api';
import { ConsumerGroupV3Api } from './consumerGroupV3Api';
export * from './partitionApi';
import { PartitionApi } from './partitionApi';
export * from './partitionV3Api';
import { PartitionV3Api } from './partitionV3Api';
export * from './recordsApi';
import { RecordsApi } from './recordsApi';
export * from './replicaApi';
import { ReplicaApi } from './replicaApi';
export * from './topicV3Api';
import { TopicV3Api } from './topicV3Api';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [ACLV3Api, BrokerApi, ClusterApi, ClusterV3Api, ConfigsApi, ConfigsV3Api, ConsumerGroupV3Api, PartitionApi, PartitionV3Api, RecordsApi, ReplicaApi, TopicV3Api];
