## AWS RDS Data Service Wrapper

A simple wrapper for AWS javascript SDK RDSDataService. For Aurora serverless experimentation/testing convenience.

Defaults to latest API version. Does not include batchExecuteStatement method or parameters.

## Usage

1. If no `.env` file is provided in project root, RDS Region, Resource ARN and Secret ARN can be supplied as constructor arguments. (Note: Regardless, constructor arguments will always override environment variables, if supplied.)

Sample `.env`:
```
RDS_REGION=
RESOURCE_ARN=
SECRET_ARN=
```

2. Clone project, `npm run build` & import. Instantiate with or without config (region, resourceArn & secretArn.)

```ts
import RDSDataApi from "<path to cloned repo>/build/";

const dataServiceClient = new RDSDataServiceClient(config: { region: "www", resourceArn: "www", secretArn: "www" });

const transactionId = await dataServiceClient.beginTransaction("testdb");
const res = await dataServiceClient.executeStatement(`UPDATE kitters SET vibes = 'luxury' WHERE type = 'Siamese'`, { transactionId, database: "testdb" });
const transactionStatus = await dataServiceClient.commitTransaction(transactionId);
...
```