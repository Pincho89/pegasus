import axios from "axios";

const dataDB = axios.create({
    baseURL:'https://pegasus.azure-api.net/v1',
});

export default dataDB;