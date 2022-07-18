const express = require('express');
const api = express();
const { useState } = 'react';

const PORT = process.env.PORT || 2828;
const NODE_ENV = process.env.NODE_ENV || 'development';


const users = [
    {  
        "id": 1, 
        "username": "straight-code",
        "balance": '25000',
        "points": 25000,
        "withdraws_completed": "105000",
        "deposited": "55000",
        "plans_active": [ 'rookie-plan', 'programmer-plan', 'hacker-plan']
    },
    {
        "id": 2, 
        "username": "bot1",
        "price": '10000',
        "balance": 10000,
        "withdraws_completed": "0",
        "deposited": "0",
        "plans_active": [ '', '', '']
    },
    {
        "id": 3, 
        "username": "bot2",
        "balance": '10000',
        "points": 10000,
        "withdraws_completed": "0",
        "deposited": "0",
        "plans_active": [ '', '', '']
    },
    {
        "id": 4, 
        "username": "rwondaz",
        "balance": '100',
        "points": 1000,
        "withdraws_completed": "0",
        "deposited": "0",
        "plans_active": [ 'programmer-plan', 'hacker-plan' ]
    },
    {
        "id": 5, 
        "username": "bot28",
        "balance": '10000',
        "points": 10000,
        "withdraws_completed": "0",
        "deposited": "0",
        "plans_active": [ '', '', '']
    }

];

const plans = [
    {  
        "id": 1, 
        "name": "rookie-plan",
        "price": '$25',
        "points_price": 2500 ,
        "plan_elements": [ 'element-1', 'element-2', 'element-3']
    },
    {
        "id": 2, 
        "name": "programmer-plan",
        "price": '$55',
        "points_price": 5500,
        "plan_elements": [ 'element-1', 'element-2', 'element-3', 'element-4', 'element-5', 'element-6' ]
    },
    {
        "id": 3, 
        "name": "hacker-plan",
        "price": '$110', 
        "points_price": 11000,
        "plan_elements":  [ 'element-1', 'element-2', 'element-3', 'element-4', 'element-5', 'element-6', 'element-7', 'element-8', 'element-9' ]
    }
];

const products = [ 
    {  
        "id": 1, 
        "name": "product-1",
        "price": '25',
        "points_price": 2500,
        "type": '',
        "features": [ 
            {
                "id": 1,
                "feature_name": 'pro+' 
            },
            {
                "id": 2,
                "feature_name": 'pro++' 
            },
            {
                "id": 3,
                "feature_name": 'MaxPro+' 
            }
        ]
    },
    {  
        "id": 2, 
        "name": "product-2",
        "price": '20',
        "points_price": 2000,
        "type": '',
        "features": [  {
            "id": 1,
            "feature_name": 'pro+' 
        },
        {
            "id": 2,
            "feature_name": 'pro++' 
        },
        {
            "id": 3,
            "feature_name": 'MaxPro+' 
        } 
    ]
    
    },
    {  
        "id": 3, 
        "name": "product-3",
        "price": '2.50',
        "points_price": 250,
        "type": '',
        "features": [ 
             {
                "id": 1,
                "feature_name": 'pro+' 
            },
            {
                "id": 2,
                "feature_name": 'pro++' 
            },
            {
                "id": 3,
                "feature_name": 'MaxPro+' 
            }
        ]
    },
    {  
        "id": 4, 
        "name": "product-4",
        "price": '50',
        "points_price": 5000,
        "type": '',
        "features": [ 
             {
                "id": 1,
                "feature_name": 'pro+' 
            },
            {
                "id": 2,
                "feature_name": 'pro++' 
            },
            {
                "id": 3,
                "feature_name": 'MaxPro+' 
            }
        ]
    },
    {  
        "id": 5, 
        "name": "product-5",
        "price": '55',
        "points_price": 5500,
        "type": '',
        "features": [ 
             {
                "id": 1,
                "feature_name": 'pro+' 
            },
            {
                "id": 2,
                "feature_name": 'pro++' 
            },
            {
                "id": 3,
                "feature_name": 'MaxPro+' 
            }
        ]
    },
    {  
        "id": 6, 
        "name": "product-6",
        "price": '25.75',
        "points_price": 2575,
        "type": '',
        "features": [ 
             {
                "id": 1,
                "feature_name": 'pro+' 
            },
            {
                "id": 2,
                "feature_name": 'pro++' 
            },
            {
                "id": 3,
                "feature_name": 'MaxPro+' 
            }
        ]
    },
    {  
        "id": 7, 
        "name": "product-7",
        "price": '250',
        "points_price": 2500,
        "type": '',
        "features": [ 
             {
                "id": 1,
                "feature_name": 'pro+' 
            },
            {
                "id": 2,
                "feature_name": 'pro++' 
            },
            {
                "id": 3,
                "feature_name": 'MaxPro+' 
            }
        ]
    }

];

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
