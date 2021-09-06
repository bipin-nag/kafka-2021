https://docs.confluent.io/platform/current/kafka-rest/api.html

<div class="section" id="crest-api-v3"><span id="rest-proxy-v3"></span>

## REST Proxy API v3[¶](#crest-api-v3 "Permalink to this headline")

These APIs are available both on Confluent Server (as a part of Confluent Enterprise) and REST Proxy. When using the API in Confluent Server, all paths should be prefixed with `<span class="pre">/kafka</span>`. For example, the path to list clusters is:

*   Confluent Server: `<span class="pre">/kafka/v3/clusters</span>`
*   REST Proxy: `<span class="pre">/v3/clusters</span>`

Confluent Server provides an embedded instance of these APIs on the Kafka brokers for the v3 Admin API. The embedded APIs run on the Confluent HTTP service, `<span class="pre">confluent.http.server.listeners</span>`. Therefore, if you have the HTTP server running, the REST Proxy v3 API is automatically available to you through the brokers. Note that the [<span class="std std-ref">Metadata Server (MDS)</span>](../security/rbac/mds-api.html#mds-api) is also running on the Confluent HTTP service, as another endpoint available to you with additional configurations.

<div class="admonition tip">

Tip

See also, the following sections:

*   [<span class="std std-ref">REST API Usage Examples (curl)</span>](#rest-api-usage-examples) for how to test these API endpoints from the command line. from the command line
*   [<span class="std std-ref">Admin REST APIs Configuration Options</span>](production-deployment/confluent-server/config.html#confluent-server-rest-config)
*   [<span class="std std-ref">Admin operations in Kafka REST API Features</span>](index.html#kafka-rest-admin-features)
*   [Confluent Admin REST APIs demo](https://github.com/confluentinc/demo-scene/blob/master/adminrest)

</div>

<div class="section" id="cluster">

### Cluster[¶](#cluster "Permalink to this headline")

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters">`<span class="pre">GET</span>` `<span class="pre">/clusters</span>`[¶](#get--clusters "Permalink to this definition")</dt>

<dd>

**List Clusters**

Returns a list of known Kafka clusters. Currently both Kafka and Kafka REST Proxy are only aware of the Kafka cluster pointed at by the `<span class="pre">bootstrap.servers</span>` configuration. Therefore only one Kafka cluster will be returned in the response.

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of Kafka clusters.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaClusterList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaCluster"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"controller"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1"</span>
                <span class="p">},</span>
                <span class="nt">"acls"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/acls"</span>
                <span class="p">},</span>
                <span class="nt">"brokers"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers"</span>
                <span class="p">},</span>
                <span class="nt">"broker_configs"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/broker-configs"</span>
                <span class="p">},</span>
                <span class="nt">"consumer_groups"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups"</span>
                <span class="p">},</span>
                <span class="nt">"topics"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics"</span>
                <span class="p">},</span>
                <span class="nt">"partition_reassignments"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/-/partitions/-/reassignment"</span>
                <span class="p">}</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}</span>`[¶](#get--clusters-cluster_id "Permalink to this definition")</dt>

<dd>

**Get Cluster**

Returns the Kafka cluster with the specified `<span class="pre">cluster_id</span>`.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The Kafka cluster.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaCluster"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"controller"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1"</span>
        <span class="p">},</span>
        <span class="nt">"acls"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/acls"</span>
        <span class="p">},</span>
        <span class="nt">"brokers"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers"</span>
        <span class="p">},</span>
        <span class="nt">"broker_configs"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/broker-configs"</span>
        <span class="p">},</span>
        <span class="nt">"consumer_groups"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups"</span>
        <span class="p">},</span>
        <span class="nt">"topics"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics"</span>
        <span class="p">},</span>
        <span class="nt">"partition_reassignments"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/-/partitions/-/reassignment"</span>
        <span class="p">}</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

</div>

<div class="section" id="acl">

### ACL[¶](#acl "Permalink to this headline")

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-acls">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/acls</span>`[¶](#get--clusters-cluster_id-acls "Permalink to this definition")</dt>

<dd>

**Search ACLs**

Returns a list of ACLs that match the search criteria.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.

</td>

</tr>

<tr class="field-even field">

<th class="field-name" colspan="2">Query Parameters:</th>

</tr>

<tr class="field-even field">

<td> </td>

<td class="field-body">

*   **resource_type** (_string_) – The ACL resource type.
*   **resource_name** (_string_) – The ACL resource name.
*   **pattern_type** (_string_) – The ACL pattern type.
*   **principal** (_string_) – The ACL principal.
*   **host** (_string_) – The ACL host.
*   **operation** (_string_) – The ACL operation.
*   **permission** (_string_) – The ACL permission.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/acls</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of ACLs.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaAclList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/acls?principal=alice"</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaAcl"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/acls?resource_type=TOPIC&resource_name=topic-&pattern_type=PREFIXED&principal=alice&host=*&operation=ALL&permission=ALLOW"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"resource_type"</span><span class="p">:</span> <span class="s2">"TOPIC"</span><span class="p">,</span>
                <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"topic-"</span><span class="p">,</span>
                <span class="nt">"pattern_type"</span><span class="p">:</span> <span class="s2">"PREFIXED"</span><span class="p">,</span>
                <span class="nt">"principal"</span><span class="p">:</span> <span class="s2">"alice"</span><span class="p">,</span>
                <span class="nt">"host"</span><span class="p">:</span> <span class="s2">"*"</span><span class="p">,</span>
                <span class="nt">"operation"</span><span class="p">:</span> <span class="s2">"ALL"</span><span class="p">,</span>
                <span class="nt">"permission"</span><span class="p">:</span> <span class="s2">"ALLOW"</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaAcl"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/acls?resource_type=CLUSTER&resource_name=cluster-1&pattern_type=LITERAL&principal=bob&host=*&operation=DESCRIBE&permission=DENY"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"resource_type"</span><span class="p">:</span> <span class="s2">"CLUSTER"</span><span class="p">,</span>
                <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"cluster-2"</span><span class="p">,</span>
                <span class="nt">"pattern_type"</span><span class="p">:</span> <span class="s2">"LITERAL"</span><span class="p">,</span>
                <span class="nt">"principal"</span><span class="p">:</span> <span class="s2">"alice"</span><span class="p">,</span>
                <span class="nt">"host"</span><span class="p">:</span> <span class="s2">"*"</span><span class="p">,</span>
                <span class="nt">"operation"</span><span class="p">:</span> <span class="s2">"DESCRIBE"</span><span class="p">,</span>
                <span class="nt">"permission"</span><span class="p">:</span> <span class="s2">"DENY"</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http post">

<dt class="sig sig-object http" id="post--clusters-cluster_id-acls">`<span class="pre">POST</span>` `<span class="pre">/clusters/{cluster_id}/acls</span>`[¶](#post--clusters-cluster_id-acls "Permalink to this definition")</dt>

<dd>

**Create ACLs**

Creates an ACL.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">POST</span> <span class="nn">/clusters/{cluster_id}/acls</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
<span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

<span class="p">{</span>
    <span class="nt">"resource_type"</span><span class="p">:</span> <span class="s2">"UNKNOWN"</span><span class="p">,</span>
    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"string"</span><span class="p">,</span>
    <span class="nt">"pattern_type"</span><span class="p">:</span> <span class="s2">"UNKNOWN"</span><span class="p">,</span>
    <span class="nt">"principal"</span><span class="p">:</span> <span class="s2">"string"</span><span class="p">,</span>
    <span class="nt">"host"</span><span class="p">:</span> <span class="s2">"string"</span><span class="p">,</span>
    <span class="nt">"operation"</span><span class="p">:</span> <span class="s2">"UNKNOWN"</span><span class="p">,</span>
    <span class="nt">"permission"</span><span class="p">:</span> <span class="s2">"UNKNOWN"</span>
<span class="p">}</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [201 Created](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.2) – No Content

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http delete">

<dt class="sig sig-object http" id="delete--clusters-cluster_id-acls">`<span class="pre">DELETE</span>` `<span class="pre">/clusters/{cluster_id}/acls</span>`[¶](#delete--clusters-cluster_id-acls "Permalink to this definition")</dt>

<dd>

**Delete ACLs**

Deletes the list of ACLs that matches the search criteria.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.

</td>

</tr>

<tr class="field-even field">

<th class="field-name" colspan="2">Query Parameters:</th>

</tr>

<tr class="field-even field">

<td> </td>

<td class="field-body">

*   **resource_type** (_string_) – The ACL resource type.
*   **resource_name** (_string_) – The ACL resource name.
*   **pattern_type** (_string_) – The ACL pattern type.
*   **principal** (_string_) – The ACL principal.
*   **host** (_string_) – The ACL host.
*   **operation** (_string_) – The ACL operation.
*   **permission** (_string_) – The ACL permission.

</td>

</tr>

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of deleted ACLs.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaAcl"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/acls?resource_type=TOPIC&resource_name=topic-&pattern_type=PREFIXED&principal=alice&host=*&operation=ALL&permission=ALLOW"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"resource_type"</span><span class="p">:</span> <span class="s2">"TOPIC"</span><span class="p">,</span>
                <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"topic-"</span><span class="p">,</span>
                <span class="nt">"pattern_type"</span><span class="p">:</span> <span class="s2">"PREFIXED"</span><span class="p">,</span>
                <span class="nt">"principal"</span><span class="p">:</span> <span class="s2">"alice"</span><span class="p">,</span>
                <span class="nt">"host"</span><span class="p">:</span> <span class="s2">"*"</span><span class="p">,</span>
                <span class="nt">"operation"</span><span class="p">:</span> <span class="s2">"ALL"</span><span class="p">,</span>
                <span class="nt">"permission"</span><span class="p">:</span> <span class="s2">"ALLOW"</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaAcl"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/acls?resource_type=CLUSTER&resource_name=cluster-1&pattern_type=LITERAL&principal=bob&host=*&operation=DESCRIBE&permission=DENY"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"resource_type"</span><span class="p">:</span> <span class="s2">"CLUSTER"</span><span class="p">,</span>
                <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"cluster-2"</span><span class="p">,</span>
                <span class="nt">"pattern_type"</span><span class="p">:</span> <span class="s2">"LITERAL"</span><span class="p">,</span>
                <span class="nt">"principal"</span><span class="p">:</span> <span class="s2">"alice"</span><span class="p">,</span>
                <span class="nt">"host"</span><span class="p">:</span> <span class="s2">"*"</span><span class="p">,</span>
                <span class="nt">"operation"</span><span class="p">:</span> <span class="s2">"DESCRIBE"</span><span class="p">,</span>
                <span class="nt">"permission"</span><span class="p">:</span> <span class="s2">"DENY"</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

</div>

<div class="section" id="configs">

### Configs[¶](#configs "Permalink to this headline")

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-broker-configs">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/broker-configs</span>`[¶](#get--clusters-cluster_id-broker-configs "Permalink to this definition")</dt>

<dd>

**List Cluster Configs**

Returns a list of configuration parameters for the specified Kafka cluster.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/broker-configs</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of cluster configs.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaClusterConfigList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/broker-configs"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaClusterConfig"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/broker-configs/max.connections"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/broker-config=max.connections"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"config_type"</span><span class="p">:</span> <span class="s2">"BROKER"</span><span class="p">,</span>
                <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"max.connections"</span><span class="p">,</span>
                <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"1000"</span><span class="p">,</span>
                <span class="nt">"is_default"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"is_read_only"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"is_sensitive"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_DEFAULT_BROKER_CONFIG"</span><span class="p">,</span>
                <span class="nt">"synonyms"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="p">{</span>
                        <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"max.connections"</span><span class="p">,</span>
                        <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"1000"</span><span class="p">,</span>
                        <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_DEFAULT_BROKER_CONFIG"</span>
                    <span class="p">},</span>
                    <span class="p">{</span>
                        <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"max.connections"</span><span class="p">,</span>
                        <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"2147483647"</span><span class="p">,</span>
                        <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DEFAULT_CONFIG"</span>
                    <span class="p">}</span>
                <span class="p">]</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaClusterConfig"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/broker-configs/compression.type"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/broker-config=compression.type"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"config_type"</span><span class="p">:</span> <span class="s2">"BROKER"</span><span class="p">,</span>
                <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
                <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span><span class="p">,</span>
                <span class="nt">"is_default"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"is_read_only"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"is_sensitive"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_DEFAULT_BROKER_CONFIG"</span><span class="p">,</span>
                <span class="nt">"synonyms"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="p">{</span>
                        <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
                        <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span><span class="p">,</span>
                        <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_DEFAULT_BROKER_CONFIG"</span>
                    <span class="p">},</span>
                    <span class="p">{</span>
                        <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
                        <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"producer"</span><span class="p">,</span>
                        <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DEFAULT_CONFIG"</span>
                    <span class="p">}</span>
                <span class="p">]</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http post">

<dt class="sig sig-object http" id="post--clusters-cluster_id-broker-configs-alter">`<span class="pre">POST</span>` `<span class="pre">/clusters/{cluster_id}/broker-configs:alter</span>`[¶](#post--clusters-cluster_id-broker-configs-alter "Permalink to this definition")</dt>

<dd>

**Batch Alter Cluster Configs**

Updates or deletes a set of Kafka cluster configuration parameters.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">POST</span> <span class="nn">/clusters/{cluster_id}/broker-configs:alter</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
<span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

<span class="p">{</span>
    <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">{</span>
            <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"max.connections"</span><span class="p">,</span>
            <span class="nt">"operation"</span><span class="p">:</span> <span class="s2">"DELETE"</span>
        <span class="p">},</span>
        <span class="p">{</span>
            <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
            <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span>
        <span class="p">}</span>
    <span class="p">]</span>
<span class="p">}</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [204 No Content](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.5) – No Content

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-broker-configs-name">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/broker-configs/{name}</span>`[¶](#get--clusters-cluster_id-broker-configs-name "Permalink to this definition")</dt>

