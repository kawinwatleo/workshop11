"use client"

import { useAppSelector } from "@/redux/store"


export default function ReservationCart(){

    const carItems = useAppSelector((state) =>state.cartSlice.carItems)
    return (
        <>
        
        {
            carItems.map((reservationItem)=>{
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                key={reservationItem.carId}>
                    <div className="text-xl">
                        {reservationItem.carModel}
                    </div>
                    <div className="text-xl">
                        Pick-up {reservationItem.pickupDate}
                    </div>
                    <div className="text-xl">
                        from {reservationItem.pickupLocation}
                    </div>
                    <div className="text-xl">
                        to {reservationItem.returnLocation}
                    </div>
                    <div className="text-xl">
                        Duration: {reservationItem.numOfDays}
                    </div>
                </div>
            })
        }
        </>
    )
}