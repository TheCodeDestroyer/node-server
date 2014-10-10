var express = require('express');
var app = express();


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.post('/login', function(req, res) {

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        res.json({id: 1, username: 'Your majesty', sessionId: 'da39a3ee5e6b4b0d3255bfef95601890afd80709', role:'admin'});
    }
});

app.get('/fixedasset', function(req, res) {

    var fixedassets = [
        { id: 1, code: '951', title: 'Coca Cola fridge', barcode: '63117787826', inventoryNumber: '9838762', customerId: 21, lastChange: 1412940432919 },
        { id: 2, code: '908', title: 'Pepsi fridge', barcode: '25115821939', inventoryNumber: '8725321', customerId: 22, lastChange: 1412940432919 },
        { id: 3, code: '887', title: 'Dr Pepper fridge', barcode: '24187454152', inventoryNumber: '8688151', customerId: 23, lastChange: 1412940432919 },
        { id: 4, code: '679', title: 'Perrier fridge', barcode: '45896232788', inventoryNumber: '6066348', customerId: 24, lastChange: 1412940432919 },
        { id: 5, code: '969', title: 'Heineken fridge', barcode: '67312591271', inventoryNumber: '6685081', customerId: 25, lastChange: 1412940432919 },
        { id: 6, code: '847', title: 'Cranberries fridge', barcode: '72107327535', inventoryNumber: '1340402', customerId: 26, lastChange: 1412940432919 },
        { id: 7, code: '968', title: 'Robinsons fridge', barcode: '37634169216', inventoryNumber: '6997905', customerId: 27, lastChange: 1412940432919 },
        { id: 8, code: '680', title: 'Red bull fridge', barcode: '75699201491', inventoryNumber: '1745124', customerId: 28, lastChange: 1412940432919 },
        { id: 9, code: '335', title: 'Badoit fridge', barcode: '38703609028', inventoryNumber: '6518418', customerId: 29, lastChange: 1412940432919 },
        { id: 10, code: '741', title: 'Ginger ale fridge', barcode: '29918823646', inventoryNumber: '4246136', customerId: 30, lastChange: 1412940432919 }
    ];

    var response = { "now": new Date().getTime(), "updates": fixedassets };

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        res.json(response);
    }

});

app.post('/fixedasset', function(req, res) {

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        res.json({"status": "ok", "now": new Date().getTime()});
    }
});

app.get('/item', function(req, res) {

   var items = [
       { id: 11, code: '951', title: 'iPad 4', serialNumberRequired: true, lastChange: 1412940432919 },
       { id: 12, code: '132', title: 'iPhone 6', serialNumberRequired: true, lastChange: 1412940432919 },
       { id: 13, code: '486', title: 'Nexus 5', serialNumberRequired: true, lastChange: 1412940432919 },
       { id: 14, code: '842', title: 'Nexus 7', serialNumberRequired: true, lastChange: 1412940432919 },
       { id: 15, code: '359', title: 'HTC One', serialNumberRequired: true, lastChange: 1412940432919 },
       { id: 16, code: '913', title: 'Nokia Lumia', serialNumberRequired: true, lastChange: 1412940432919 },
       { id: 17, code: '159', title: 'Nexus 10', serialNumberRequired: true, lastChange: 1412940432919 },
       { id: 18, code: '753', title: 'Surface Pro 3', serialNumberRequired: true, lastChange: 1412940432919 },
       { id: 19, code: '258', title: 'Samsung Galaxy S5', serialNumberRequired: false, lastChange: 1412940432919 },
       { id: 20, code: '963', title: 'Sony Xperia Z3', serialNumberRequired: false, lastChange: 1412940432919 }
   ];

    var response = { "now": new Date().getTime(), "updates": items };

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        res.json(response);
    }

});

app.post('/item', function(req, res) {

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        res.json({"status": "ok", "now": new Date().getTime()});
    }
});

app.get('/customer', function(req, res) {

    var customers = [
        { id: 21, code: '951', title: 'The Coca-Cola Company', lastChange: 1412940432919, contactPerson: 'William X. Chandler', telephoneNumber: '415-392-0431' },
        { id: 22, code: '147', title: 'PepsiCo Inc.', lastChange: 1412940432919, contactPerson: 'Leslie K. Becker', telephoneNumber: '808-945-8950' },
        { id: 23, code: '456', title: 'Dr Pepper Snapple Group, Inc.', lastChange: 1412940432919, contactPerson: 'David S. McLeod', telephoneNumber: '317-728-0739' },
        { id: 24, code: '652', title: 'Nestlé Waters', lastChange: 1412940432919, contactPerson: 'Ross C. Beckett', telephoneNumber: '262-642-2713' },
        { id: 25, code: '784', title: 'Heineken NV', lastChange: 1412940432919, contactPerson: 'David T. Sheffield', telephoneNumber: '801-791-4869' },
        { id: 26, code: '364', title: 'Ocean Spray Cranberries, Inc.', lastChange: 1412940432919, contactPerson: 'John A. Buckle', telephoneNumber: '504-599-7354' },
        { id: 27, code: '934', title: 'Britvic Plc', lastChange: 1412940432919, contactPerson: 'Gerald J. Lacroix', telephoneNumber: '952-472-6400' },
        { id: 28, code: '846', title: 'Red Bull GmbH', lastChange: 1412940432919, contactPerson: 'Steven D. Folse', telephoneNumber: '630-507-5608' },
        { id: 29, code: '153', title: 'Groupe Danone Water Division', lastChange: 1412940432919, contactPerson: 'George S. Trent', telephoneNumber: '573-400-7660' },
        { id: 30, code: '132', title: 'Cott Corporation', lastChange: 1412940432919, contactPerson: 'Karin B. Griffin', telephoneNumber: '208-693-7086' }
    ];

    var response = { "now": new Date().getTime(), "updates": customers };

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        res.json(response);
    }

});

app.post('/customer', function(req, res) {

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        res.json({"status": "ok", "now": new Date().getTime()});
    }
});

var ipaddr = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.listen(port, ipaddr);
console.log('Server running at http://localhost:8080');