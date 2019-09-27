## AWS RDS Data Service Wrapper

A simple wrapper for the AWS javascript SDK's AWS.RDSDataService for experimentation/testing convenience.

Does not include batchExecuteStatement method or parameters.

## Usage

1. Create `.env` file in project root you wish to import to with the following variables:

```
RDS_REGION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

2. Clone project & `npm run build`

3. Import into project & instantiate with resourceArn & secretArn.

```
import RDSDataApi from "<path to cloned repo>/build/";

const rdsDataApi = new RDSDataApi("resourceArn", "secretArn");

const transactionId = await rdsDataApi.beginTransaction("testdb");
const res = await rdsDataApi.executeStatement(`SELECT * FROM test`, { transactionId, database: "testdb" });
const transactionStatus = await rdsDataApi.commitTransaction(transactionId);
...
```