<dd>

**Get Cluster Config**

Returns the configuration parameter specified by `<span class="pre">name</span>`.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **name** (_string_) – The configuration parameter name.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/broker-configs/{name}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The cluster configuration parameter.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaClusterConfig"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/broker-configs/compression.type"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/broker-config=compression.type"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"config_type"</span><span class="p">:</span> <span class="s2">"BROKER"</span><span class="p">,</span>
        <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
        <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span><span class="p">,</span>
        <span class="nt">"is_default"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="nt">"is_read_only"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="nt">"is_sensitive"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_DEFAULT_BROKER_CONFIG"</span><span class="p">,</span>
        <span class="nt">"synonyms"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
                <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span><span class="p">,</span>
                <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_DEFAULT_BROKER_CONFIG"</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
                <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"producer"</span><span class="p">,</span>
                <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DEFAULT_CONFIG"</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http put">

<dt class="sig sig-object http" id="put--clusters-cluster_id-broker-configs-name">`<span class="pre">PUT</span>` `<span class="pre">/clusters/{cluster_id}/broker-configs/{name}</span>`[¶](#put--clusters-cluster_id-broker-configs-name "Permalink to this definition")</dt>

<dd>

**Update Cluster Config**

Updates the configuration parameter specified by `<span class="pre">name</span>`.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **name** (_string_) – The configuration parameter name.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">PUT</span> <span class="nn">/clusters/{cluster_id}/broker-configs/{name}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
<span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

<span class="p">{</span>
    <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span>
<span class="p">}</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [204 No Content](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.5) – No Content

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http delete">

<dt class="sig sig-object http" id="delete--clusters-cluster_id-broker-configs-name">`<span class="pre">DELETE</span>` `<span class="pre">/clusters/{cluster_id}/broker-configs/{name}</span>`[¶](#delete--clusters-cluster_id-broker-configs-name "Permalink to this definition")</dt>

<dd>

**Reset Cluster Config**

Resets the configuration parameter specified by `<span class="pre">name</span>` to its default value.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **name** (_string_) – The configuration parameter name.

</td>

</tr>

<tr class="field-even field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [204 No Content](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.5) – No Content

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-brokers-broker_id-configs">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/brokers/{broker_id}/configs</span>`[¶](#get--clusters-cluster_id-brokers-broker_id-configs "Permalink to this definition")</dt>

<dd>

**List Broker Configs**

Return the list of configuration parameters that belong to the specified Kafka broker.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **broker_id** (_integer_) – The Kafka broker ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/brokers/{broker_id}/configs</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of broker configs.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBrokerConfigList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1/configs"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBrokerConfig"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1/configs/max.connections"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/broker=1/config=max.connections"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"max.connections"</span><span class="p">,</span>
                <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"1000"</span><span class="p">,</span>
                <span class="nt">"is_default"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"is_read_only"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"is_sensitive"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_BROKER_CONFIG"</span><span class="p">,</span>
                <span class="nt">"synonyms"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="p">{</span>
                        <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"max.connections"</span><span class="p">,</span>
                        <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"1000"</span><span class="p">,</span>
                        <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_BROKER_CONFIG"</span>
                    <span class="p">},</span>
                    <span class="p">{</span>
                        <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"max.connections"</span><span class="p">,</span>
                        <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"2147483647"</span><span class="p">,</span>
                        <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DEFAULT_CONFIG"</span>
                    <span class="p">}</span>
                <span class="p">]</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBrokerConfig"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1/configs/compression.type"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/broker=1/config=compression.type"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
                <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span><span class="p">,</span>
                <span class="nt">"is_default"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"is_read_only"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"is_sensitive"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_BROKER_CONFIG"</span><span class="p">,</span>
                <span class="nt">"synonyms"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="p">{</span>
                        <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
                        <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span><span class="p">,</span>
                        <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_BROKER_CONFIG"</span>
                    <span class="p">},</span>
                    <span class="p">{</span>
                        <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
                        <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"producer"</span><span class="p">,</span>
                        <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DEFAULT_CONFIG"</span>
                    <span class="p">}</span>
                <span class="p">]</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http post">

<dt class="sig sig-object http" id="post--clusters-cluster_id-brokers-broker_id-configs-alter">`<span class="pre">POST</span>` `<span class="pre">/clusters/{cluster_id}/brokers/{broker_id}/configs:alter</span>`[¶](#post--clusters-cluster_id-brokers-broker_id-configs-alter "Permalink to this definition")</dt>

<dd>

**Batch Alter Broker Configs**

Updates or deletes a set of broker configuration parameters.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **broker_id** (_integer_) – The Kafka broker ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">POST</span> <span class="nn">/clusters/{cluster_id}/brokers/{broker_id}/configs:alter</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
<span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

<span class="p">{</span>
    <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">{</span>
            <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"max.connections"</span><span class="p">,</span>
            <span class="nt">"operation"</span><span class="p">:</span> <span class="s2">"DELETE"</span>
        <span class="p">},</span>
        <span class="p">{</span>
            <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
            <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span>
        <span class="p">}</span>
    <span class="p">]</span>
<span class="p">}</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [204 No Content](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.5) – No Content

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-brokers-broker_id-configs-name">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/brokers/{broker_id}/configs/{name}</span>`[¶](#get--clusters-cluster_id-brokers-broker_id-configs-name "Permalink to this definition")</dt>

<dd>

**Get Broker Config**

Return the configuration parameter specified by `<span class="pre">name</span>`.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **broker_id** (_integer_) – The Kafka broker ID.
*   **name** (_string_) – The configuration parameter name.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/brokers/{broker_id}/configs/{name}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The broker configuration parameter.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBrokerConfig"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1/configs/compression.type"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/broker=1/config=compression.type"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
        <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span><span class="p">,</span>
        <span class="nt">"is_default"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="nt">"is_read_only"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="nt">"is_sensitive"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_BROKER_CONFIG"</span><span class="p">,</span>
        <span class="nt">"synonyms"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
                <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span><span class="p">,</span>
                <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_BROKER_CONFIG"</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
                <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"producer"</span><span class="p">,</span>
                <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DEFAULT_CONFIG"</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http put">

<dt class="sig sig-object http" id="put--clusters-cluster_id-brokers-broker_id-configs-name">`<span class="pre">PUT</span>` `<span class="pre">/clusters/{cluster_id}/brokers/{broker_id}/configs/{name}</span>`[¶](#put--clusters-cluster_id-brokers-broker_id-configs-name "Permalink to this definition")</dt>

<dd>

**Update Broker Config**

Updates the configuration parameter specified by `<span class="pre">name</span>`.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **broker_id** (_integer_) – The Kafka broker ID.
*   **name** (_string_) – The configuration parameter name.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">PUT</span> <span class="nn">/clusters/{cluster_id}/brokers/{broker_id}/configs/{name}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
<span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

<span class="p">{</span>
    <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span>
<span class="p">}</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [204 No Content](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.5) – No Content

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http delete">

<dt class="sig sig-object http" id="delete--clusters-cluster_id-brokers-broker_id-configs-name">`<span class="pre">DELETE</span>` `<span class="pre">/clusters/{cluster_id}/brokers/{broker_id}/configs/{name}</span>`[¶](#delete--clusters-cluster_id-brokers-broker_id-configs-name "Permalink to this definition")</dt>

<dd>

**Reset Broker Config**

Resets the configuration parameter specified by `<span class="pre">name</span>` to its default value.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **broker_id** (_integer_) – The Kafka broker ID.
*   **name** (_string_) – The configuration parameter name.

</td>

</tr>

<tr class="field-even field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [204 No Content](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.5) – No Content

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-topics-topic_name-configs">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/topics/{topic_name}/configs</span>`[¶](#get--clusters-cluster_id-topics-topic_name-configs "Permalink to this definition")</dt>

<dd>

**List Topic Configs**

Return the list of configs that belong to the specified topic.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **topic_name** (_string_) – The topic name.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/topics/{topic_name}/configs</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of cluster configs.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaTopicConfigList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/configs"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaTopicConfig"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/configs/cleanup.policy"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1/config=cleanup.policy"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
                <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"cleanup.policy"</span><span class="p">,</span>
                <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"compact"</span><span class="p">,</span>
                <span class="nt">"is_default"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"is_read_only"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"is_sensitive"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_TOPIC_CONFIG"</span><span class="p">,</span>
                <span class="nt">"synonyms"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="p">{</span>
                        <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"cleanup.policy"</span><span class="p">,</span>
                        <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"compact"</span><span class="p">,</span>
                        <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_TOPIC_CONFIG"</span>
                    <span class="p">},</span>
                    <span class="p">{</span>
                        <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"cleanup.policy"</span><span class="p">,</span>
                        <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"delete"</span><span class="p">,</span>
                        <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DEFAULT_CONFIG"</span>
                    <span class="p">}</span>
                <span class="p">]</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaTopicConfig"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/configs/compression.type"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1/config=compression.type"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
                <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
                <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span><span class="p">,</span>
                <span class="nt">"is_default"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"is_read_only"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"is_sensitive"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_TOPIC_CONFIG"</span><span class="p">,</span>
                <span class="nt">"synonyms"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="p">{</span>
                        <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
                        <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span><span class="p">,</span>
                        <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_TOPIC_CONFIG"</span>
                    <span class="p">},</span>
                    <span class="p">{</span>
                        <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
                        <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"producer"</span><span class="p">,</span>
                        <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DEFAULT_CONFIG"</span>
                    <span class="p">}</span>
                <span class="p">]</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http post">

<dt class="sig sig-object http" id="post--clusters-cluster_id-topics-topic_name-configs-alter">`<span class="pre">POST</span>` `<span class="pre">/clusters/{cluster_id}/topics/{topic_name}/configs:alter</span>`[¶](#post--clusters-cluster_id-topics-topic_name-configs-alter "Permalink to this definition")</dt>

<dd>

**Batch Alter Topic Configs**

Updates or deletes a set of topic configs.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **topic_name** (_string_) – The topic name.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">POST</span> <span class="nn">/clusters/{cluster_id}/topics/{topic_name}/configs:alter</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
<span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

<span class="p">{</span>
    <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">{</span>
            <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"cleanup.policy"</span><span class="p">,</span>
            <span class="nt">"operation"</span><span class="p">:</span> <span class="s2">"DELETE"</span>
        <span class="p">},</span>
        <span class="p">{</span>
            <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
            <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span>
        <span class="p">}</span>
    <span class="p">]</span>
<span class="p">}</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [204 No Content](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.5) – No Content

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-topics-topic_name-configs-name">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/topics/{topic_name}/configs/{name}</span>`[¶](#get--clusters-cluster_id-topics-topic_name-configs-name "Permalink to this definition")</dt>

