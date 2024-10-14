import { Router, static as static_ } from "express"

import { urlSeparator } from '../utilities/separator.util.js'

const { dirname } = import.meta

const router = new Router()

const separator = urlSeparator()

router.use(static_('public'))

router.get('/css', static_(`${dirname}${separator}public${separator}css`))
router.get('/js', static_(`${dirname}${separator}public${separator}js`))

export default router
