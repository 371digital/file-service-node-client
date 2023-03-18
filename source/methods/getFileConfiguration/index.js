import axios from "axios";
import { endPoints } from "_constants";
import { prepareResponse } from "utils";

const getFileConfiguration = async (fileId) => {
  return await axios.get(endPoints.getFileConfiguration(fileId)).then(prepareResponse)
};

export default getFileConfiguration;