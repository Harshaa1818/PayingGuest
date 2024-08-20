import { AdminService } from '../services/adminService.js'

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


export { getAllProperties, getPendingProperties}