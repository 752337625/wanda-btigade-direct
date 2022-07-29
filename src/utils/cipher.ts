import { encrypt, decrypt } from 'crypto-js/aes';
import { parse } from 'crypto-js/enc-utf8';
import md5 from 'crypto-js/md5';
import UTF8 from 'crypto-js/enc-utf8';
import Base64 from 'crypto-js/enc-base64';
export interface EncryptionParams {
	key: string;
	iv: string;
}
type WordArray = CryptoJS.lib.WordArray;
export class AesEncryption {
	private key!: WordArray;
	private iv!: WordArray;
	constructor(opt: Partial<EncryptionParams> = {}) {
		const { key, iv } = opt;
		if (key) this.key = parse(key);
		if (iv) this.iv = parse(iv);
	}
	get getOptions() {
		return {
			iv: this.iv,
		};
	}
	encryptByAES(word: string) {
		return encrypt(word, this.key, this.getOptions).toString();
	}
	decryptByAES(word: string) {
		return decrypt(word, this.key, this.getOptions).toString(UTF8);
	}
}
export function encryptByBase64(cipherText: string) {
	return UTF8.parse(cipherText).toString(Base64);
}

export function decodeByBase64(cipherText: string) {
	return Base64.parse(cipherText).toString(UTF8);
}

export function encryptByMd5(password: string) {
	return md5(password).toString();
}