<dd>

**Get Topic Config**

Return the config with the given <cite>name</cite>.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **topic_name** (_string_) – The topic name.
*   **name** (_string_) – The configuration parameter name.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/topics/{topic_name}/configs/{name}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The topic configuration parameter.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaTopicConfig"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/compression.type"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1/config=compression.type"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
        <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
        <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span><span class="p">,</span>
        <span class="nt">"is_default"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="nt">"is_read_only"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="nt">"is_sensitive"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_TOPIC_CONFIG"</span><span class="p">,</span>
        <span class="nt">"synonyms"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
                <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span><span class="p">,</span>
                <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_TOPIC_CONFIG"</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
                <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"producer"</span><span class="p">,</span>
                <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DEFAULT_CONFIG"</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http put">

<dt class="sig sig-object http" id="put--clusters-cluster_id-topics-topic_name-configs-name">`<span class="pre">PUT</span>` `<span class="pre">/clusters/{cluster_id}/topics/{topic_name}/configs/{name}</span>`[¶](#put--clusters-cluster_id-topics-topic_name-configs-name "Permalink to this definition")</dt>

<dd>

**Update Topic Config**

Updates the config with given <cite>name</cite>.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **topic_name** (_string_) – The topic name.
*   **name** (_string_) – The configuration parameter name.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">PUT</span> <span class="nn">/clusters/{cluster_id}/topics/{topic_name}/configs/{name}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
<span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

<span class="p">{</span>
    <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span>
<span class="p">}</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [204 No Content](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.5) – No Content

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http delete">

<dt class="sig sig-object http" id="delete--clusters-cluster_id-topics-topic_name-configs-name">`<span class="pre">DELETE</span>` `<span class="pre">/clusters/{cluster_id}/topics/{topic_name}/configs/{name}</span>`[¶](#delete--clusters-cluster_id-topics-topic_name-configs-name "Permalink to this definition")</dt>

<dd>

**Reset Topic Config**

Resets the config with given <cite>name</cite> to its default value.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **topic_name** (_string_) – The topic name.
*   **name** (_string_) – The configuration parameter name.

</td>

</tr>

<tr class="field-even field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [204 No Content](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.5) – No Content

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

</div>

<div class="section" id="broker">

### Broker[¶](#broker "Permalink to this headline")

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-brokers">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/brokers</span>`[¶](#get--clusters-cluster_id-brokers "Permalink to this definition")</dt>

<dd>

**List Brokers**

Return a list of brokers that belong to the specified Kafka cluster.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/brokers</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of brokers.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBrokerList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBroker"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/broker=1"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"host"</span><span class="p">:</span> <span class="s2">"localhost"</span><span class="p">,</span>
                <span class="nt">"port"</span><span class="p">:</span> <span class="mi">9291</span><span class="p">,</span>
                <span class="nt">"configs"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1/configs"</span>
                <span class="p">},</span>
                <span class="nt">"partition_replicas"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1/partition-replicas"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBroker"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/2"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/broker=2"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span>
                <span class="nt">"host"</span><span class="p">:</span> <span class="s2">"localhost"</span><span class="p">,</span>
                <span class="nt">"port"</span><span class="p">:</span> <span class="mi">9292</span><span class="p">,</span>
                <span class="nt">"configs"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/2/configs"</span>
                <span class="p">},</span>
                <span class="nt">"partition_replicas"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/2/partition-replicas"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBroker"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/3"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/broker=3"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">3</span><span class="p">,</span>
                <span class="nt">"host"</span><span class="p">:</span> <span class="s2">"localhost"</span><span class="p">,</span>
                <span class="nt">"port"</span><span class="p">:</span> <span class="mi">9293</span><span class="p">,</span>
                <span class="nt">"configs"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/3/configs"</span>
                <span class="p">},</span>
                <span class="nt">"partition_replicas"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/3/partition-replicas"</span>
                <span class="p">}</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-brokers-broker_id">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/brokers/{broker_id}</span>`[¶](#get--clusters-cluster_id-brokers-broker_id "Permalink to this definition")</dt>

<dd>

**Get Broker**

Returns the broker specified by `<span class="pre">broker_id</span>`.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **broker_id** (_integer_) – The Kafka broker ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/brokers/{broker_id}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The broker.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBroker"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/broker=1"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="nt">"host"</span><span class="p">:</span> <span class="s2">"localhost"</span><span class="p">,</span>
        <span class="nt">"port"</span><span class="p">:</span> <span class="mi">9291</span><span class="p">,</span>
        <span class="nt">"configs"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1/configs"</span>
        <span class="p">},</span>
        <span class="nt">"partition_replicas"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1/partition-replicas"</span>
        <span class="p">}</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http delete">

<dt class="sig sig-object http" id="delete--clusters-cluster_id-brokers-broker_id">`<span class="pre">DELETE</span>` `<span class="pre">/clusters/{cluster_id}/brokers/{broker_id}</span>`[¶](#delete--clusters-cluster_id-brokers-broker_id "Permalink to this definition")</dt>

<dd>

**Delete Broker**

Deletes the broker that is specified by `<span class="pre">broker_id</span>`.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **broker_id** (_integer_) – The Kafka broker ID.

</td>

</tr>

<tr class="field-even field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [202 Accepted](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.3) – Accepted
*   [400 Bad Request](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1) –

    Bad request

    **IllegalBrokerRemoval:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">400</span> <span class="ne">Bad Request</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"error_code"</span><span class="p">:</span> <span class="mi">400</span><span class="p">,</span>
        <span class="nt">"message"</span><span class="p">:</span> <span class="s2">"Cannot remove broker 1 as there are partitions with replication factor equal to 1 on the broker. One such partition: test_topic_parition_0."</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

    **BalancerOffline:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">400</span> <span class="ne">Bad Request</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"error_code"</span><span class="p">:</span> <span class="mi">400</span><span class="p">,</span>
        <span class="nt">"message"</span><span class="p">:</span> <span class="s2">"The Confluent Balancer component is disabled or not started yet."</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

*   [404 Not Found](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.5) –

    Broker not found.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">404</span> <span class="ne">Not Found</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"error_code"</span><span class="p">:</span> <span class="mi">404</span><span class="p">,</span>
        <span class="nt">"message"</span><span class="p">:</span> <span class="s2">"Broker not found. Broker: 1 not found in the cluster: cluster-1"</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-brokers-broker_id-partition-replicas">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/brokers/{broker_id}/partition-replicas</span>`[¶](#get--clusters-cluster_id-brokers-broker_id-partition-replicas "Permalink to this definition")</dt>

<dd>

**Search Replicas by Broker**

Returns the list of replicas assigned to the specified broker.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **broker_id** (_integer_) – The Kafka broker ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/brokers/{broker_id}/partition-replicas</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of replicas.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaReplicaList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1/partition-replicas"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaReplica"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/2/replicas/1"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1/partition=2/replica=1"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"is_leader"</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
                <span class="nt">"is_in_sync"</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
                <span class="nt">"broker"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaReplica"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-2/partitions/3/replicas/1"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-3/partition=3/replica=1"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-2"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">3</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"is_leader"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"is_in_sync"</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
                <span class="nt">"broker"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaReplica"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-3/partitions/1/replicas/1"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-3/partition=1/replica=1"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-3"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"is_leader"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"is_in_sync"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"broker"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1"</span>
                <span class="p">}</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

</div>

<div class="section" id="consumer-group">

### Consumer Group[¶](#consumer-group "Permalink to this headline")

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-consumer-groups">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/consumer-groups</span>`[¶](#get--clusters-cluster_id-consumer-groups "Permalink to this definition")</dt>

<dd>

**List Consumer Groups**

Returns the list of consumer groups that belong to the specified Kafka cluster.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/consumer-groups</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of consumer groups.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumerGroupList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumerGroup"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/consumer-group=consumer-group-1"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"consumer_group_id"</span><span class="p">:</span> <span class="s2">"consumer-group-1"</span><span class="p">,</span>
                <span class="nt">"is_simple"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"partition_assignor"</span><span class="p">:</span> <span class="s2">"org.apache.kafka.clients.consumer.RoundRobinAssignor"</span><span class="p">,</span>
                <span class="nt">"state"</span><span class="p">:</span> <span class="s2">"STABLE"</span><span class="p">,</span>
                <span class="nt">"coordinator"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1"</span>
                <span class="p">},</span>
                <span class="nt">"consumers"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers"</span>
                <span class="p">},</span>
                <span class="nt">"lag_summary"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lag-summary"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumerGroup"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-2"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/consumer-group=consumer-group-2"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"consumer_group_id"</span><span class="p">:</span> <span class="s2">"consumer-group-2"</span><span class="p">,</span>
                <span class="nt">"is_simple"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"partition_assignor"</span><span class="p">:</span> <span class="s2">"org.apache.kafka.clients.consumer.StickyAssignor"</span><span class="p">,</span>
                <span class="nt">"state"</span><span class="p">:</span> <span class="s2">"PREPARING_REBALANCE"</span><span class="p">,</span>
                <span class="nt">"coordinator"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/2"</span>
                <span class="p">},</span>
                <span class="nt">"consumers"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-2/consumers"</span>
                <span class="p">},</span>
                <span class="nt">"lag_summary"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-2/lag-summary"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumerGroup"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-3"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/consumer-group=consumer-group-3"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"consumer_group_id"</span><span class="p">:</span> <span class="s2">"consumer-group-3"</span><span class="p">,</span>
                <span class="nt">"is_simple"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"partition_assignor"</span><span class="p">:</span> <span class="s2">"org.apache.kafka.clients.consumer.RangeAssignor"</span><span class="p">,</span>
                <span class="nt">"state"</span><span class="p">:</span> <span class="s2">"DEAD"</span><span class="p">,</span>
                <span class="nt">"coordinator"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/3"</span>
                <span class="p">},</span>
                <span class="nt">"consumers"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-3/consumers"</span>
                <span class="p">},</span>
                <span class="nt">"lag_summary"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-3/lag-summary"</span>
                <span class="p">}</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-consumer-groups-consumer_group_id">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/consumer-groups/{consumer_group_id}</span>`[¶](#get--clusters-cluster_id-consumer-groups-consumer_group_id "Permalink to this definition")</dt>

<dd>

**Get Consumer Group**

Returns the consumer group specified by the `<span class="pre">consumer_group_id</span>`.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **consumer_group_id** (_string_) – The consumer group ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/consumer-groups/{consumer_group_id}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The consumer group.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumerGroup"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/consumer-group=consumer-group-1"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"consumer_group_id"</span><span class="p">:</span> <span class="s2">"consumer-group-1"</span><span class="p">,</span>
        <span class="nt">"is_simple"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="nt">"partition_assignor"</span><span class="p">:</span> <span class="s2">"org.apache.kafka.clients.consumer.RoundRobinAssignor"</span><span class="p">,</span>
        <span class="nt">"state"</span><span class="p">:</span> <span class="s2">"STABLE"</span><span class="p">,</span>
        <span class="nt">"coordinator"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1"</span>
        <span class="p">},</span>
        <span class="nt">"consumers"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers"</span>
        <span class="p">},</span>
        <span class="nt">"lag_summary"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lag-summary"</span>
        <span class="p">}</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-consumer-groups-consumer_group_id-consumers">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers</span>`[¶](#get--clusters-cluster_id-consumer-groups-consumer_group_id-consumers "Permalink to this definition")</dt>

<dd>

**List Consumers**

