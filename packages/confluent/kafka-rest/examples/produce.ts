import * as apis from '../api/apis';


async function run() {

    var cluster = new apis.ClusterApi();
    var result;

    result = await cluster.clustersGet();
    const clusterId = result.body.data[0].clusterId;

    var topicApi = new apis.TopicV3Api();
    var recordsApi = new apis.RecordsApi();

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

    var record = {
        "partitionId": 1,
        "headers": [
            {
                "name": "Header-1",
                "value": "SGVhZGVyLTE="
            },
            {
                "name": "Header-2",
                "value": "SGVhZGVyLTI="
            }
        ],
        "key": {
            "type": "BINARY",
            "data": "Zm9vYmFy"
        },
        "value": {
            "type": "AVRO",
            "subject": "topic-1-key",
            "schema": "{\\\"type\\\":\\\"string\\\"}",
            "data": "foobar"
        },
        "timestamp": new Date("2021-02-05T19:14:42Z")
    };

    var record2 = {
        "key": {
            "subject_name_strategy": "TOPIC_NAME",
            "schema_id": 1,
            "data": 1000
        },
        "value": {
            "schema_version": 1,
            "data": {
                "foo": "bar"
            }
        }
    }

    try {

        // result = await topicApi.createKafkaV3Topic(clusterId, requestData);
        // console.log(result.body);

        result = await recordsApi.clustersClusterIdTopicsTopicNameRecordsPost(clusterId, requestData.topicName, record);
        console.log(result.body);

        result = await recordsApi.clustersClusterIdTopicsTopicNameRecordsPost(clusterId, requestData.topicName, record2);
        console.log(result.body);

    } catch (error: any) {
        console.error(error?.response.body);
    }
}

run()