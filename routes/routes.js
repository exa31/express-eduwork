const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../about.html'));
});

router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../contact.html'));
})

router.get('/numrandom', (req, res) => {
    const num = Math.floor(Math.random() * 100) + 1;
    res.send(`<h1>${num}</h1>`)
})

router.get('/search', (req, res) => {
    const { nama, age } = req.query;
    if (!nama && !age) {
        res.send('Tidak ada query')
    }

    res.send({ nama, age })

})

router.get('/blog/:news', (req, res) => {
    const { news } = req.params;
    res.send(`<h1> ${news}</h1 > <p>judul newsnya adalah ${news}</p>    `)
})

router.get('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

module.exports = router;