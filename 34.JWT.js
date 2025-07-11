const jwt = require('jsonwebtoken');
const secretKey = "YOUR_SECRET_KEY"

let strToken = ""
// jwt.sign({ foo: 'bar' }, secretKey, { algorithm: 'HS256', expiresIn: '1s' }, (err, token) => {
//     console.log('token', token);
//     strToken = 1234 + token ;

//     setTimeout(() => {
//         try {
//             jwt.verify(strToken, secretKey, (err, decoded) => {
//                 console.log('decoded', decoded);
//                 console.log('decoded-err', err);
//             })
//         }
//         catch (err) {
//             console.log('err', err);
//         }
//     }, 1000);
// })


jwt.sign({ foo: 'bar', iss:'iss123', sub: 'sub123', aud: 'aud123', }, secretKey, { algorithm: 'HS256', expiresIn: '1m' }, (err, token) => {
    console.log('token', token);
    strToken = token ;

    setTimeout(() => {
        try {
            jwt.verify(strToken, secretKey, (err, decoded) => {
                console.log('decoded', decoded);
                console.log('decoded-err', err);
            })
        }
        catch (err) {
            console.log('err', err);
        }
    }, 1000);
})

