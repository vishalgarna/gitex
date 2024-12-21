const { model } = require("mongoose");
const { Importantmodel } = require("../models/importantFuctionmodel.");


async function addimportant(params, callback) {

    // if (!params.userId) return callback({ message: 'Please Provide userId', })

    try {
        const newmodel = new Importantmodel(params);
        await newmodel.save().then((response) => {

            return callback(null, response);
        })
    } catch (error) {
        console.log(error);

        return callback({ message: `Error ${error}` })
    }

}


const getimportants = async (params, callback) => {
    try {
        const response = await Importantmodel.find();

        if (!response) {
            return callback({
                message: 'Strategy not found'
            }, null);
        }
        return callback(null, response);
    } catch (error) {
        console.error(`Error: ${error}`);
        return callback(error, null);
    }
}

async function delteimportant(params, callback) {

    if (!params.id) {
        return callback({
            message: 'please provide id for delte'
        })
    }

    try {

        const id = params.id;


        await Importantmodel.findByIdAndDelete(id)
            .then((response) => {

                return callback(null, {
                    message: 'delete Succesfully'
                })
            })

    } catch (error) {
        return ({
            message: error
        })
    }

}

module.exports = { delteimportant, addimportant, getimportants }
