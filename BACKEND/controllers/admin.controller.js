import { AdminService } from '../services/admin.service.js'

const getAllProperties = async(req,res) => {
    try{
        const properties = await AdminService.getAllProperty()
        res.status(200).json({properties})

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

const getPendingProperties = async(req,res) => {
    try{
        const properties = await AdminService.getPendingProperty()
        res.status(200).json({properties})

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}
const approveProperty = async ( req,res ) => {
   try {
     const { id } = req.params;
     const { approved } = req.body
 
     const approvedProperty = await AdminService.approveProperty(id, approved);
 
     if(!approvedProperty) return res.status(404).json({message: "property not found"})
 
     return res.status(200).json({approvedProperty})
   } 
   catch (error) {
   
     return res.status(500).json({message: error.message})
    
   }



}

const deleteProperty = async ( req,res ) => {
    try {
      const { id } = req.params;
      
  
      const deletedProperty = await AdminService.deleteProperty(id);
      if (!deletedProperty) return res.status(404).json({message: "property not found"})
        
       return res.status(200).json({deletedProperty})
    }
    catch (error) {
    
      return res.status(500).json({message: error.message})
     
    } 
}


export { getAllProperties, getPendingProperties, approveProperty, deleteProperty}