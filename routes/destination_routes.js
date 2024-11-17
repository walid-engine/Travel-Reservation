import * as destinationRoute from '../controllers/destination_controller.js'

import express from 'express'

const router = express.Router()

router.route("/").get(destinationRoute.getAllDestinations)
                 .post(destinationRoute.addDestination)

router.route("/:id").get(destinationRoute.getDestinationById)
                .delete(destinationRoute.deleteDestinations)
                .patch(destinationRoute.updateDestinations)

export default router;