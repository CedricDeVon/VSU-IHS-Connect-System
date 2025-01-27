import { Validator } from "./validator";
import { Result } from "../results/result";
import { FailedResult } from "../results/failedResult";
import { SuccessfulResult } from "../results/successfulResult";

export class PastDateValidator extends Validator {
    public constructor() {
        super();
    }

    public async validate(value: string | number | Date): Promise<Result> {
        if (value === undefined || value === null) {
            return new FailedResult(`Arguments must neither be undefined nor null`);
        }

        return (new Date(value) < new Date()) ? new SuccessfulResult() : new FailedResult('Date is not within the past');
    }
}
