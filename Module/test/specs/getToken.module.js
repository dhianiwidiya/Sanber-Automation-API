import request from "supertest";
import { expect } from "chai";
import { createToken } from "../function/createToken.spec.js";

const baseUrl = "https://restful-booker.herokuapp.com";

describe("Get Token Scenario", () => {
    let token;
    it("Possitive - Success Get Token",async() =>{
        const payload = {
                "username" : "admin",
                "password" : "password123"
            }
        //send request
        const response = await request(baseUrl)
            .post("/auth")
            .send(payload) //request body
            .set("Content-Type", "application/json") //header
        console.log(response)
        
        expect((await response).status).to.equal(200)
        //console.log(await response)
        token = (await response).body.token
        console.log(await token)
        } )

    it ("Positive - Success Implement Token", async() => {
        const response = await request(baseUrl)
        console.log(await token)
        //Put method
            //.put("/booking",+bookingId)
           // .send(payload)
            //.set("Cookie", token)
    })
    it ("Import token", async() =>{
        const token = await createToken()
        console.log(await token)
    })
    //it get token
    //it create
    //it get
    //it delete
})
