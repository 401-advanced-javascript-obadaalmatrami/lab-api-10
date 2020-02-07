'use strict';

const { app } = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const requestapi = supergoose(app);

describe('server', () => {

    it('should give 404 error on bad route', () => {
        return requestapi.get('/wrong')
            .then(result => {
                expect(result.status).toBe(404);
            });
    });

    it('it shold give 500 error', () => {
        const badObj = { quantity: 10 };
        return requestapi.post('/api/v1/product')
            .send(badObj)
            .then(result => {
                expect(result.status).toBe(500);
            });
    });
});