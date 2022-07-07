import { ResultSetHeader } from "mysql2";
import IUsers from "../interfaces/users.interfaces";
import connection from "./connection";

const getAll = async (): Promise<IUsers[]> => {
  const [result] = await connection.execute('SELECT * FROM TypeScriptExpress.Users;')
  return result as IUsers[];
}

export default { getAll };