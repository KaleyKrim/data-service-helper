import { RDSDataService } from "aws-sdk";

export class RDSDataAPI {
    public RDSDataService: RDSDataService;
    public baseParams: { resourceArn: string; secretArn: string };
    constructor(accessKeyId: string, secretAccessKey: string, region: string, resourceArn: string, secretArn: string) {
        this.RDSDataService = new RDSDataService({
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