const express = require('express');
const app = express();

const student = require('./routes/student');

const port = process.env.PORT || 3000;
// app.get('/', (req, res, next) => {
//     res.status(200).send({
//         data: 'success to fetch GET API',
//     });
// });

// app.post('/', (req, res, next) => {
//     res.status(201).json({
//         data: 'Success to fetch POST API',
//     });
// });
app.use('/student', student);

app.listen(port,() => {
    console.log(`Server running on ${port}!`);
});