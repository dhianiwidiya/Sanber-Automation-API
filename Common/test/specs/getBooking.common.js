//ini adalah contoh api automation with common js
const request = require("supertest");
const {expect} = require("chai");

const baseUrl = "https://restful-booker.herokuapp.com";

//Describe the test suit
describe("Get All Booking" ,() => {
    it ('Possitive - success get All Booking' , () => {
        const response = request(baseUrl) //baseUrl
        .get("/booking") //endpoint

    //Assertion using Chai
    expect(response.status).to.equal(200)
    })
})