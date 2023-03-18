export const serviceUrl = "https://file-service.371digital.com";

export const endPoints = {
    "downloadFile": (fileId) => `${serviceUrl}/download/${fileId}`,
    "uploadZip": `${serviceUrl}/uploadZip`,
    "getFileConfiguration": (fileId) => `${serviceUrl}/getFileConfiguration?id=${fileId}`
};