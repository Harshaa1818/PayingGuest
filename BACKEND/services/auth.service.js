import { User } from '../models/user.models'

class authService{
    static async findbyMailId( email ){
        return await User.findOne({ email })

    }
    static async register(data){
        return await User.create(data)
    }
    
}

export {authService}