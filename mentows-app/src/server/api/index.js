import client from '../db/client';
const router = require('express').Router();

router.get("/Signup", async (req, res, next) => {
    try {
        const uptime = process.uptime();
        const {
            rows: [dbConnection],
        } = await client.query(`SELECT NOW();`);

        const currentTime = new Date();

        const lastRestart = new Intl.DateTimeFormat('en', {
            timeStyle: 'long',
            dateStyle: 'long',
            timeZone: 'America/New_York',
        }).format(currentTime - uptime * 1000);

        res.send({
            message: 'The api is healthy',
            uptime, 
            dbConnection,
            currentTime,
            lastRestart 
        });
    } catch (error) {
        next(error);
    }
})

router.use('/')

export default router;