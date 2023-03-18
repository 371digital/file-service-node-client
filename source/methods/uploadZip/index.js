import { endPoints } from "_constants";
import { prepareResponse } from "utils";
import FormData from "form-data";
import fs from "fs";
import axios from "axios";

const uploadZip = async (filePath, accessToken) => {
    const form = new FormData();
    form.append('zip', fs.createReadStream(filePath));

    return await axios.post(endPoints.uploadZip, form, {
        headers: {
            "x-access-token": accessToken
        }
    }).then(prepareResponse);
};

export default uploadZip;