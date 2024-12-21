const importanservices = require('../Services/importanservices')

exports.create = (req, res, next) => {
    const params = {

        "timeframe": req.body.timeframe,
        "orderDetails": req.body.orderDetails
    };


    console.log(req.body);

    // Uncomment and replace `stragegiesServices.CreateStagegies` with actual function call
    importanservices.addimportant(params, (err, response) => {


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
    // res.send()
};

exports.getimportant = (req, res, next) => {


    const params = {
        "userId": req.headers.userid,
    }


    importanservices.getimportants(params, (err, result) => {
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



exports.delete = (req, res, next) => {
    const params = {
        "id": req.params.id,
    }

    importanservices.delteimportant(params, (err, result) => {
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