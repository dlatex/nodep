const expect = require('chai').expect;
const should = require('chai').should()
const getUser = require('./user').getUser;
const nock = require('nock');
const response = require('./excepted');
describe('First test', () => {
    it('Should assert true to be true', () => {
        expect(true).to.be.true;
    });
})
describe('Axios user test', () => {
    it('get a user by username', () => {
        return getUser('dlatex')
            .then(response => {
                expect(typeof response).to.equal('object');
                expect(response.name).to.equal('Delex Lath')
            })
    })
})

describe('Nock user Test', () => {
    beforeEach(() => {
        nock('https://api.github.com')
            .get('/users/dlatex')
            .reply(200, response);
    });
    it('Get a user by username', () => {
        return getUser('dlatex')
            .then(response => {
                expect(typeof response).to.equal('object');
                expect(response.name).to.equal('Delex Lath')
                // response.company.should.equal(null)
            });
    });
});

