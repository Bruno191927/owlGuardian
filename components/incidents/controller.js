const IncidentDao = require('./dao');
const IncidentDto = require('./dto');


exports.createIncident = async(request,response) => {
    const data = request.body;
    const id = request.user.id;
    const newIncident = await IncidentDao.createIncident(data,id);
    if(newIncident){
        return response.json({
            msg:"Se creo con exito"
        });
    }
    else{
        return response.status(400).json({
            msg:'Ocurrio un error al crear la incidencia'
        });
    }
}

exports.findAllIncidents = async(request,response) => {
    const incidents = await IncidentDao.getAllIncidents();
    return response.send(IncidentDto.incidentList(incidents));
}

exports.findAllIncidentsInMyZone = async(request,response) => {
    const data = request.body;
    const incidents = await IncidentDao.getAllIncidentsInRange(data);
    return response.send(IncidentDto.incidentList(incidents));
}

exports.updateIncident = async(request,response) => {
    const data = request.body;
    const existIncident = await IncidentDao.getIncidentById(data._id);
    if(existIncident){
        const updateIncident = await IncidentDao.updateIncident(data);
        if(updateIncident){
            return response.json({
                msg:"Se creo con exito"
            });
        }
        else{
            return response.status(400).json({
                msg:'Ocurrio un error al crear la incidencia'
            });
        }
    }
    else{
        return response.status(400).json({
            msg:'Ocurrio un error al crear la incidencia'
        });
    }
}