import { createStorage as create, CreateStorageParams } from './storageCache';
import { getEnv } from '@/../build/utils';
export type Options = Partial<CreateStorageParams>;
const createOptions = (storage: Storage, options: Options = {}): Options => {
	return {
		// No encryption in debug mode
		hasEncrypt: !import.meta.env.DEV,
		storage,
		prefixKey: `${import.meta.env.VITE_DEFAULT_CACHE_KEY}_${getEnv()}_`.toUpperCase(),
		...options,
	};
};
export const WebStorage = create(createOptions(sessionStorage));
export const createStorage = (storage: Storage = sessionStorage, options: Options = {}) => {
	return create(createOptions(storage, options));
};
export const createSessionStorage = (options: Options = {}) => {
	return createStorage(sessionStorage, { ...options, timeout: import.meta.env.VITE_DEFAULT_CACHE_TIME });
};
export const createLocalStorage = (options: Options = {}) => {
	return createStorage(localStorage, { ...options, timeout: import.meta.env.VITE_DEFAULT_CACHE_TIME });
};
export default WebStorage;
