import * as AWS from "aws-sdk";

export class RDSDataAPI {
    public RDSDataService: AWS.RDSDataService;
    private resourceArn: string;
    private secretArn: string;
    constructor(accessKeyId: string, secretAccessKey: string, region: string, resourceArn: string, secretArn: string) {
        this.RDSDataService = new AWS.RDSDataService({
            accessKeyId,
            secretAccessKey,
            region,
            apiVersion: "latest",
        });
        this.resourceArn = resourceArn;
        this.secretArn = secretArn;
    }

    

}