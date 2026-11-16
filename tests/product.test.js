
const request = require("supertest");
const app = require("../server/server");

// Test the GET /foods endpoint.
describe("Food API Tests", () => {

  // Check that all five foods are returned.
  test("GET /foods returns five food items", async () => {
    const response = await request(app).get("/foods");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(5);
  });

  // Check that each food has an ID, name, and price.
  test("Each food has the correct properties", async () => {
    const response = await request(app).get("/foods");

    response.body.forEach(food => {
      expect(food).toHaveProperty("id");
      expect(food).toHaveProperty("name");
      expect(food).toHaveProperty("price");
    });
  });

  // Check that invalid routes return 404.
  test("Unknown routes return 404", async () => {
    const response = await request(app).get("/unknown");

    expect(response.statusCode).toBe(404);
  });

});
 