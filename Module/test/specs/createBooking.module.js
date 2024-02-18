import request from "supertest";
import { expect } from "chai";

const baseUrl = "https://restful-booker.herokuapp.com";

describe("Create booking scenario", () => {
    it("Possitive - Success Create Booking", async()=>{
        const payload = {
                "firstname" : "Jim",
                "lastname" : "Brown",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Breakfast"
        }
        //send request
        const response = await request(baseUrl)
            .post("/booking")
            .send(payload) //request body
            .set("Content-Type", "application/json") //header
        console.log(response)
        
        expect((await response).status).to.equal(418)
        console.log(await response)
        } )
})
