const config = {
  cognito_pool_id: "us-east-1_uv8S7qc1o",
  cognito_backend_client_id: "39pdec5kiutd60jaftlirlgsg7",
  cognito_backend_access_key: "stockMonitoring/me/backend",
  appsync_endpoint_url:
    "https://ur3ccj4lzbea7lvng3catocnxu.appsync-api.us-east-1.amazonaws.com/graphql",
  appsync_region: "us-east-1",
  data_feed_key: "stockMonitoring/me/datafeed",
  feed_interval: "30min",
};

module.exports = config;
