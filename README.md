## AWS RDS Data Service Wrapper

A simple wrapper for AWS javascript SDK RDSDataService for aurora serverless experimentation/testing convenience.

Defaults to latest API version. Does not include batchExecuteStatement method or parameters.

## Usage

1. Create `.env` file in your project root with the following variables:

```
RDS_REGION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

2. Clone project & `npm run build`

3. Import into project & instantiate with resourceArn & secretArn.

```ts
import RDSDataApi from "<path to cloned repo>/build/";

const dataServiceClient = new RDSDataServiceClient("resourceArn", "secretArn");

const transactionId = await dataServiceClient.beginTransaction("testdb");
const res = await dataServiceClient.executeStatement(`UPDATE kitters SET vibes = 'luxury' WHERE type = 'Siamese'`, { transactionId, database: "testdb" });
const transactionStatus = await dataServiceClient.commitTransaction(transactionId);
...
```