Returns a list of consumers that belong to the specified consumer group.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **consumer_group_id** (_string_) – The consumer group ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of consumers.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumerList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumer"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-1"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"consumer_group_id"</span><span class="p">:</span> <span class="s2">"consumer-group-1"</span><span class="p">,</span>
                <span class="nt">"consumer_id"</span><span class="p">:</span> <span class="s2">"consumer-1"</span><span class="p">,</span>
                <span class="nt">"instance_id"</span><span class="p">:</span> <span class="s2">"consumer-instance-1"</span><span class="p">,</span>
                <span class="nt">"client_id"</span><span class="p">:</span> <span class="s2">"client-1"</span><span class="p">,</span>
                <span class="nt">"assignments"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumer"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-2"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-2"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"consumer_group_id"</span><span class="p">:</span> <span class="s2">"consumer-group-1"</span><span class="p">,</span>
                <span class="nt">"consumer_id"</span><span class="p">:</span> <span class="s2">"consumer-2"</span><span class="p">,</span>
                <span class="nt">"instance_id"</span><span class="p">:</span> <span class="s2">"consumer-instance-2"</span><span class="p">,</span>
                <span class="nt">"client_id"</span><span class="p">:</span> <span class="s2">"client-2"</span><span class="p">,</span>
                <span class="nt">"assignments"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-2/assignments"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumer"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-2"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-2"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"consumer_group_id"</span><span class="p">:</span> <span class="s2">"consumer-group-1"</span><span class="p">,</span>
                <span class="nt">"consumer_id"</span><span class="p">:</span> <span class="s2">"consumer-2"</span><span class="p">,</span>
                <span class="nt">"instance_id"</span><span class="p">:</span> <span class="s2">"consumer-instance-2"</span><span class="p">,</span>
                <span class="nt">"client_id"</span><span class="p">:</span> <span class="s2">"client-2"</span><span class="p">,</span>
                <span class="nt">"assignments"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-2/assignments"</span>
                <span class="p">}</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-consumer-groups-consumer_group_id-lag-summary">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/lag-summary</span>`[¶](#get--clusters-cluster_id-consumer-groups-consumer_group_id-lag-summary "Permalink to this definition")</dt>

<dd>

**Get Consumer Group Lag Summary.**

Returns the max and total lag of the consumers belonging to the specified consumer group.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **consumer_group_id** (_string_) – The consumer group ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/lag-summary</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The max and total consumer lag in a consumer group.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumerGroupLagSummary"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lag-summary"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/consumer-groups=consumer-group-1/lag-summary"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"consumer_group_id"</span><span class="p">:</span> <span class="s2">"consumer-group-1"</span><span class="p">,</span>
        <span class="nt">"max_lag_consumer_id"</span><span class="p">:</span> <span class="s2">"consumer-1"</span><span class="p">,</span>
        <span class="nt">"max_lag_instance_id"</span><span class="p">:</span> <span class="s2">"consumer-instance-1"</span><span class="p">,</span>
        <span class="nt">"max_lag_client_id"</span><span class="p">:</span> <span class="s2">"client-1"</span><span class="p">,</span>
        <span class="nt">"max_lag_topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
        <span class="nt">"max_lag_partition_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="nt">"max_lag"</span><span class="p">:</span> <span class="mi">100</span><span class="p">,</span>
        <span class="nt">"total_lag"</span><span class="p">:</span> <span class="mi">110</span><span class="p">,</span>
        <span class="nt">"max_lag_consumer"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1"</span>
        <span class="p">},</span>
        <span class="nt">"max_lag_partition"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1"</span>
        <span class="p">}</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-consumer-groups-consumer_group_id-lags">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/lags</span>`[¶](#get--clusters-cluster_id-consumer-groups-consumer_group_id-lags "Permalink to this definition")</dt>

<dd>

**List Consumer Lags**

Returns a list of consumer lags of the consumers belonging to the specified consumer group.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **consumer_group_id** (_string_) – The consumer group ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/lags</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of consumer lags.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumerLagList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumerLag"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-1/partitions/1"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/consumer-group=consumer-group-1/lag=topic-1/partition=1"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"consumer_group_id"</span><span class="p">:</span> <span class="s2">"consumer-group-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"consumer_id"</span><span class="p">:</span> <span class="s2">"consumer-1"</span><span class="p">,</span>
                <span class="nt">"instance_id"</span><span class="p">:</span> <span class="s2">"consumer-instance-1"</span><span class="p">,</span>
                <span class="nt">"client_id"</span><span class="p">:</span> <span class="s2">"client-1"</span><span class="p">,</span>
                <span class="nt">"current_offset"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"log_end_offset"</span><span class="p">:</span> <span class="mi">101</span><span class="p">,</span>
                <span class="nt">"lag"</span><span class="p">:</span> <span class="mi">100</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumerLag"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-1/partitions/2"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/consumer-group=consumer-group-1/lag=topic-1/partition=2"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"consumer_group_id"</span><span class="p">:</span> <span class="s2">"consumer-group-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span>
                <span class="nt">"consumer_id"</span><span class="p">:</span> <span class="s2">"consumer-2"</span><span class="p">,</span>
                <span class="nt">"instance_id"</span><span class="p">:</span> <span class="s2">"consumer-instance-2"</span><span class="p">,</span>
                <span class="nt">"client_id"</span><span class="p">:</span> <span class="s2">"client-2"</span><span class="p">,</span>
                <span class="nt">"current_offset"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"log_end_offset"</span><span class="p">:</span> <span class="mi">11</span><span class="p">,</span>
                <span class="nt">"lag"</span><span class="p">:</span> <span class="mi">10</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumerLag"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-1/partitions/3"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/consumer-group=consumer-group-1/lag=topic-1/partition=3"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"consumer_group_id"</span><span class="p">:</span> <span class="s2">"consumer-group-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">3</span><span class="p">,</span>
                <span class="nt">"consumer_id"</span><span class="p">:</span> <span class="s2">"consumer-3"</span><span class="p">,</span>
                <span class="nt">"instance_id"</span><span class="p">:</span> <span class="s2">"consumer-instance-3"</span><span class="p">,</span>
                <span class="nt">"client_id"</span><span class="p">:</span> <span class="s2">"client-3"</span><span class="p">,</span>
                <span class="nt">"current_offset"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"log_end_offset"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"lag"</span><span class="p">:</span> <span class="mi">0</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-consumer-groups-consumer_group_id-consumers-consumer_id">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers/{consumer_id}</span>`[¶](#get--clusters-cluster_id-consumer-groups-consumer_group_id-consumers-consumer_id "Permalink to this definition")</dt>

<dd>

**Get Consumer**

Returns the consumer specified by the `<span class="pre">consumer_id</span>`.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **consumer_group_id** (_string_) – The consumer group ID.
*   **consumer_id** (_string_) – The consumer ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers/{consumer_id}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The consumer.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumer"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-1"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"consumer_group_id"</span><span class="p">:</span> <span class="s2">"consumer-group-1"</span><span class="p">,</span>
        <span class="nt">"consumer_id"</span><span class="p">:</span> <span class="s2">"consumer-1"</span><span class="p">,</span>
        <span class="nt">"instance_id"</span><span class="p">:</span> <span class="s2">"consumer-instance-1"</span><span class="p">,</span>
        <span class="nt">"client_id"</span><span class="p">:</span> <span class="s2">"client-1"</span><span class="p">,</span>
        <span class="nt">"assignments"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments"</span>
        <span class="p">}</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-consumer-groups-consumer_group_id-consumers-consumer_id-assignments">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers/{consumer_id}/assignments</span>`[¶](#get--clusters-cluster_id-consumer-groups-consumer_group_id-consumers-consumer_id-assignments "Permalink to this definition")</dt>

<dd>

**List Consumer Assignments**

Returns a list of partition assignments for the specified consumer.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **consumer_group_id** (_string_) – The consumer group ID.
*   **consumer_id** (_string_) – The consumer ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers/{consumer_id}/assignments</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of consumer group assignments.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumerAssignmentList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumerAssignment"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments/topic-1/partitions/1"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-1/assignment=topic=1/partition=1"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"consumer_group_id"</span><span class="p">:</span> <span class="s2">"consumer-group-1"</span><span class="p">,</span>
                <span class="nt">"consumer_id"</span><span class="p">:</span> <span class="s2">"consumer-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"partition"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1"</span>
                <span class="p">},</span>
                <span class="nt">"lag"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/lags/consumer-group-1"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumerAssignment"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments/topic-2/partitions/2"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-1/assignment=topic=2/partition=2"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"consumer_group_id"</span><span class="p">:</span> <span class="s2">"consumer-group-1"</span><span class="p">,</span>
                <span class="nt">"consumer_id"</span><span class="p">:</span> <span class="s2">"consumer-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-2"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span>
                <span class="nt">"partition"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-2/partitions/2"</span>
                <span class="p">},</span>
                <span class="nt">"lag"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-2/partitions/2/lags/consumer-groups-1"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumerAssignment"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments/topic-3/partitions/3"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-1/assignment=topic=3/partition=3"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"consumer_group_id"</span><span class="p">:</span> <span class="s2">"consumer-group-1"</span><span class="p">,</span>
                <span class="nt">"consumer_id"</span><span class="p">:</span> <span class="s2">"consumer-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-3"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">3</span><span class="p">,</span>
                <span class="nt">"partition"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-3/partitions/3"</span>
                <span class="p">},</span>
                <span class="nt">"lag"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-3/partitions/3/lags/consumer-groups-1"</span>
                <span class="p">}</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-consumer-groups-consumer_group_id-consumers-consumer_id-assignments-topic_name-partitions-partition_id">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers/{consumer_id}/assignments/{topic_name}/partitions/{partition_id}</span>`[¶](#get--clusters-cluster_id-consumer-groups-consumer_group_id-consumers-consumer_id-assignments-topic_name-partitions-partition_id "Permalink to this definition")</dt>

<dd>

**Get Consumer Assignment**

Returns information about the assignment for the specified consumer to the specified partition.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **consumer_group_id** (_string_) – The consumer group ID.
*   **consumer_id** (_string_) – The consumer ID.
*   **topic_name** (_string_) – The topic name.
*   **partition_id** (_integer_) – The partition ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/consumers/{consumer_id}/assignments/{topic_name}/partitions/{partition_id}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The consumer group assignment.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumerAssignment"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/consumers/consumer-1/assignments/topic-1/partitions/1"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/consumer-group=consumer-group-1/consumer=consumer-1/assignment=topic=1/partition=1"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"consumer_group_id"</span><span class="p">:</span> <span class="s2">"consumer-group-1"</span><span class="p">,</span>
        <span class="nt">"consumer_id"</span><span class="p">:</span> <span class="s2">"consumer-1"</span><span class="p">,</span>
        <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
        <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="nt">"partition"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1"</span>
        <span class="p">},</span>
        <span class="nt">"lag"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/lags/consumer-group-1"</span>
        <span class="p">}</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

</div>

<div class="section" id="partition">

### Partition[¶](#partition "Permalink to this headline")

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-consumer-groups-consumer_group_id-lags-topic_name-partitions-partition_id">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/lags/{topic_name}/partitions/{partition_id}</span>`[¶](#get--clusters-cluster_id-consumer-groups-consumer_group_id-lags-topic_name-partitions-partition_id "Permalink to this definition")</dt>

<dd>

**Get Consumer Lag**

Returns the consumer lag on a partition with the given <cite>partition_id</cite>.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **consumer_group_id** (_string_) – The consumer group ID.
*   **topic_name** (_string_) – The topic name.
*   **partition_id** (_integer_) – The partition ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/consumer-groups/{consumer_group_id}/lags/{topic_name}/partitions/{partition_id}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The consumer lag.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaConsumerLag"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/consumer-groups/consumer-group-1/lags/topic-1/partitions/1"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/consumer-group=consumer-group-1/lag=topic-1/partition=1"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"consumer_group_id"</span><span class="p">:</span> <span class="s2">"consumer-group-1"</span><span class="p">,</span>
        <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
        <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="nt">"consumer_id"</span><span class="p">:</span> <span class="s2">"consumer-1"</span><span class="p">,</span>
        <span class="nt">"instance_id"</span><span class="p">:</span> <span class="s2">"consumer-instance-1"</span><span class="p">,</span>
        <span class="nt">"client_id"</span><span class="p">:</span> <span class="s2">"client-1"</span><span class="p">,</span>
        <span class="nt">"current_offset"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="nt">"log_end_offset"</span><span class="p">:</span> <span class="mi">101</span><span class="p">,</span>
        <span class="nt">"lag"</span><span class="p">:</span> <span class="mi">100</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-topics-topic_name-partitions">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/topics/{topic_name}/partitions</span>`[¶](#get--clusters-cluster_id-topics-topic_name-partitions "Permalink to this definition")</dt>

<dd>

**List Partitions**

