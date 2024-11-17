import * as voyageurRoute from '../controllers/voyageur_controller.js'

import express from 'express'

const router = express.Router()

router.route("/").get(voyageurRoute.getAllVoyageurs)
                 .post(voyageurRoute.addVoyageur)

router.route("/:id").get(voyageurRoute.getVoyageurById)
                .delete(voyageurRoute.deleteVoyageur)
                .patch(voyageurRoute.updateVoyageur)

export default router;