import validator from 'validator';

import { Validator } from "./validator";
import { Result } from "../results/result";
import { FailedResult } from '../results/failedResult';
import { SuccessfulResult } from "../results/successfulResult";

export class JSONValidator extends Validator {
  public validate(value: any): Result {
    return (validator.isJSON(value)) ?
      new SuccessfulResult(value) :
      new FailedResult(`'${value}' is not a valid JSON string`);
  }
}