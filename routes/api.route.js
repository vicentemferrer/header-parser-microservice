import { Router } from "express"

import { getRequestHeaders } from "../controllers/api.controller.js"

const router = new Router()

router.get('/hello', (req, res) => {
    res.json({ greeting: 'Hello API user!' })
})

router.get('/whoami', getRequestHeaders)

export default router