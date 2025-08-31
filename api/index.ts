import jsonServer from "json-server";
import { VercelRequest, VercelResponse } from "@vercel/node";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default server;
