import RequestHeaders from "../models/RequestHeaders.class.js"

async function getRequestHeaders(req, res) {
    return res.json(new RequestHeaders(req))
}

export { getRequestHeaders }