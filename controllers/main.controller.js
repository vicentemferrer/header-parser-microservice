import { resolve } from 'node:path'

import { urlSeparator } from '../utilities/separator.util.js'

const { dirname } = import.meta

async function buildHome(req, res) {
    const separator = urlSeparator();
    const _dirname = dirname.split(separator).filter((_, i, arr) => i !== arr.length - 1).join(separator)

    return res.sendFile(resolve(`${_dirname}/views/index.html`))
}

export { buildHome }