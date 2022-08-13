import CryptoJS from "crypto-js";
import "dotenv/config";

const secret = String(process.env.SECRET);

export const crypto = {
	encrypt: (message: string) => {
		return CryptoJS.AES.encrypt(message, secret).toString();
	},
	decrypt: (message: string) => {
		return CryptoJS.AES.decrypt(message, secret).toString(CryptoJS.enc.Utf8);
	},
};
