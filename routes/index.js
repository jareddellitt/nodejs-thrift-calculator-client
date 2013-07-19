var thrift = require('thrift'),
    calculator = require('../gen-nodejs/Calculator'),
    connection = thrift.createConnection("localhost", 10000),
    client = thrift.createClient(calculator, connection);

exports.index = function (req, res) {
    res.render('index');
};

exports.calculate = function (req, res) {
    var first = req.body.first,
        second = req.body.second,
        operation = req.body.operation;

    client[operation](first, second, function (err, thriftRes) {
        res.json(thriftRes);
    });
};