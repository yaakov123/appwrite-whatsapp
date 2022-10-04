import { Client, Account, Teams, Functions } from "appwrite";
import { ENDPOINT, PROJECT_ID } from "../config";

const client = new Client();
client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);

const team = new Teams(client);
const account = new Account(client);
const functions = new Functions(client);

export { client, account, team, functions };
