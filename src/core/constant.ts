export const constants = {
  appName: "CopyTranslator",
  nickName: "寒渐",
  version: "9.1.0",
  stage: "",
  wiki: "https://copytranslator.github.io/guide",
  homepage: "https://copytranslator.github.io",
  downloadPage: "https://copytranslator.github.io/download/"
};
export const versionString = [
  "v" + constants.version,
  constants.nickName,
  constants.stage
].join(" ");

export const version = constants.version;

export function compatible(configVersion: string): boolean {
  try {
    const configInfos = configVersion.substring(1).split(".");
    const currentInfos = version.substring(1).split(".");
    for (const i of [0, 1]) {
      if (currentInfos[i] !== configInfos[i]) {
        return false;
      }
    }
    return true;
  } catch (e) {
    return false;
  }
}
