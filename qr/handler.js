"use strict"

var QRCode = require('qrcode')

module.exports = handler;

async function* handler(req, res) {

    try {
        QRCode.toDataURL(JSON.stringify(req.query), function (err, url) {
            res.status(200).send('<!DOCTYPE html/><html><head><title>node-qrcode</title></head><body><img src="'+url+'"/></body></html')
        })
    } catch (e) {
        res.status(500).send(e.message);
    }
}
