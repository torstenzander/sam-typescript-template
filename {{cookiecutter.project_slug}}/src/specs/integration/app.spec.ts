import request = require('supertest');

const BASE_URL = "http://127.0.0.1:3000";

describe('Hello world', () => {
    it('Should say "hello world"', async () => {
        const response = await request(BASE_URL)
            .get('/hello')
            .expect(200);
        expect(response.text).toBe("{\"say\":\"hello du da da\"}");
    });
});
