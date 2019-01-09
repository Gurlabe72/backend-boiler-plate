const onTheRoadQuery = require('../queries/onTheRoad.query');

const getAllOnTheRoads = () => {
    let onTheRoads = onTheRoadQuery.getAllOnTheRoads();

    return onTheRoads.then(result => {
        return result.length < 1 ?
            { err, status: 404 } :
            result
    })
}

const getOneOnTheRoad = (id) => {
    let onTheRoad = onTheRoadQuery.getOneOnTheRoad(id)

    return onTheRoad.then(result => {
        return result === null ?
            { err, status: 404 } :
            result
    })
}

const createOnTheRoad = (body) => {
    console.log(body, "we are in the model")
    let onTheRoad = onTheRoadQuery.createOnTheRoad(body)

    return onTheRoad.then(result => {
        return !result
            ? { error: 'error creating onTheRoad', status: 404 }
            : result
    })
}

const deleteOnTheRoad = (id) => {
    let onTheRoad = onTheRoadQuery.deleteonTheRoad(id)

    return onTheRoad.then(result => {
        return result
    })
}

module.exports = {
    getAllOnTheRoads,
    getOneOnTheRoad,
    createOnTheRoad,
    deleteOnTheRoad
}