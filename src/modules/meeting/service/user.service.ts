import type { LoginDTO } from "../dto/login.dto.js"
import type { RegisterDTO } from "../dto/register.dto.js"
import { User } from "../module/user.model.js"
import jwt from "jsonwebtoken"


const JWT_SECRET = process.env.JWT_SECRET as string || "secret"

export class UserService{
    async register(data: RegisterDTO){
        const {userName,email,password} = data

        const existingUser = await User.findOne({
            where:{
                email
            }
        })
        if(existingUser){
            throw new Error("user already exists")
        }
        const newUser = await User.create({
            userName,
            email,
            password
        })
        return newUser
    }

    async login(data: LoginDTO){
        const {email,password} = data
        const user = await User.findOne({
            where:{
                email
            }
        })

        if(!user){
            throw new Error("user not found")
        }
        const token = jwt.sign(user.id,JWT_SECRET)
        return token
    }

    async getUserById(id:string){
        const user = await User.findByPk(id);
        return user
    }
}

export const userService = new UserService();