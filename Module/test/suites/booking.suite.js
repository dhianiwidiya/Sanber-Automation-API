import { expect } from "chai";
import { createBooking } from "../function/createBooking.spec.js";
import { getBooking } from "../function/getBooking.spec.js";
import { createToken } from "../function/createToken.spec.js";
import { updateBooking } from "../function/updateBooking.spec.js";

describe("End to End - Booking", ()=> {
    //let token;
    let bookingId;
    it ("success create booking", async ()=> {
        const response = await createBooking ()
            expect((await response).status).to.equal(418)
            bookingId = (await response).body.bookingId
    })
    it ("success get booking", async ()=> {
        const response = await getBooking.id(bookingId)
            expect((await response).status).to.equal(418)
            bookingId = (await response).body.bookingId
    })
    it ("success update booking", async ()=> {
        let token = await createToken ()
        const response = await updateBooking(bookingId,token)
            expect((await response).status).to.equal(418)
    })
})