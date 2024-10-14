class RequestHeaders {
    constructor({ ip, headers }) {
        this.ipaddress = ip
        this.language = headers['accept-language']
        this.software = headers['user-agent']
    }
}

export default RequestHeaders