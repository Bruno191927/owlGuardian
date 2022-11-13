const incident = (data) => ({
    id:data._id,
    user:user(data.user),
    title:data.title,
    timeOfIncident:data.timeOfIncident,
    category:data.category,
    long:data.long,
    lat:data.lat,
    images:image(data.image),
    description:data.description,
    createdAt:data.createdAt,
    updatedAt:data.updatedAt
});

const user = (data) => ({
    id:data._id,
    email:data.email,
    firstName:data.firstName,
    lastName:data.lastName,
    cellPhone:data.cellPhone,
    documentType:data.documentType,
    documentNumber:data.documentNumber
})

const image = (data) => ({
    imgLink:data.imgLink,
    imgId:data.imgId
});

const incidentList = (resources) =>resources.map((resource)=>incident(resource));

const imageList = (resources) => resources.map((resource)=>image(resource));
module.exports = {
    incident,
    incidentList
}