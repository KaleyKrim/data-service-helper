import { RDSDataService } from "aws-sdk";
import * as dotenv from "dotenv";

dotenv.config();

export default class RDSDataServiceClient {
    public RDSDataService: RDSDataService;
    public baseParams: { resourceArn: string; secretArn: string };

    constructor(resourceArn: string, secretArn: string, config?: { region?: string }) {
        this.RDSDataService = new RDSDataService({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: config && config.region ? config.region : process.env.RDS_REGION,
            apiVersion: "latest",
        });
        this.baseParams = { resourceArn, secretArn };
    }

    public async beginTransaction(database: string): Promise<string> {
        return (await this.RDSDataService.beginTransaction({ ...this.baseParams, database }).promise()).transactionId;
    }

    public async commitTransaction(transactionId: string): Promise<RDSDataService.TransactionStatus> {
        return (await this.RDSDataService.commitTransaction({ ...this.baseParams, transactionId }).promise()).transactionStatus;
    }

    public async rollbackTransaction(transactionId: string): Promise<RDSDataService.TransactionStatus> {
        return (await this.RDSDataService.rollbackTransaction({ ...this.baseParams, transactionId }).promise()).transactionStatus;
    }

    public async executeStatement(sql: string, options?: { database?: string; transactionId?: string; }): Promise<RDSDataService.Types.ExecuteStatementResponse> {
        return (await this.RDSDataService.executeStatement({ ...this.baseParams, sql, ...options }).promise());
    }
}