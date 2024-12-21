
const { StrategiesModel } = require('../models/Strategies.Model');

async function CreateStagegies(params, callback) {

    // if (!params.userId) return callback({ message: 'Please Provide userId', })

    try {
        const newmodel = new StrategiesModel(params);
        await newmodel.save().then((response) => {

            return callback(null, response);
        })
    } catch (error) {
        console.log(error);

        return callback({ message: `Error ${error}` })
    }

}

const getStrategiesById = async (params, callback) => {
    try {
        const response = await StrategiesModel.find({ userId: params.userId });

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





async function updateStrategy(params, callback) {

    if (!params.strategyId) {
        return callback({
            message: 'please provide id for update'
        })
    }

    try {

        await StrategiesModel.findByIdAndUpdate(params.strategyId, params)
            .then((response) => {

                if (!response) {
                    return callback({
                        message: 'strstegyid not found for update'
                    })
                }
                return callback({
                    message: 'update Succesfully'
                })
            })

    } catch (error) {
        return ({
            message: error
        })
    }

}

async function deltestrategy(params, callback) {

    if (!params.id) {
        return callback({
            message: 'please provide id for delte'
        })
    }

    try {

        const id = params.id;


        await StrategiesModel.findByIdAndDelete(id)
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



module.exports = {
    CreateStagegies,
    getStrategiesById,
    updateStrategy,
    deltestrategy
}
