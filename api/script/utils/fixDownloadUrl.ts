/**
 * If downloadURL always starts with "http://127.0.0.1:10000/",
 * replace the prefix with the value of process.env.AZURITE_STORAGE_URL_PREFIX.
 */
export function fixDownloadUrl(originalUrl: string): string {
  const replacementBase = process.env.AZURITE_STORAGE_URL_PREFIX;
  if (!replacementBase) {
    return originalUrl;
  }

  const prefix = "http://127.0.0.1:10000/";
  if (originalUrl.startsWith(prefix)) {
    // 끝에 / 중복 방지
    const cleanBase = replacementBase.replace(/\/$/, "");
    return `${cleanBase}/${originalUrl.slice(prefix.length)}`;
  }

  return originalUrl;
}
