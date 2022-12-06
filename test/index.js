const chai = require('chai');
const chaiFetch = require('chai-fetch');
chai.use(chaiFetch);
const axios = require('axios');
const { assert } = require('chai');


describe('Reserve Donation', () => {

    it('returns 200 if the Donation is successfully registered', (done) => {

        const userTest = {
            amount:20000,
            name :"",
        }
        axios({
            method: "post",
            url: `http://localhost:3006/loaddonation`,
            data: userTest

        }).then(response => {
            assert.equal(response.status, 200);
            done();
        }).catch(err => {
            done(err);
        });
    });

    it('returns 400 if the Donation is amount lower than or equals 0', (done) => {

        const userTest = {
            amount:0,
            name :"",
        }
        axios({
            method: "post",
            url: `http://localhost:3006/loaddonation`,
            data: userTest

        }).then(response => {
            done();
        }).catch(err => {
            if(!err.response) throw err;
            assert.equal(err.response.status, 400);
            done();
        });
    });
})