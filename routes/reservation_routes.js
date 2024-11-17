import * as reservationRoute from '../controllers/reservation_controller.js'

import express from 'express'

const router = express.Router()

router.route("/").get(reservationRoute.getAllReservations)
                 .post(reservationRoute.addReservation)

router.route("/:id").get(reservationRoute.getReservationById)
                .delete(reservationRoute.deleteReservation)
                .patch(reservationRoute.updateReservation)

export default router;