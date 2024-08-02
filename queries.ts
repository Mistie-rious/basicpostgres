import { Request, NextFunction, Response } from "express"

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'firstapi',
  password: 'mistymisty',
  port: 5432,
})

export const query = (text: string, params: any[]) => pool.query(text, params);
