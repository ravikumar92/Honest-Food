const kml = require('gtran-kml');
const Geocoding = require('@mapquest/geocoding');
const classifyPoint = require('robust-point-in-polygon');

const client = new Geocoding({
  key: process.env.API_KEY
});

const getlocation = async(query) =>{
    try{
        if(query == '' || query.location.trim() == '' || query.location == undefined) {
            throw new Error("Enter address")
        }
        const geoLocation = await client.forward(query.location.trim());;
        const { features=[] } = await kml.toGeoJson('location.kml');
        
        for (let i = 0; i < features.length; i++) {
            if (features[i].geometry.type === 'Polygon') {
              let isOutlet = classifyPoint(
                features[i].geometry.coordinates[0],
                geoLocation.geometry.coordinates
              );
              if (isOutlet === -1 || isOutlet === 0) {
                return {
                  message: 'Outlet located.',
                  outlet: features[i].properties.name
                };
              }
            }
          }

          return {
            message: 'Service not available',
            outlet: 'not found'
          };

    } catch(err){
        console.log(err);
        return {
            error:err.message
          }
    }
}

module.exports ={
    getlocation
}