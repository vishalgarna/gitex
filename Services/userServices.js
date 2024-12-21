const {userModel}  = require('../models/User.Model')


async function createuser(params, callback) {
    if (!params.userEmail) {
        return callback({
            message: 'Email is required'
        });
    }

    try {
        const alreadyExist = await userModel.findOne({ userEmail: params.userEmail });

        if (alreadyExist) {
            return callback({
                message: 'Email is already registered'
            });
        }

        const newUser = new userModel(params);
        const response = await newUser.save();

        if (response) {
            console.log(response);
            
            return callback(null, response);
        }
    } catch (error) {
        return callback({
            message: `User creation error: ${error.message}`
        });
    }
}


async function getuserByemail(params , callback) {
    if(!params.email){
        return callback({
            message : 'email is requires'
        })
    }

    try {

        await userModel.findOne({UserEmail :params.UserEmail})
        .then((response)=>{
            if(!response){
                return ({
                    message : 'user not Found'
                })

            }
        })
        
    } catch (error) {
        return ({
            message : error
        })
    }
}


async function getuserAllusers(params , callback) {

    try {

         userModel.find().then((response)=>{
            
            return callback(null , response)
        })
        
    } catch (error) {
        return ({
            message : error
        })
    }
}


module.exports = {
    getuserAllusers,
    getuserByemail,
    createuser
}