import { baseUrl } from './api';

const uri = '/leads';
const service = { name: 'site.psiccamilamelissa' };

const fetchData = async (url, options) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`Erro: ${response.statusText}`);
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

const sendEmail = (body) => {
    body.service = service;

    return fetchData(`${baseUrl}${uri}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
};

export default sendEmail;