const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

bc1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1715666642088,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1715666796956,
            "transactions": [],
            "nonce": 18140,
            "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1715666899948,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "c30d228011b711efbc61a7e2c5494fc9",
                    "transactionId": "1f6370c011b811efbc61a7e2c5494fc9"
                },
                {
                    "amount": 10,
                    "sender": "Mr.Renaldy Fredyan",
                    "recipient": "Mr.Pandu Wicaksono ",
                    "transactionId": "3f076a8011b811efbc61a7e2c5494fc9"
                },
                {
                    "amount": 20,
                    "sender": "Mr.Renaldy Fredyan",
                    "recipient": "Mr.Pandu Wicaksono ",
                    "transactionId": "4114036011b811efbc61a7e2c5494fc9"
                },
                {
                    "amount": 30,
                    "sender": "Mr.Renaldy Fredyan",
                    "recipient": "Mr.Pandu Wicaksono ",
                    "transactionId": "42f5468011b811efbc61a7e2c5494fc9"
                }
            ],
            "nonce": 24176,
            "hash": "00000cf01dd700f4c1318434efc7ec61b469aaa95be2c4822c0ce2d1111f9256",
            "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        },
        {
            "index": 4,
            "timestamp": 1715667578376,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "c30d228011b711efbc61a7e2c5494fc9",
                    "transactionId": "5cc0843011b811efbc61a7e2c5494fc9"
                },
                {
                    "amount": 40,
                    "sender": "Mr.Renaldy Fredyan",
                    "recipient": "Mr.Pandu Wicaksono ",
                    "transactionId": "a46f152011b911efbc61a7e2c5494fc9"
                },
                {
                    "amount": 50,
                    "sender": "Mr.Renaldy Fredyan",
                    "recipient": "Mr.Pandu Wicaksono ",
                    "transactionId": "a64f46d011b911efbc61a7e2c5494fc9"
                },
                {
                    "amount": 60,
                    "sender": "Mr.Renaldy Fredyan",
                    "recipient": "Mr.Pandu Wicaksono ",
                    "transactionId": "a881420011b911efbc61a7e2c5494fc9"
                },
                {
                    "amount": 70,
                    "sender": "Mr.Renaldy Fredyan",
                    "recipient": "Mr.Pandu Wicaksono ",
                    "transactionId": "ab177d4011b911efbc61a7e2c5494fc9"
                }
            ],
            "nonce": 137215,
            "hash": "0000ceadb4b575592de73e009714ccf0d0be67dcc4b9d97258dd372ae02cc3d3",
            "previousBlockHash": "00000cf01dd700f4c1318434efc7ec61b469aaa95be2c4822c0ce2d1111f9256"
        },
        {
            "index": 5,
            "timestamp": 1715667602102,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "c30d228011b711efbc61a7e2c5494fc9",
                    "transactionId": "f11fcdb011b911efbc61a7e2c5494fc9"
                }
            ],
            "nonce": 20280,
            "hash": "000095301f91498cc47652abd6f06d68232672b3a39ca4b009aba1ad425e994e",
            "previousBlockHash": "0000ceadb4b575592de73e009714ccf0d0be67dcc4b9d97258dd372ae02cc3d3"
        },
        {
            "index": 6,
            "timestamp": 1715667735423,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "c30d228011b711efbc61a7e2c5494fc9",
                    "transactionId": "ff43f38011b911efbc61a7e2c5494fc9"
                }
            ],
            "nonce": 268405,
            "hash": "0000a10eeb7938ad53196ed93d3c9047288d96629b91bea899106113a554f01d",
            "previousBlockHash": "000095301f91498cc47652abd6f06d68232672b3a39ca4b009aba1ad425e994e"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "c30d228011b711efbc61a7e2c5494fc9",
            "transactionId": "4ebc097011ba11efbc61a7e2c5494fc9"
        }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
};


console.log('VALID : ',bitcoin.chainIsValid(bc1.chain));