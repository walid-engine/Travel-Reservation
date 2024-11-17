import ReservationModel from "../models/reservation_model.js"

export async function getAllReservations(){
    return await ReservationModel.find();
}

export async function getReservationById(id){
    return await ReservationModel.findById(id);
}

export async function addReservation(reservation){
    return await ReservationModel.create(reservation);
}

export async function updateReservation(id, data){
    return await ReservationModel.findByIdAndUpdate(id, data, {new: true});
}

export async function deleteReservation(id){
    return await ReservationModel.findByIdAndDelete(id);
}