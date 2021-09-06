import * as apis from '../api/apis';

async function run() {

    var cluster = new apis.ClusterApi();
    var result;

    result = await cluster.clustersGet();
    console.log(result.body);
    const clusterId = result.body.data[0].clusterId;

    var broker = new apis.BrokerApi();
    result = await broker.clustersClusterIdBrokersGet(clusterId);
    console.log(result.body);

    var topics = new apis.TopicV3Api();
    result = await topics.listKafkaV3Topics(clusterId);
    console.log(result.body);
}

run();