Returns the list of partitions that belong to the specified topic.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **topic_name** (_string_) – The topic name.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/topics/{topic_name}/partitions</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of partitions.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaPartitionList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaPartition"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1/partition=1"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"leader"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/1"</span>
                <span class="p">},</span>
                <span class="nt">"replicas"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas"</span>
                <span class="p">},</span>
                <span class="nt">"reassignment"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/reassignment"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaPartition"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/2"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1/partition=2"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span>
                <span class="nt">"leader"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/2/replicas/2"</span>
                <span class="p">},</span>
                <span class="nt">"replicas"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/2/replicas"</span>
                <span class="p">},</span>
                <span class="nt">"reassignment"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/2/reassignment"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaPartition"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/3"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1/partition=3"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">3</span><span class="p">,</span>
                <span class="nt">"leader"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/3/replicas/3"</span>
                <span class="p">},</span>
                <span class="nt">"replicas"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/3/replicas"</span>
                <span class="p">},</span>
                <span class="nt">"reassignment"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/3/reassignment"</span>
                <span class="p">}</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-topics-topic_name-partitions-partition_id">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}</span>`[¶](#get--clusters-cluster_id-topics-topic_name-partitions-partition_id "Permalink to this definition")</dt>

<dd>

**Get Partition**

Returns the partition with the given <cite>partition_id</cite>.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **topic_name** (_string_) – The topic name.
*   **partition_id** (_integer_) – The partition ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The partition

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaPartition"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1/partition=1"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
        <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="nt">"leader"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/1"</span>
        <span class="p">},</span>
        <span class="nt">"replicas"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas"</span>
        <span class="p">},</span>
        <span class="nt">"reassignment"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/reassignment"</span>
        <span class="p">}</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-topics---partitions---reassignment">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/topics/-/partitions/-/reassignment</span>`[¶](#get--clusters-cluster_id-topics---partitions---reassignment "Permalink to this definition")</dt>

<dd>

**List All Replica Reassignments**

Returns the list of all ongoing replica reassignments in the given Kafka cluster.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/topics/-/partitions/-/reassignment</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The ongoing replicas reassignments.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaReassignmentList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/-/partitions/-/reassignment"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaReassignment"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/reassignment"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1/partition=1/reassignment"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"adding_replicas"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="mi">1</span><span class="p">,</span>
                    <span class="mi">2</span>
                <span class="p">],</span>
                <span class="nt">"removing_replicas"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="mi">3</span>
                <span class="p">],</span>
                <span class="nt">"replicas"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaReassignment"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-2/partitions/2/reassignment"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-2/partition=2/reassignment"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-2"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span>
                <span class="nt">"adding_replicas"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="mi">1</span>
                <span class="p">],</span>
                <span class="nt">"removing_replicas"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="mi">2</span><span class="p">,</span>
                    <span class="mi">3</span>
                <span class="p">],</span>
                <span class="nt">"replicas"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-2/partitions/2/replicas"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaReassignment"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-3/partitions/3/reassignment"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-3/partition=3/reassignment"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-3"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">3</span><span class="p">,</span>
                <span class="nt">"adding_replicas"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="mi">3</span>
                <span class="p">],</span>
                <span class="nt">"removing_replicas"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="mi">1</span><span class="p">,</span>
                    <span class="mi">2</span>
                <span class="p">],</span>
                <span class="nt">"replicas"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-3/partitions/3/replicas"</span>
                <span class="p">}</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-topics-topic_name-partitions---reassignment">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/topics/{topic_name}/partitions/-/reassignment</span>`[¶](#get--clusters-cluster_id-topics-topic_name-partitions---reassignment "Permalink to this definition")</dt>

<dd>

**Search Replica Reassignments By Topic**

Returns the list of ongoing replica reassignments for the given topic.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **topic_name** (_string_) – The topic name.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/topics/{topic_name}/partitions/-/reassignment</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The ongoing replicas reassignments.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaReassignmentList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/-/partitions/-/reassignment"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaReassignment"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/reassignment"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1/partition=1/reassignment"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"adding_replicas"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="mi">1</span><span class="p">,</span>
                    <span class="mi">2</span>
                <span class="p">],</span>
                <span class="nt">"removing_replicas"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="mi">3</span>
                <span class="p">],</span>
                <span class="nt">"replicas"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaReassignment"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/2/reassignment"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1/partition=2/reassignment"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span>
                <span class="nt">"adding_replicas"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="mi">1</span>
                <span class="p">],</span>
                <span class="nt">"removing_replicas"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="mi">2</span><span class="p">,</span>
                    <span class="mi">3</span>
                <span class="p">],</span>
                <span class="nt">"replicas"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/2/replicas"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaReassignment"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/3/reassignment"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1/partition=3/reassignment"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">3</span><span class="p">,</span>
                <span class="nt">"adding_replicas"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="mi">3</span>
                <span class="p">],</span>
                <span class="nt">"removing_replicas"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="mi">1</span><span class="p">,</span>
                    <span class="mi">2</span>
                <span class="p">],</span>
                <span class="nt">"replicas"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/3/replicas"</span>
                <span class="p">}</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-topics-topic_name-partitions-partition_id-reassignment">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/reassignment</span>`[¶](#get--clusters-cluster_id-topics-topic_name-partitions-partition_id-reassignment "Permalink to this definition")</dt>

<dd>

**Get Replica Reassignments**

Returns the list of ongoing replica reassignments for the given partition.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **topic_name** (_string_) – The topic name.
*   **partition_id** (_integer_) – The partition ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/reassignment</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The ongoing replicas reassignments.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaReassignment"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/reassignment"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1/partition=1/reassignment"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
        <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="nt">"adding_replicas"</span><span class="p">:</span> <span class="p">[</span>
            <span class="mi">1</span><span class="p">,</span>
            <span class="mi">2</span>
        <span class="p">],</span>
        <span class="nt">"removing_replicas"</span><span class="p">:</span> <span class="p">[</span>
            <span class="mi">3</span>
        <span class="p">],</span>
        <span class="nt">"replicas"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas"</span>
        <span class="p">}</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

</div>

<div class="section" id="topic">

### Topic[¶](#topic "Permalink to this headline")

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-topics">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/topics</span>`[¶](#get--clusters-cluster_id-topics "Permalink to this definition")</dt>

<dd>

**List Topics**

Returns the list of topics that belong to the specified Kafka cluster.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/topics</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of topics.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaTopicList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaTopic"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
                <span class="nt">"is_internal"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"replication_factor"</span><span class="p">:</span> <span class="mi">3</span><span class="p">,</span>
                <span class="nt">"partitions"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions"</span>
                <span class="p">},</span>
                <span class="nt">"configs"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/configs"</span>
                <span class="p">},</span>
                <span class="nt">"partition_reassignments"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/-/reassignments"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaTopic"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-2"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-2"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-2"</span><span class="p">,</span>
                <span class="nt">"is_internal"</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
                <span class="nt">"replication_factor"</span><span class="p">:</span> <span class="mi">4</span><span class="p">,</span>
                <span class="nt">"partitions"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-2/partitions"</span>
                <span class="p">},</span>
                <span class="nt">"configs"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-2/configs"</span>
                <span class="p">},</span>
                <span class="nt">"partition_reassignments"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-2/partitions/-/reassignments"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaTopic"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-3"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-3"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-3"</span><span class="p">,</span>
                <span class="nt">"is_internal"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"replication_factor"</span><span class="p">:</span> <span class="mi">5</span><span class="p">,</span>
                <span class="nt">"partitions"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-3/partitions"</span>
                <span class="p">},</span>
                <span class="nt">"configs"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-3/configs"</span>
                <span class="p">},</span>
                <span class="nt">"partition_reassignments"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-3/partitions/-/reassignments"</span>
                <span class="p">}</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http post">

<dt class="sig sig-object http" id="post--clusters-cluster_id-topics">`<span class="pre">POST</span>` `<span class="pre">/clusters/{cluster_id}/topics</span>`[¶](#post--clusters-cluster_id-topics "Permalink to this definition")</dt>

<dd>

**Create Topic**

Creates a topic.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.

</td>

</tr>

</tbody>

</table>

**uniform_replication:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">POST</span> <span class="nn">/clusters/{cluster_id}/topics</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
<span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

<span class="p">{</span>
    <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-X"</span><span class="p">,</span>
    <span class="nt">"partitions_count"</span><span class="p">:</span> <span class="mi">64</span><span class="p">,</span>
    <span class="nt">"replication_factor"</span><span class="p">:</span> <span class="mi">3</span><span class="p">,</span>
    <span class="nt">"configs"</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">{</span>
            <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"cleanup.policy"</span><span class="p">,</span>
            <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"compact"</span>
        <span class="p">},</span>
        <span class="p">{</span>
            <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
            <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span>
        <span class="p">}</span>
    <span class="p">]</span>
<span class="p">}</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

**explicit_replicas_assignments:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">POST</span> <span class="nn">/clusters/{cluster_id}/topics</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
<span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

<span class="p">{</span>
    <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-Y"</span><span class="p">,</span>
    <span class="nt">"replicas_assignments"</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">{</span>
            <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
            <span class="nt">"broker_ids"</span><span class="p">:</span> <span class="p">[</span>
                <span class="mi">1</span><span class="p">,</span>
                <span class="mi">2</span>
            <span class="p">]</span>
        <span class="p">},</span>
        <span class="p">{</span>
            <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
            <span class="nt">"broker_ids"</span><span class="p">:</span> <span class="p">[</span>
                <span class="mi">2</span><span class="p">,</span>
                <span class="mi">3</span>
            <span class="p">]</span>
        <span class="p">},</span>
        <span class="p">{</span>
            <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span>
            <span class="nt">"broker_ids"</span><span class="p">:</span> <span class="p">[</span>
                <span class="mi">3</span><span class="p">,</span>
                <span class="mi">1</span>
            <span class="p">]</span>
        <span class="p">}</span>
    <span class="p">],</span>
    <span class="nt">"configs"</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">{</span>
            <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"cleanup.policy"</span><span class="p">,</span>
            <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"compact"</span>
        <span class="p">},</span>
        <span class="p">{</span>
            <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
            <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span>
        <span class="p">}</span>
    <span class="p">]</span>
<span class="p">}</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [201 Created](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.2) –

    The created topic.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">201</span> <span class="ne">Created</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaTopic"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-X"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-X"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-X"</span><span class="p">,</span>
        <span class="nt">"is_internal"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="nt">"replication_factor"</span><span class="p">:</span> <span class="mi">3</span><span class="p">,</span>
        <span class="nt">"partitions"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-X/partitions"</span>
        <span class="p">},</span>
        <span class="nt">"configs"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-X/configs"</span>
        <span class="p">},</span>
        <span class="nt">"partition_reassignments"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-X/partitions/-/reassignments"</span>
        <span class="p">}</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-topics-topic_name">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/topics/{topic_name}</span>`[¶](#get--clusters-cluster_id-topics-topic_name "Permalink to this definition")</dt>

<dd>

**Get Topic**

Returns the topic with the given <cite>topic_name</cite>.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **topic_name** (_string_) – The topic name.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/topics/{topic_name}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The topic.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaTopic"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
        <span class="nt">"is_internal"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="nt">"replication_factor"</span><span class="p">:</span> <span class="mi">3</span><span class="p">,</span>
        <span class="nt">"partitions"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions"</span>
        <span class="p">},</span>
        <span class="nt">"configs"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/configs"</span>
        <span class="p">},</span>
        <span class="nt">"partition_reassignments"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/-/reassignments"</span>
        <span class="p">}</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http delete">

<dt class="sig sig-object http" id="delete--clusters-cluster_id-topics-topic_name">`<span class="pre">DELETE</span>` `<span class="pre">/clusters/{cluster_id}/topics/{topic_name}</span>`[¶](#delete--clusters-cluster_id-topics-topic_name "Permalink to this definition")</dt>

<dd>

**Delete Topic**

Deletes the topic with the given <cite>topic_name</cite>.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **topic_name** (_string_) – The topic name.

</td>

</tr>

<tr class="field-even field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [204 No Content](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.5) – No Content

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

</div>

<div class="section" id="replica">

### Replica[¶](#replica "Permalink to this headline")

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-topics-topic_name-partitions-partition_id-replicas">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/replicas</span>`[¶](#get--clusters-cluster_id-topics-topic_name-partitions-partition_id-replicas "Permalink to this definition")</dt>

<dd>

**List Replicas**

Returns the list of replicas for the specified partition.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **topic_name** (_string_) – The topic name.
*   **partition_id** (_integer_) – The partition ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/replicas</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of replicas.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaReplicaList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaReplica"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/1"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1/partition=1/replica=1"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"is_leader"</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
                <span class="nt">"is_in_sync"</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
                <span class="nt">"broker"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaReplica"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/2"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1/partition=1/replica=2"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span>
                <span class="nt">"is_leader"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"is_in_sync"</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
                <span class="nt">"broker"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/2"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaReplica"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/3"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1/partition=1/replica=3"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
                <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">3</span><span class="p">,</span>
                <span class="nt">"is_leader"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"is_in_sync"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"broker"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/3"</span>
                <span class="p">}</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-topics-topic_name-partitions-partition_id-replicas-broker_id">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/replicas/{broker_id}</span>`[¶](#get--clusters-cluster_id-topics-topic_name-partitions-partition_id-replicas-broker_id "Permalink to this definition")</dt>

