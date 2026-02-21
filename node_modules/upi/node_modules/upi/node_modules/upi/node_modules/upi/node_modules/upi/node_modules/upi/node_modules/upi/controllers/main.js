const model = require("../model/schema.js")
const jwt = require("jsonwebtoken")
const path = require('path');

function logouthandler(req, res) {
    res.clearCookie('uid');
    res.redirect('/pay/home');
}
async function monthlyhandler(req, res) {
    res.sendFile(path.join(__dirname, '../views/monthly.html'));
}
async function yearlyhandler(req, res) {
    res.sendFile(path.join(__dirname, '../views/yearly.html'));
}
async function balancehandler(req, res) {
    res.sendFile(path.join(__dirname, '../views/balance.html'));
}
async function transcationhandler(req, res) {
    res.sendFile(path.join(__dirname, '../views/transaction.html'));
}

// Data APIs to replace EJS Injection
async function getUserData(req, res) {
    try {
        const uid = req.cookies.uid;
        if (!uid) return res.status(401).json({ error: 'unauthorized' });

        const decoded = jwt.verify(uid, process.env.JWT_SECRET);
        const id = decoded._id;
        const user = await model.findOne({ _id: id });

        return res.json({ deposit: user.deposit, transactions: user.transactions });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}


function insufficentbalance(req, res) {
    res.sendFile(path.join(__dirname, '../views/in.html'));
}

function mainpagehandler(req, res) {
    res.sendFile(path.join(__dirname, '../views/main.html'));
}
function sucesshandler(req, res) {
    res.sendFile(path.join(__dirname, '../views/sucess.html'));
}
async function submithandler(req, res) {
    try {
        const temp = req.cookies.uid;
        const { autofill, amount } = req.body;
        const decoded = jwt.verify(temp, process.env.JWT_SECRET);
        const id = decoded._id;
        const user = await model.findOne({ _id: id });

        if (!user) {
            return res.status(404);
        }
        const left = user.deposit - amount;
        if (left < 0) {
            return res.redirect("/pay/main/submit/in");
        }
        user.deposit = left
        user.transactions.push({
            autofill: autofill,
            amount: amount,
        });
        await user.save();
        res.redirect("/pay/main/submit/sucess");
    }
    catch (error) {
        console.error("Error in submithandler:", error);
    }
}

module.exports = { mainpagehandler, submithandler, sucesshandler, insufficentbalance, logouthandler, transcationhandler, balancehandler, monthlyhandler, yearlyhandler, getUserData }

