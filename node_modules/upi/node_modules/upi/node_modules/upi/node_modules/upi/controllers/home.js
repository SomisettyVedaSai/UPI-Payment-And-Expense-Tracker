const path = require('path');

function homepagehandler(req, res) {
    res.sendFile(path.join(__dirname, '../views/land.html'));
}
module.exports = { homepagehandler }