## AWS RDS Data Service Wrapper

A simple wrapper for AWS javascript SDK RDSDataService for aurora serverless experimentation/testing convenience.

Defaults to latest API version. Does not include batchExecuteStatement method or parameters.

## Usage

1. Create `.env` file in project root you wish to import to with the following variables:

```
RDS_REGION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

2. Clone project & `npm run build`

3. Import into project & instantiate with resourceArn & secretArn.

```ts
import RDSDataApi from "<path to cloned repo>/build/";

const rdsDataApi = new RDSDataApi("resourceArn", "secretArn");

const transactionId = await rdsDataApi.beginTransaction("testdb");
const res = await rdsDataApi.executeStatement(`UPDATE kitters SET vibes = 'luxury' WHERE type = 'Siamese'`, { transactionId, database: "testdb" });
const transactionStatus = await rdsDataApi.commitTransaction(transactionId);
...
```