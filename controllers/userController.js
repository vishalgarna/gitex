
const userservices = require('../Services/userServices')

exports.create = (req, res, next) => {
    console.log(req.body);

    const params = {
        "uerName": req.body.userName,
        "userEmail": req.body.userEmail,
        "userPassword": req.body.userPassword
    }

    userservices.createuser(params, (err, response) => {
        if (err) {
            return next(err); // Adding return to prevent further execution
        }

        res.status(200).json({
            message: "success",
            data: response  // Send the response object directly
        });
    });
};

exports.getalluers = (req, res, next)=>{

    const params ={

    }
    userservices.getuserAllusers(params , (err , response )=>{

        if(err){
            return next(err)
        }

        res.status(200).send({
            message : "succes",
            data : response
        })
    })
}