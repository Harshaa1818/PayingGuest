const getAllNearbyProperties = ( req,res ) => {
    const { lat, long } = req.query;

    const nearByProperties = AlgoliaService.getNearbyProperties(lat, long)


}
const bookProperty = ( req,res ) => {}

const getSpecificProperty = ( req,res ) => {} 

const deletePropertyFromCart = ( req,res ) => {}


export { getAllNearbyProperties, bookProperty, getSpecificProperty, deletePropertyFromCart }