import * as apis from '../api/apis';

async function run() {

    var clusterApi = new apis.ClusterApi();
    var result;

    result = await clusterApi.clustersGet();
    console.log(result.body);
    const clusterId = result.body.data[0].clusterId;

    var brokerApi = new apis.BrokerApi();
    result = await brokerApi.clustersClusterIdBrokersGet(clusterId);
    console.log(result.body);

    var topicApi = new apis.TopicV3Api();
    result = await topicApi.listKafkaV3Topics(clusterId);
    console.log(result.body);
}

run();