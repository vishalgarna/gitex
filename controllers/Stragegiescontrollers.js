const stragegiesServices = require('../Services/Stargegies.services')

exports.create = (req, res, next) => {
    const params = {
        "userId": "674f044539c250120a20854e",
        "strategyName": req.body.strategyName,
        "timeframe": req.body.timeframe,
        "description": req.body.description,
        "deployed": req.body.deployed,
        "indicators": req.body.indicators,
        "entryRuleModel": req.body.entryRuleModel,
        "exitRuleModel": req.body.exitRuleModel,
        "orderDetails": req.body.orderDetails
    };



    // Uncomment and replace `stragegiesServices.CreateStagegies` with actual function call
    stragegiesServices.CreateStagegies(params, (err, response) => {


        if (err) {

            return res.status(402).send({ message: err });

        } else {
            // Trigger EvaluteFunction if necessary and send success response

            res.status(200).send({
                message: "success",
                data: response
            })
        }
    });
};


exports.getstrateies = (req, res, next) => {


    const params = {
        "userId": req.headers.userid,
    }


    stragegiesServices.getStrategiesById(params, (err, result) => {
        if (err) {
            return next(err);
        }
        // console.log(result);

        res.status(200).send({
            message: 'Success',
            data: result
        });
    });
}

exports.update = (req, res, next) => {
    const params = {
        "userId": req.body.strategyId,
        "strategyName": req.body.strategyName,
        "description": req.body.description,
        "deployed": req.body.deployed,
        "indicators": req.body.indicators,
        "rules": req.body.rules

    }

    stragegiesServices.updateStrategy(params, (err, result) => {
        if (err) {
            next(err);
        }

        res.status(200).send({
            message: 'succes',
            data: result
        })

    })
}


exports.delete = (req, res, next) => {
    const params = {
        "id": req.params.id,
    }

    console.log('enter');


    stragegiesServices.deltestrategy(params, (err, result) => {
        if (err) {
            return next(err);
        }

        console.log(result);

        res.status(200).send({
            message: 'succes',
            data: result
        })

    })
}