<dd>

**Get Replica**

Returns the replica for the specified partition assigned to the specified broker.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **topic_name** (_string_) – The topic name.
*   **partition_id** (_integer_) – The partition ID.
*   **broker_id** (_integer_) – The Kafka broker ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/topics/{topic_name}/partitions/{partition_id}/replicas/{broker_id}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The replica.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaReplica"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/topics/topic-1/partitions/1/replicas/1"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/topic=topic-1/partition=1/replica=1"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
        <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="nt">"is_leader"</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
        <span class="nt">"is_in_sync"</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
        <span class="nt">"broker"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/v3/clusters/cluster-1/brokers/1"</span>
        <span class="p">}</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

</div>

<div class="section" id="records">

### Records[¶](#records "Permalink to this headline")

<dl class="http post">

<dt class="sig sig-object http" id="post--clusters-cluster_id-topics-topic_name-records">`<span class="pre">POST</span>` `<span class="pre">/clusters/{cluster_id}/topics/{topic_name}/records</span>`[¶](#post--clusters-cluster_id-topics-topic_name-records "Permalink to this definition")</dt>

<dd>

**Produce records to the given topic.**

Produce records to the given topic, returning delivery reports for each record produced. This API can be used in streaming mode by setting “Transfer-Encoding: chunked” header. For as long as the connection is kept open, the server will keep accepting records. For each record sent to the server, the server will asynchronously send back a delivery report, in the same order. Records are streamed to and from the server as Concatenated JSON. Errors are reported per record. The HTTP status code will be HTTP 200 OK as long as the connection is successfully established.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **topic_name** (_string_) – The topic name.

</td>

</tr>

</tbody>

</table>

**binary_and_avro_with_subject_and_raw_schema:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">POST</span> <span class="nn">/clusters/{cluster_id}/topics/{topic_name}/records</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
<span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

<span class="p">{</span>
    <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
    <span class="nt">"headers"</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">{</span>
            <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"Header-1"</span><span class="p">,</span>
            <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"SGVhZGVyLTE="</span>
        <span class="p">},</span>
        <span class="p">{</span>
            <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"Header-2"</span><span class="p">,</span>
            <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"SGVhZGVyLTI="</span>
        <span class="p">}</span>
    <span class="p">],</span>
    <span class="nt">"key"</span><span class="p">:</span> <span class="p">{</span>
        <span class="nt">"type"</span><span class="p">:</span> <span class="s2">"BINARY"</span><span class="p">,</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="s2">"Zm9vYmFy"</span>
    <span class="p">},</span>
    <span class="nt">"value"</span><span class="p">:</span> <span class="p">{</span>
        <span class="nt">"type"</span><span class="p">:</span> <span class="s2">"AVRO"</span><span class="p">,</span>
        <span class="nt">"subject"</span><span class="p">:</span> <span class="s2">"topic-1-key"</span><span class="p">,</span>
        <span class="nt">"schema"</span><span class="p">:</span> <span class="s2">"{\\\"type\\\":\\\"string\\\"}"</span><span class="p">,</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="s2">"foobar"</span>
    <span class="p">},</span>
    <span class="nt">"timestamp"</span><span class="p">:</span> <span class="s2">"2021-02-05T19:14:42Z"</span>
<span class="p">}</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

**schema_id_and_schema_version:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">POST</span> <span class="nn">/clusters/{cluster_id}/topics/{topic_name}/records</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
<span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

<span class="p">{</span>
    <span class="nt">"key"</span><span class="p">:</span> <span class="p">{</span>
        <span class="nt">"subject_name_strategy"</span><span class="p">:</span> <span class="s2">"TOPIC_NAME"</span><span class="p">,</span>
        <span class="nt">"schema_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="mi">1000</span>
    <span class="p">},</span>
    <span class="nt">"value"</span><span class="p">:</span> <span class="p">{</span>
        <span class="nt">"schema_version"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"foo"</span><span class="p">:</span> <span class="s2">"bar"</span>
        <span class="p">}</span>
    <span class="p">}</span>
<span class="p">}</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

**latest_schema:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">POST</span> <span class="nn">/clusters/{cluster_id}/topics/{topic_name}/records</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
<span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

<span class="p">{</span>
    <span class="nt">"key"</span><span class="p">:</span> <span class="p">{</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="mi">1000</span>
    <span class="p">},</span>
    <span class="nt">"value"</span><span class="p">:</span> <span class="p">{</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="s2">"foobar"</span>
    <span class="p">}</span>
<span class="p">}</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

**null_and_empty_data:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">POST</span> <span class="nn">/clusters/{cluster_id}/topics/{topic_name}/records</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
<span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

<span class="p">{</span>
    <span class="nt">"key"</span><span class="p">:</span> <span class="p">{</span>
        <span class="nt">"schema_id"</span><span class="p">:</span> <span class="mi">1</span>
    <span class="p">},</span>
    <span class="nt">"value"</span><span class="p">:</span> <span class="p">{</span>
        <span class="nt">"schema_version"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="kc">null</span>
    <span class="p">}</span>
<span class="p">}</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

**empty_value:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">POST</span> <span class="nn">/clusters/{cluster_id}/topics/{topic_name}/records</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
<span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

<span class="p">{</span>
    <span class="nt">"key"</span><span class="p">:</span> <span class="p">{</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="mi">1000</span>
    <span class="p">}</span>
<span class="p">}</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"topic_name"</span><span class="p">:</span> <span class="s2">"topic-1"</span><span class="p">,</span>
        <span class="nt">"partition_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="nt">"offset"</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
        <span class="nt">"timestamp"</span><span class="p">:</span> <span class="s2">"2021-02-05T19:14:42Z"</span><span class="p">,</span>
        <span class="nt">"key"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"type"</span><span class="p">:</span> <span class="s2">"BINARY"</span><span class="p">,</span>
            <span class="nt">"size"</span><span class="p">:</span> <span class="mi">7</span>
        <span class="p">},</span>
        <span class="nt">"value"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"type"</span><span class="p">:</span> <span class="s2">"AVRO"</span><span class="p">,</span>
            <span class="nt">"subject"</span><span class="p">:</span> <span class="s2">"topic-1-value"</span><span class="p">,</span>
            <span class="nt">"schema_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
            <span class="nt">"schema_version"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
            <span class="nt">"size"</span><span class="p">:</span> <span class="mi">7</span>
        <span class="p">}</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

</div>

<div class="section" id="balancerstatus">

### BalancerStatus[¶](#balancerstatus "Permalink to this headline")

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-balancer">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/balancer</span>`[¶](#get--clusters-cluster_id-balancer "Permalink to this definition")</dt>

<dd>

**Get status of the balancer**

Returns status about the balancer component for the cluster specified with `<span class="pre">cluster_id</span>`.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/balancer</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The balancer status

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBalancerStatus"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/balancer"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/balancer"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"status"</span><span class="p">:</span> <span class="s2">"ERROR"</span><span class="p">,</span>
        <span class="nt">"error_code"</span><span class="p">:</span> <span class="mi">10014</span><span class="p">,</span>
        <span class="nt">"error_message"</span><span class="p">:</span> <span class="s2">"The Confluent Balancer failed to start as JBOD is enabled for the cluster."</span><span class="p">,</span>
        <span class="nt">"any_uneven_load"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/even-cluster-load"</span>
        <span class="p">},</span>
        <span class="nt">"broker_tasks"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/-/tasks"</span>
        <span class="p">}</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-balancer-any-uneven-load">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/balancer/any-uneven-load</span>`[¶](#get--clusters-cluster_id-balancer-any-uneven-load "Permalink to this definition")</dt>

<dd>

**Get AnyUnevenLoad status**

Returns status of the AnyUnevenLoad for the cluster specified by `<span class="pre">cluster_id</span>`.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/balancer/any-uneven-load</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The AnyUnevenLoad status

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaAnyUnevenLoad"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/any-uneven-load"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/any-uneven-load"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"status"</span><span class="p">:</span> <span class="s2">"BALANCING"</span><span class="p">,</span>
        <span class="nt">"previous_status"</span><span class="p">:</span> <span class="s2">"BALANCING_FAILED"</span><span class="p">,</span>
        <span class="nt">"status_updated_at"</span><span class="p">:</span> <span class="s2">"2019-10-12T07:20:50Z"</span><span class="p">,</span>
        <span class="nt">"previous_status_updated_at"</span><span class="p">:</span> <span class="s2">"2019-10-12T07:20:35Z"</span><span class="p">,</span>
        <span class="nt">"error_code"</span><span class="p">:</span> <span class="mi">10013</span><span class="p">,</span>
        <span class="nt">"error_message"</span><span class="p">:</span> <span class="s2">"The Confluent Balancer operation was overridden by a higher priority operation."</span><span class="p">,</span>
        <span class="nt">"broker_tasks"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/-/tasks"</span>
        <span class="p">}</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

*   [400 Bad Request](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.1) –

    Balancer offline

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">400</span> <span class="ne">Bad Request</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"error_code"</span><span class="p">:</span> <span class="mi">400</span><span class="p">,</span>
        <span class="nt">"message"</span><span class="p">:</span> <span class="s2">"The Confluent Balancer component is disabled or not started yet."</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

</div>

<div class="section" id="brokertask">

### BrokerTask[¶](#brokertask "Permalink to this headline")

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-brokers---tasks">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/brokers/-/tasks</span>`[¶](#get--clusters-cluster_id-brokers---tasks "Permalink to this definition")</dt>

<dd>

**List Broker Tasks**

Returns a list of all tasks for all brokers in the cluster specified with `<span class="pre">cluster_id</span>`.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/brokers/-/tasks</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of tasks.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBrokerTaskList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/-/tasks"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBrokerTask"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/1/tasks/add-broker"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/broker=1/task=add-broker"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster_id"</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"task_type"</span><span class="p">:</span> <span class="s2">"add-broker"</span><span class="p">,</span>
                <span class="nt">"task_status"</span><span class="p">:</span> <span class="s2">"SUCCESS"</span><span class="p">,</span>
                <span class="nt">"sub_task_statuses"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"partition_reassignment_status"</span><span class="p">:</span> <span class="s2">"COMPLETED"</span>
                <span class="p">},</span>
                <span class="nt">"created_at"</span><span class="p">:</span> <span class="s2">"2019-10-12T10:20:40Z"</span><span class="p">,</span>
                <span class="nt">"updated_at"</span><span class="p">:</span> <span class="s2">"2019-10-12T10:20:45Z"</span><span class="p">,</span>
                <span class="nt">"broker"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/1"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBrokerTask"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/2/tasks/remove-broker"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/broker=2/task=remove-broker"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster_id"</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span>
                <span class="nt">"task_type"</span><span class="p">:</span> <span class="s2">"remove-broker"</span><span class="p">,</span>
                <span class="nt">"task_status"</span><span class="p">:</span> <span class="s2">"FAILED"</span><span class="p">,</span>
                <span class="nt">"sub_task_statuses"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"partition_reassignment_status"</span><span class="p">:</span> <span class="s2">"ERROR"</span><span class="p">,</span>
                    <span class="nt">"broker_shutdown_status"</span><span class="p">:</span> <span class="s2">"CANCELED"</span>
                <span class="p">},</span>
                <span class="nt">"created_at"</span><span class="p">:</span> <span class="s2">"2019-10-12T07:20:50Z"</span><span class="p">,</span>
                <span class="nt">"updated_at"</span><span class="p">:</span> <span class="s2">"2019-10-12T07:20:55Z"</span><span class="p">,</span>
                <span class="nt">"error_code"</span><span class="p">:</span> <span class="mi">10006</span><span class="p">,</span>
                <span class="nt">"error_message"</span><span class="p">:</span> <span class="s2">"Error while computing the initial remove broker plan for brokers [2] prior to shutdown."</span><span class="p">,</span>
                <span class="nt">"broker"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/2"</span>
                <span class="p">}</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-brokers-broker_id-tasks">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/brokers/{broker_id}/tasks</span>`[¶](#get--clusters-cluster_id-brokers-broker_id-tasks "Permalink to this definition")</dt>

