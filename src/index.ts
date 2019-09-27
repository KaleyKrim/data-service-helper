import * as AWS from "aws-sdk";

export class RDSDataAPI {
    public RDSDataService: AWS.RDSDataService;
    public baseParams: { resourceArn: string; secretArn: string };
    constructor(accessKeyId: string, secretAccessKey: string, region: string, resourceArn: string, secretArn: string) {
        this.RDSDataService = new AWS.RDSDataService({
            accessKeyId,
            secretAccessKey,
            region,
            apiVersion: "latest",
        });
        this.baseParams =  {
            resourceArn,
            secretArn,
        };
    }

    public async beginTransaction(dbName: string): Promise<string> {
        return (await this.RDSDataService.beginTransaction({ ...this.baseParams, database: dbName }).promise()).transactionId;
    }

    public async commitTransaction() {
        
    }

    public async rollBack() {

    }

    public async executeStatement() {

    }
}