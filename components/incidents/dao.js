const incident = require('./model');

exports.createIncident = async(data,id) => {
    return new Promise(
        (resolve,reject) => incident.create({
            user:id,
            title:data.title,
            long:data.long,
            lat:data.lat,
            image:data.image,
            description:data.description
        },(err,doc)=> {
            if(err) return reject(err);
            return resolve(doc);
        })
    )
}

exports.updateIncident = async(data) => {
    return new Promise(
        (resolve,reject) => incident.findByIdAndUpdate(data._id,{
            $set:{
                title:data.title,
                long:data.long,
                lat:data.lat,
                locationRef:data.locationRef,
                image:data.image,
                description:data.description
            }
        }).exec((err,doc)=>{
            if(err) return reject(err);
            return resolve(doc);
        })
    );
}

exports.getAllIncidents = () => {
    return new Promise(
        (resolve,reject) => incident
        .find()
        .exec((err,docs)=>{
            if(err) return reject(err);
            return resolve(docs);
        })
    );
}

exports.getAllIncidentsInRange = (data) => {
    return new Promise(
        (resolve,reject) => incident
        .find({$and:[{lat:{$gt:data.minLat}},{lat:{$lte:data.maxLat}},{long:{$gt:data.minLong}},{long:{$lte:data.maxLong}}]})
        .exec((err,docs)=>{
            if(err) return reject(err);
            return resolve(docs);
        })
    );
}

exports.getIncidentById = (id) => {
    return new Promise(
        (resolve,reject) => incident
        .findById(id)
        .exec((err,docs)=>{
            if(err) return reject(err);
            return resolve(docs);
        })
    );
}