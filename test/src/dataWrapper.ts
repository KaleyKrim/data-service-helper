import * as ava from "ava";
import RDSDataServiceClient from "../../build";

ava.serial("successfully calls the rds data api", async t => {
    const database = "test";
    const rdsDataApi = new RDSDataServiceClient();
});