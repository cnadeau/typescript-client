const weaviate = require("weaviate-ts-client")

const client = weaviate.client({
  scheme: "http",
  host: "localhost:8080",
});

client.misc.metaGetter()
  .do()
  .then((res) => console.log(`res: ${JSON.stringify(res)}`))