<dd>

**List Broker Tasks of a specific Broker**

Returns a list of all broker tasks for broker specified with `<span class="pre">broker_id</span>` in the cluster specified with `<span class="pre">cluster_id</span>`.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **broker_id** (_integer_) – The Kafka broker ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/brokers/{broker_id}/tasks</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of tasks.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBrokerTaskList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/-/tasks"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBrokerTask"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/1/tasks/add-broker"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/broker=1/task=add-broker"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster_id"</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"task_type"</span><span class="p">:</span> <span class="s2">"add-broker"</span><span class="p">,</span>
                <span class="nt">"task_status"</span><span class="p">:</span> <span class="s2">"IN_PROGRESS"</span><span class="p">,</span>
                <span class="nt">"sub_task_statuses"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"partition_reassignment_status"</span><span class="p">:</span> <span class="s2">"IN_PROGRESS"</span>
                <span class="p">},</span>
                <span class="nt">"created_at"</span><span class="p">:</span> <span class="s2">"2019-10-12T07:20:50Z"</span><span class="p">,</span>
                <span class="nt">"updated_at"</span><span class="p">:</span> <span class="s2">"2019-10-12T07:20:55Z"</span><span class="p">,</span>
                <span class="nt">"broker"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/1"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBrokerTask"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/1/tasks/remove-broker"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/broker=1/task=remove-broker"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster_id"</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"task_type"</span><span class="p">:</span> <span class="s2">"remove-broker"</span><span class="p">,</span>
                <span class="nt">"task_status"</span><span class="p">:</span> <span class="s2">"FAILED"</span><span class="p">,</span>
                <span class="nt">"sub_task_statuses"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"partition_reassignment_status"</span><span class="p">:</span> <span class="s2">"ERROR"</span><span class="p">,</span>
                    <span class="nt">"broker_shutdown_status"</span><span class="p">:</span> <span class="s2">"CANCELED"</span>
                <span class="p">},</span>
                <span class="nt">"created_at"</span><span class="p">:</span> <span class="s2">"2019-10-12T07:20:50Z"</span><span class="p">,</span>
                <span class="nt">"updated_at"</span><span class="p">:</span> <span class="s2">"2019-10-12T07:20:55Z"</span><span class="p">,</span>
                <span class="nt">"error_code"</span><span class="p">:</span> <span class="mi">10006</span><span class="p">,</span>
                <span class="nt">"error_message"</span><span class="p">:</span> <span class="s2">"Error while computing the initial remove broker plan for brokers [1] prior to shutdown."</span><span class="p">,</span>
                <span class="nt">"broker"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/1"</span>
                <span class="p">}</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-brokers---tasks-task_type">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/brokers/-/tasks/{task_type}</span>`[¶](#get--clusters-cluster_id-brokers---tasks-task_type "Permalink to this definition")</dt>

<dd>

**List Broker Tasks of a specific TaskType**

Returns a list of all broker tasks of specified `<span class="pre">task_type</span>` in the cluster specified with `<span class="pre">cluster_id</span>`.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **task_type** (_string_) – The Kafka broker task type.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/brokers/-/tasks/{task_type}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of tasks.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBrokerTaskList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/-/tasks"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBrokerTask"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/1/tasks/add-broker"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/broker=1/task=add-broker"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster_id"</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"task_type"</span><span class="p">:</span> <span class="s2">"add-broker"</span><span class="p">,</span>
                <span class="nt">"task_status"</span><span class="p">:</span> <span class="s2">"IN_PROGRESS"</span><span class="p">,</span>
                <span class="nt">"sub_task_statuses"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"partition_reassignment_status"</span><span class="p">:</span> <span class="s2">"IN_PROGRESS"</span>
                <span class="p">},</span>
                <span class="nt">"created_at"</span><span class="p">:</span> <span class="s2">"2019-10-12T07:20:50Z"</span><span class="p">,</span>
                <span class="nt">"updated_at"</span><span class="p">:</span> <span class="s2">"2019-10-12T07:20:55Z"</span><span class="p">,</span>
                <span class="nt">"broker"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/1"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBrokerTask"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/2/tasks/add-broker"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/broker=2/task=add-broker"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster_id"</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span>
                <span class="nt">"task_type"</span><span class="p">:</span> <span class="s2">"add-broker"</span><span class="p">,</span>
                <span class="nt">"task_status"</span><span class="p">:</span> <span class="s2">"FAILED"</span><span class="p">,</span>
                <span class="nt">"sub_task_statuses"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"partition_reassignment_status"</span><span class="p">:</span> <span class="s2">"ERROR"</span><span class="p">,</span>
                    <span class="nt">"broker_shutdown_status"</span><span class="p">:</span> <span class="s2">"CANCELED"</span>
                <span class="p">},</span>
                <span class="nt">"created_at"</span><span class="p">:</span> <span class="s2">"2019-10-12T07:20:50Z"</span><span class="p">,</span>
                <span class="nt">"updated_at"</span><span class="p">:</span> <span class="s2">"2019-10-12T07:20:55Z"</span><span class="p">,</span>
                <span class="nt">"error_code"</span><span class="p">:</span> <span class="mi">10006</span><span class="p">,</span>
                <span class="nt">"error_message"</span><span class="p">:</span> <span class="s2">"Error while computing the initial add broker plan for brokers [2]"</span><span class="p">,</span>
                <span class="nt">"broker"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/2"</span>
                <span class="p">}</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-brokers-broker_id-tasks-task_type">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/brokers/{broker_id}/tasks/{task_type}</span>`[¶](#get--clusters-cluster_id-brokers-broker_id-tasks-task_type "Permalink to this definition")</dt>

<dd>

**Get single Broker Task.**

Returns a single Broker Task specified with `<span class="pre">task_type</span>` for broker specified with `<span class="pre">broker_id</span>` in the cluster specified with `<span class="pre">cluster_id</span>`.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **broker_id** (_integer_) – The Kafka broker ID.
*   **task_type** (_string_) – The Kafka broker task type.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/brokers/{broker_id}/tasks/{task_type}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The broker task

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaBrokerTask"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/1/tasks/add-broker"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/broker=1/task=1"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="nt">"task_type"</span><span class="p">:</span> <span class="s2">"add-broker"</span><span class="p">,</span>
        <span class="nt">"task_status"</span><span class="p">:</span> <span class="s2">"FAILED"</span><span class="p">,</span>
        <span class="nt">"sub_task_statuses"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"partition_reassignment_status"</span><span class="p">:</span> <span class="s2">"ERROR"</span>
        <span class="p">},</span>
        <span class="nt">"created_at"</span><span class="p">:</span> <span class="s2">"2019-10-12T07:20:50Z"</span><span class="p">,</span>
        <span class="nt">"updated_at"</span><span class="p">:</span> <span class="s2">"2019-10-12T07:20:55Z"</span><span class="p">,</span>
        <span class="nt">"error_code"</span><span class="p">:</span> <span class="mi">10013</span><span class="p">,</span>
        <span class="nt">"error_message"</span><span class="p">:</span> <span class="s2">"The Confluent Balancer operation was overridden by a higher priority operation"</span><span class="p">,</span>
        <span class="nt">"broker"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/1"</span>
        <span class="p">}</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

</div>

<div class="section" id="removebrokertask">

### RemoveBrokerTask[¶](#removebrokertask "Permalink to this headline")

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-remove-broker-tasks">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/remove-broker-tasks</span>`[¶](#get--clusters-cluster_id-remove-broker-tasks "Permalink to this definition")</dt>

<dd>

**List Remove Broker Tasks**

Returns a list of remove-broker-tasks for the specified Kafka cluster. `<span class="pre">/remove-broker-tasks</span>` is deprecated and may be removed in a future release. Use the new `<span class="pre">/tasks</span>` API instead.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/remove-broker-tasks</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The list of remove broker tasks.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaRemoveBrokerTaskList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/remove-broker-tasks"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaRemoveBrokerTask"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/remove-broker-tasks/1"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/remove-broker-task=1"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
                <span class="nt">"partition_reassignment_status"</span><span class="p">:</span> <span class="s2">"FAILED"</span><span class="p">,</span>
                <span class="nt">"broker_shutdown_status"</span><span class="p">:</span> <span class="s2">"CANCELED"</span><span class="p">,</span>
                <span class="nt">"error_code"</span><span class="p">:</span> <span class="mi">10006</span><span class="p">,</span>
                <span class="nt">"error_message"</span><span class="p">:</span> <span class="s2">"Error while computing the initial remove broker plan for brokers [1] prior to shutdown."</span><span class="p">,</span>
                <span class="nt">"broker"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/1"</span>
                <span class="p">}</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaRemoveBrokerTask"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/remove-broker-tasks/2"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/remove-broker-task=2"</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
                <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span>
                <span class="nt">"partition_reassignment_status"</span><span class="p">:</span> <span class="s2">"FAILED"</span><span class="p">,</span>
                <span class="nt">"broker_shutdown_status"</span><span class="p">:</span> <span class="s2">"CANCELED"</span><span class="p">,</span>
                <span class="nt">"error_code"</span><span class="p">:</span> <span class="mi">10006</span><span class="p">,</span>
                <span class="nt">"error_message"</span><span class="p">:</span> <span class="s2">"Error while computing the initial remove broker plan for brokers [2] prior to shutdown."</span><span class="p">,</span>
                <span class="nt">"broker"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/2"</span>
                <span class="p">}</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-remove-broker-tasks-broker_id">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/remove-broker-tasks/{broker_id}</span>`[¶](#get--clusters-cluster_id-remove-broker-tasks-broker_id "Permalink to this definition")</dt>

<dd>

**Get Remove Broker Task**

Return the remove broker task for the specified `<span class="pre">broker_id</span>`.

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **broker_id** (_integer_) – The Kafka broker ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/remove-broker-tasks/{broker_id}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    The remove broker task.

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaRemoveBrokerTask"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/remove-broker-tasks/1"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="s2">"crn:///kafka=cluster-1/remove-broker-task=1"</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
        <span class="nt">"broker_id"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
        <span class="nt">"partition_reassignment_status"</span><span class="p">:</span> <span class="s2">"FAILED"</span><span class="p">,</span>
        <span class="nt">"broker_shutdown_status"</span><span class="p">:</span> <span class="s2">"CANCELED"</span><span class="p">,</span>
        <span class="nt">"error_code"</span><span class="p">:</span> <span class="mi">10006</span><span class="p">,</span>
        <span class="nt">"error_message"</span><span class="p">:</span> <span class="s2">"Error while computing the initial remove broker plan for brokers [1] prior to shutdown."</span><span class="p">,</span>
        <span class="nt">"broker"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"related"</span><span class="p">:</span> <span class="s2">"http://localhost:9391/kafka/v3/clusters/cluster-1/brokers/1"</span>
        <span class="p">}</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

</div>

<div class="section" id="clusterlinking">

### ClusterLinking[¶](#clusterlinking "Permalink to this headline")

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-links">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/links</span>`[¶](#get--clusters-cluster_id-links "Permalink to this definition")</dt>

<dd>

