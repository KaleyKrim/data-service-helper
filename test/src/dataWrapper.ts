import * as ava from "ava";
import RDSDataApi from "../../build";

ava.serial("successfully calls the rds data api", async t => {
    const database = "test";
    const rdsDataApi = new RDSDataApi("aaa", "sss");
    // const transactionId = await rdsDataApi.beginTransaction(database);
    // const insert = await rdsDataApi.executeStatement("", { transactionId, database });
    // const commitTransaction = await rdsDataApi.commitTransaction(transactionId);
});