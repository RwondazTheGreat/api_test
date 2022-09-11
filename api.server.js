const { json } = require('express');
const express = require('express');
const api = express();
const { useState } = 'react';
let users = require('./data/users.json');
let plans = require('./data/plans.json');
let products = require('./data/products.json');


const PORT = process.env.PORT || 2828;
const NODE_ENV = process.env.NODE_ENV || 'development';


api.get('/', (req, res) => {
	res.sendFile(__dirname + '/home.htm');
});

api.get('/api', (req, res) => {
	res.sendFile(__dirname + '/public/api.htm');

});

api.get('/api/users', (req, res) => {
	res.send(users);
});

api.get('/api/users/:id', (req, res) => {
	const user = users.find(u => u.id === parseInt(req.params.id));
	if (!user) return res.status(404).sendFile(__dirname + '/public/404.htm');
	res.send(user);
});

api.post('/api/users', (req, res) => {
	const { error } = validateUser(req.body);
	if (result.error) {
		res.status(400).sendFile(__dirname + '/public/400.htm');
		return;
	}
	const user = {
		id: users.length + 1,
		name: req.body.name
	};
	users.push(user);
	res.send(user);
});

api.get('/api/plans', (req, res) => {
    res.send(plans);
});

api.get('/api/plans/:id', (req, res) => {
	const plan = plans.find(p => p.id === parseInt(req.params.id));
	if (!plan) return res.status(404).sendFile(__dirname + '/public/404.htm');
	res.send(plan);
});
api.post('/api/plans', (req, res) => {
	const { error } = validatePlan(req.body);
	if (result.error) {
		res.status(400).sendFile(__dirname + '/public/400.htm');
		return;
	}
	const plan = {
		id: users.length + 1,
		name: req.body.name
	};
	plans.push(plan);
	res.send(plan);
});

api.get('/api/products', (req, res) => {
    res.send(products);
});

api.get('/api/products/:id', (req, res) => {
	const product = products.find(pr => pr.id === parseInt(req.params.id));
	if (!product) return res.status(404).sendFile(__dirname + '/public/404.htm');
	res.send(product);
});

api.post('/api/products', (req, res) => {
	const { error } = validatePlan(req.body);
	if (result.error) {
		res.status(400).sendFile(__dirname + '/public/400.htm');
		return;
	}
	const product = {
		id: users.length + 1,
		name: req.body.name
	};
	products.push(product);
	res.send(product);
});

api.get('/api', (req, res) => {
    
});
api.listen(PORT, () => {
console.log(`server online at http://localhost:2828 | Environment : ${api.get('env')}`);
});
