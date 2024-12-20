import { gcm } from "@noble/ciphers/aes";
import { bytesToHex, bytesToUtf8, hexToBytes, utf8ToBytes } from "@noble/ciphers/utils";

import { Result } from "../results/result";
import { SuccessfulResult } from "../results/successfulResult";
import { FailedResult } from "../results/failedResult";
import { CipherCryptographyLayer } from "./cipherCryptographyLayer";
import { ConfigurationReaders } from "../configurationReaders/configurationReaders";

export class AesCipherCryptographyLayer extends CipherCryptographyLayer {
  public async wrap(plainText: string): Promise<Result> {
    try {
      const configurations = gcm(
        utf8ToBytes(ConfigurationReaders.nuxtConfigurationReader.CRYPTOGRAPHY_KEY),
        utf8ToBytes(ConfigurationReaders.nuxtConfigurationReader.CRYPTOGRAPHY_NONCE)
      );
      return new SuccessfulResult(bytesToHex(configurations.encrypt(utf8ToBytes(plainText))));
    } catch (error: any) {
      return new FailedResult(error);
    }
  }

  public async unwrap(cipherText: string): Promise<Result> {
    try {
      const configurations = gcm(
        utf8ToBytes(ConfigurationReaders.nuxtConfigurationReader.CRYPTOGRAPHY_KEY),
        utf8ToBytes(ConfigurationReaders.nuxtConfigurationReader.CRYPTOGRAPHY_NONCE)
      );
      return new SuccessfulResult(bytesToUtf8(configurations.decrypt(hexToBytes(cipherText))));
    } catch (error: any) {
      return new FailedResult(error);
    }
  }
}
