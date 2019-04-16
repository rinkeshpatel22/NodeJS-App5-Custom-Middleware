let generateMessage = (req, res) => {
    res.send('Check routes: "http://127.0.0.1:3000/employees"  &  "http://127.0.0.1:3000/users"');
}

// export controller
module.exports = {
    generateMessage: generateMessage
}