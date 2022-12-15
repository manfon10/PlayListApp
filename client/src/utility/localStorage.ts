import { EncryptStorage } from "storage-encryption";

export const localStorage = new EncryptStorage(
  `${import.meta.env.STORAGE_KEY}`
);
