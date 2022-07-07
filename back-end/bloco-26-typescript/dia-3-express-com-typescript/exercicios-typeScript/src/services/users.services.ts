import IUsers from "../interfaces/users.interfaces";
import userModels from "../models/users.models"

const getAll = async (): Promise<IUsers[]> => {
    const users =  await userModels.getAll()
    return users
}

export default { getAll }