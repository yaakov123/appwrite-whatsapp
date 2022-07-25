import { Client, Account, Databases } from "appwrite";

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("62dd4ad0bf4167370d5c");

const account = new Account(client);
const database = new Databases(client, "62dd4add1c4f79215863");

export { client, account, database };
