const request = require('supertest')
const app = require('./src/server')

describe('test my app server', () => {
    it('should post main route', async () => {
       const res = await request(app).get('/clients')
       console.log(res.body)
        expect(res.body).toBe(res.body)
    })
})