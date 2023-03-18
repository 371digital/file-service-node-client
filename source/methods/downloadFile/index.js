import { endPoints } from "_constants";
import https from "https";
import path from "path";
import fs from "fs";
import getFileConfiguration from "../getFileConfiguration";

const downloadFile = async (fileId, directoryPath) => {
  return await new Promise(async (resolve, reject) => {
    const fileConfiguration = await getFileConfiguration(fileId);
    if (!fileConfiguration.status) reject(fileConfiguration);

    const file = fs.createWriteStream(path.join(directoryPath, fileConfiguration.data.name));

    https.get(endPoints.downloadFile(fileId), (response) => {
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        resolve(fileConfiguration)
      });

    }).on('error', (error) => {
      reject(error.message)
    });
  })
};

export default downloadFile;