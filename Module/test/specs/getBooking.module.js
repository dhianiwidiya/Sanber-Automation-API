//ini adalah contoh api automation with Es Module Js
import request from "supertest";
import { expect } from "chai";
import { getBooking } from "../function/getBooking.spec.js";

const baseUrl = "https://restful-booker.herokuapp.com";
const paramFirstName = "sally"
const paramLastName = "brown"

//Describe the test suit
describe("Get All Booking" ,() => {
    it ('Positive - success get All Booking' ,async () => {
        const response = await request(baseUrl) //baseUrl
        .get("/booking") //endpoint

    //Assertion using Chai
    expect((await response).status).to.equal(200)
    //expect((await response).body[0]).to.include('bookingid')
    console.log((await response).body)
    })

    it ('Positive - success get All Booking with param' ,async () => {
        let response = await request(baseUrl) //baseUrl
            .get("/booking"+"?firstname=$(paramFirstName)&lastname=$(paramLastName)") //endpoint with query params
    
        //Assertion using Chai
        expect((await response).status).to.equal(200)
        console.log((await response).body)
    })
    it('Positive - success get booking id', async() => {
        let response = await request(baseUrl) //baseUrl
            .get('/booking/${bookingId}') //endpoint with id path
        //Assertion using Chai
        expect((await response).status).to.equal(200)
        console.log((await response).body)
    })
})

describe("Get Booking Scenario by Functions", () => {
    it("Success get booking all", async()=>{
        const response = await getBooking.all();

        expect((await response).status).to.equal(200)
        console.log((await response).body)
    })
})
