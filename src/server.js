const express = require('express');
const app = express();
const fs = require('fs');
const compression = require('compression');

app.use(express.static('build'));
// app.use(compression());
// app.use((res, req, next) => {
//     res.set('Cache-Control', 'public, max-age=99999');
// })

const listener = app.listen(process.env.PORT || 1234, function () {
    console.log(`Listening on port ${listener.address().port}`);
});