**List all cluster links in the dest cluster**

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/links</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    A list of link names and properties

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaLinkDataList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:63699/kafka/v3/clusters/Fds7TcT9TTqEXsoRLEKMcQ/links"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaLinkData"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:58441/kafka/v3/clusters/CIL-69l7S1CwoVNAhoQLug/links/my-new-link-1"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="kc">null</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"src-cluster-id"</span><span class="p">,</span>
                <span class="nt">"link_name"</span><span class="p">:</span> <span class="s2">"my-new-link-1"</span><span class="p">,</span>
                <span class="nt">"link_id"</span><span class="p">:</span> <span class="s2">"7840644d-f7d8-4844-a577-a10ef3df31df"</span><span class="p">,</span>
                <span class="nt">"topic_names"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="s2">"topic-sb-1"</span><span class="p">,</span>
                    <span class="s2">"topic-sb-2"</span>
                <span class="p">]</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaLinkData"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:58441/kafka/v3/clusters/CIL-69l7S1CwoVNAhoQLug/links/my-new-link-2"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="kc">null</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"src-cluster-id"</span><span class="p">,</span>
                <span class="nt">"link_name"</span><span class="p">:</span> <span class="s2">"my-new-link-2"</span><span class="p">,</span>
                <span class="nt">"link_id"</span><span class="p">:</span> <span class="s2">"abced-f7d8-4844-a577-abcdefghijklmnp"</span><span class="p">,</span>
                <span class="nt">"topic_names"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="s2">"topic-db-1"</span><span class="p">,</span>
                    <span class="s2">"topic-db-2"</span>
                <span class="p">]</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http post">

<dt class="sig sig-object http" id="post--clusters-cluster_id-links">`<span class="pre">POST</span>` `<span class="pre">/clusters/{cluster_id}/links</span>`[¶](#post--clusters-cluster_id-links "Permalink to this definition")</dt>

<dd>

**Create a cluster link**

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">POST</span> <span class="nn">/clusters/{cluster_id}/links</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
<span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

<span class="p">{</span>
    <span class="nt">"source_cluster_id"</span><span class="p">:</span> <span class="s2">"cluster-1"</span><span class="p">,</span>
    <span class="nt">"configs"</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">{</span>
            <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"acl.sync.enable"</span><span class="p">,</span>
            <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"false"</span>
        <span class="p">},</span>
        <span class="p">{</span>
            <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"consumer.offset.sync.ms"</span><span class="p">,</span>
            <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"30000"</span>
        <span class="p">}</span>
    <span class="p">]</span>
<span class="p">}</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [204 No Content](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.5) – Operation succeeded, no content in the response

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-links-link_name">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/links/{link_name}</span>`[¶](#get--clusters-cluster_id-links-link_name "Permalink to this definition")</dt>

<dd>

**Describe the cluster link**

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **link_name** (_string_) – The link name

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/links/{link_name}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    Single link name and properties

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaLinkData"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:63699/kafka/v3/clusters/Fds7TcT9TTqEXsoRLEKMcQ/links/my-new-link-1"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"src-cluster-id"</span><span class="p">,</span>
        <span class="nt">"link_name"</span><span class="p">:</span> <span class="s2">"my-new-link-1"</span><span class="p">,</span>
        <span class="nt">"link_id"</span><span class="p">:</span> <span class="s2">"7840644d-f7d8-4844-a577-a10ef3df31df"</span><span class="p">,</span>
        <span class="nt">"topic_names"</span><span class="p">:</span> <span class="p">[</span>
            <span class="s2">"topic-db-1"</span><span class="p">,</span>
            <span class="s2">"topic-db-2"</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http delete">

<dt class="sig sig-object http" id="delete--clusters-cluster_id-links-link_name">`<span class="pre">DELETE</span>` `<span class="pre">/clusters/{cluster_id}/links/{link_name}</span>`[¶](#delete--clusters-cluster_id-links-link_name "Permalink to this definition")</dt>

<dd>

**Delete the cluster link**

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **link_name** (_string_) – The link name

</td>

</tr>

<tr class="field-even field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) – Operation succeeded, no content in the response

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-links-link_name-configs">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/links/{link_name}/configs</span>`[¶](#get--clusters-cluster_id-links-link_name-configs "Permalink to this definition")</dt>

<dd>

**List all configs of the cluster link**

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **link_name** (_string_) – The link name

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/links/{link_name}/configs</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    Config name and value

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaLinkConfigDataList"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:56450/kafka/v3/clusters/v-0Ce-CkTyKQol9v46LaCQ/links/link-nb-1/configs"</span><span class="p">,</span>
            <span class="nt">"next"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaLinkConfigData"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:56608/kafka/v3/clusters/1Rh_4htxSuen7RYGvGmgNw/links/my-new-link-1"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="kc">null</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"1Rh_4htxSuen7RYGvGmgNw"</span><span class="p">,</span>
                <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"consumer.offset.sync.ms"</span><span class="p">,</span>
                <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"3825940"</span><span class="p">,</span>
                <span class="nt">"default"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"read_only"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"sensitive"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_CLUSTER_LINK_CONFIG"</span><span class="p">,</span>
                <span class="nt">"synonyms"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="s2">"cosm"</span>
                <span class="p">],</span>
                <span class="nt">"link_name"</span><span class="p">:</span> <span class="s2">"link-db-1"</span><span class="p">,</span>
                <span class="nt">"link_id"</span><span class="p">:</span> <span class="s2">"7840644d-f7d8-4844-a577-a10ef3df31df"</span>
            <span class="p">},</span>
            <span class="p">{</span>
                <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaLinkConfigData"</span><span class="p">,</span>
                <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
                    <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:56608/kafka/v3/clusters/1Rh_4htxSuen7RYGvGmgNw/links/my-new-link-1"</span><span class="p">,</span>
                    <span class="nt">"resource_name"</span><span class="p">:</span> <span class="kc">null</span>
                <span class="p">},</span>
                <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"1Rh_4htxSuen7RYGvGmgNw"</span><span class="p">,</span>
                <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"acl.sync.ms"</span><span class="p">,</span>
                <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"5000"</span><span class="p">,</span>
                <span class="nt">"default"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"read_only"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"sensitive"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
                <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_CLUSTER_LINK_CONFIG"</span><span class="p">,</span>
                <span class="nt">"synonyms"</span><span class="p">:</span> <span class="p">[</span>
                    <span class="s2">"asm"</span>
                <span class="p">],</span>
                <span class="nt">"link_name"</span><span class="p">:</span> <span class="s2">"link-db-1"</span><span class="p">,</span>
                <span class="nt">"link_id"</span><span class="p">:</span> <span class="s2">"7840644d-f7d8-4844-a577-a10ef3df31df"</span>
            <span class="p">}</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http get">

<dt class="sig sig-object http" id="get--clusters-cluster_id-links-link_name-configs-config_name">`<span class="pre">GET</span>` `<span class="pre">/clusters/{cluster_id}/links/{link_name}/configs/{config_name}</span>`[¶](#get--clusters-cluster_id-links-link_name-configs-config_name "Permalink to this definition")</dt>

<dd>

**Describe the config under the cluster link**

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **link_name** (_string_) – The link name
*   **config_name** (_string_) – The link config name

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">GET</span> <span class="nn">/clusters/{cluster_id}/links/{link_name}/configs/{config_name}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [200 OK](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.1) –

    Config name and value

    **Example response:**

    <div class="highlight-http notranslate">

    <div class="highlight">

    <pre><span></span><span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span> <span class="m">200</span> <span class="ne">OK</span>
    <span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

    <span class="p">{</span>
        <span class="nt">"kind"</span><span class="p">:</span> <span class="s2">"KafkaLinkConfigData"</span><span class="p">,</span>
        <span class="nt">"metadata"</span><span class="p">:</span> <span class="p">{</span>
            <span class="nt">"self"</span><span class="p">:</span> <span class="s2">"http://localhost:56608/kafka/v3/clusters/1Rh_4htxSuen7RYGvGmgNw/links/my-new-link-1"</span><span class="p">,</span>
            <span class="nt">"resource_name"</span><span class="p">:</span> <span class="kc">null</span>
        <span class="p">},</span>
        <span class="nt">"cluster_id"</span><span class="p">:</span> <span class="s2">"1Rh_4htxSuen7RYGvGmgNw"</span><span class="p">,</span>
        <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"consumer.offset.sync.ms"</span><span class="p">,</span>
        <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"3825940"</span><span class="p">,</span>
        <span class="nt">"default"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="nt">"read_only"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="nt">"sensitive"</span><span class="p">:</span> <span class="kc">false</span><span class="p">,</span>
        <span class="nt">"source"</span><span class="p">:</span> <span class="s2">"DYNAMIC_CLUSTER_LINK_CONFIG"</span><span class="p">,</span>
        <span class="nt">"synonyms"</span><span class="p">:</span> <span class="p">[</span>
            <span class="s2">"cosm"</span>
        <span class="p">],</span>
        <span class="nt">"link_name"</span><span class="p">:</span> <span class="s2">"link-db-1"</span><span class="p">,</span>
        <span class="nt">"link_id"</span><span class="p">:</span> <span class="s2">"7840644d-f7d8-4844-a577-a10ef3df31df"</span><span class="p">,</span>
        <span class="nt">"topics"</span><span class="p">:</span> <span class="p">[</span>
            <span class="s2">"topic-db-1"</span><span class="p">,</span>
            <span class="s2">"topic-db-2"</span>
        <span class="p">]</span>
    <span class="p">}</span>
    </pre>

    <div class="copy-code-button"><span>Copy</span></div>

    </div>

    </div>

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http put">

<dt class="sig sig-object http" id="put--clusters-cluster_id-links-link_name-configs-config_name">`<span class="pre">PUT</span>` `<span class="pre">/clusters/{cluster_id}/links/{link_name}/configs/{config_name}</span>`[¶](#put--clusters-cluster_id-links-link_name-configs-config_name "Permalink to this definition")</dt>

<dd>

**Alter the config under the cluster link**

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **link_name** (_string_) – The link name
*   **config_name** (_string_) – The link config name

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">PUT</span> <span class="nn">/clusters/{cluster_id}/links/{link_name}/configs/{config_name}</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
<span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

<span class="p">{</span>
    <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"300000"</span>
<span class="p">}</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [204 No Content](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.5) – Operation succeeded, no content in the response

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http delete">

<dt class="sig sig-object http" id="delete--clusters-cluster_id-links-link_name-configs-config_name">`<span class="pre">DELETE</span>` `<span class="pre">/clusters/{cluster_id}/links/{link_name}/configs/{config_name}</span>`[¶](#delete--clusters-cluster_id-links-link_name-configs-config_name "Permalink to this definition")</dt>

<dd>

**Reset the given config to default value**

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **link_name** (_string_) – The link name
*   **config_name** (_string_) – The link config name

</td>

</tr>

<tr class="field-even field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [204 No Content](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.5) – Operation succeeded, no content in the response

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

<dl class="http post">

<dt class="sig sig-object http" id="post--clusters-cluster_id-links-link_name-configs-alter">`<span class="pre">POST</span>` `<span class="pre">/clusters/{cluster_id}/links/{link_name}/configs:alter</span>`[¶](#post--clusters-cluster_id-links-link_name-configs-alter "Permalink to this definition")</dt>

<dd>

**Batch Alter Topic Configs**

Batch Alter Link Configs

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Parameters:</th>

<td class="field-body">

*   **cluster_id** (_string_) – The Kafka cluster ID.
*   **link_name** (_string_) – The link name

</td>

</tr>

</tbody>

</table>

**Example request:**

<div class="highlight-http notranslate">

<div class="highlight">

<pre><span></span><span class="nf">POST</span> <span class="nn">/clusters/{cluster_id}/links/{link_name}/configs:alter</span> <span class="kr">HTTP</span><span class="o">/</span><span class="m">1.1</span>
<span class="na">Host</span><span class="o">:</span> <span class="l">example.com</span>
<span class="na">Content-Type</span><span class="o">:</span> <span class="l">application/json</span>

<span class="p">{</span>
    <span class="nt">"data"</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">{</span>
            <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"cleanup.policy"</span><span class="p">,</span>
            <span class="nt">"operation"</span><span class="p">:</span> <span class="s2">"DELETE"</span>
        <span class="p">},</span>
        <span class="p">{</span>
            <span class="nt">"name"</span><span class="p">:</span> <span class="s2">"compression.type"</span><span class="p">,</span>
            <span class="nt">"value"</span><span class="p">:</span> <span class="s2">"gzip"</span>
        <span class="p">}</span>
    <span class="p">]</span>
<span class="p">}</span>
</pre>

<div class="copy-code-button"><span>Copy</span></div>

</div>

</div>

<table class="docutils field-list" frame="void" rules="none"><colgroup><col class="field-name"> <col class="field-body"></colgroup>

<tbody valign="top">

<tr class="field-odd field">

<th class="field-name">Status Codes:</th>

<td class="field-body">

*   [204 No Content](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.2.5) – No Content

</td>

</tr>

</tbody>

</table>

</dd>

</dl>

</div>

</div>