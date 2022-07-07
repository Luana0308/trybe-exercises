import { Request, Response, Router } from "express";
import usersServices from "../services/users.services"

const userController = Router()

export async function getAll(req: Request, res: Response): Promise<Response> {
    const users = await usersServices.getAll()
   return res.status(200).json(users)
}

export default userController
