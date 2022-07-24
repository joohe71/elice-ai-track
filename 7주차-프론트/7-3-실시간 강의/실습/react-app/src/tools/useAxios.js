import axios from 'axios';

const appId = '' || process.env.REACT_APP_AIRTABLE_APP_ID;
const tableName = '' || process.env.REACT_APP_AIRTABLE_TABLE_NAME;
const apiKey = '' || process.env.REACT_APP_AIRTABLE_KEY;

export default {
    setup: () => {
        axios.defaults.baseURL = `https://api.airtable.com/v0/${appId}/${tableName}`;
        axios.interceptors.request.use(async (config) => {
            if (!config.headers["Authorization"]) {
                config.headers["Authorization"] = `Bearer ${apiKey}`;
            }
            config.headers["Content-Type"] = "application/json";

            return config;
        });
    }
};