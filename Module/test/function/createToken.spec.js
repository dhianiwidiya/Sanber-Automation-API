import request from "supertest";
import { baseUrl }  from "../../data/config.js"

export async function createToken(){
    const payload = {
        "username" : "admin",
        "password" : "password123"
    }
     //send request
    const response = await request(baseUrl) //baseUrl
    .post("/auth") //endpoint
    .send(payload)//request body
    .set("Content-Type","application/json") //Header

    const token = (await response).body.token
    return token
}
//Pemanggilan versi common JS
//module.exports = {createToken}