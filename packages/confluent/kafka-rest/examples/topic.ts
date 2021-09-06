import * as apis from '../api/apis';


async function run() {

    var cluster = new apis.ClusterApi();
    var result;

    result = await cluster.clustersGet();
    const clusterId = result.body.data[0].clusterId;

    var topics = new apis.TopicV3Api();

    var requestData = {
        "topicName": "topic-X",
        "partitionsCount": 64,
        "replicationFactor": 1,
        "configs": [
            {
                "name": "cleanup.policy",
                "value": "compact"
            },
            {
                "name": "compression.type",
                "value": "gzip"
            }
        ]
    };
    try {

        result = await topics.createKafkaV3Topic(clusterId, requestData);
        console.log(result.body);

        result = await topics.getKafkaV3Topic(clusterId, requestData.topicName);
        console.log(result.body);

        result = await topics.deleteKafkaV3Topic(clusterId, requestData.topicName);
        console.log(result.body);

        result = await topics.getKafkaV3Topic(clusterId, requestData.topicName);

    } catch (error: any) {
        console.error(error?.response.body);
    }
}

run()