const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = Stripe("sk_test_51KyznpAapFKrkoR4If5wO3MGGF2YD8gxXEgvMUEZ7PCWOhfzr1hT5xCXmtxUgO0tpQYIPTcEnOmvmO1mwsf4ihl400fkBZDELm");
router.post('/stripe', (req, res)=> {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd"
    },(err, success)=> {
        if(err){
            res.status(500).json(err);
        } else{
            res.status(200).json(success);
        }
    })
})

module.exports = router;