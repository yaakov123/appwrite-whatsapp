import { Client, Account } from "appwrite";

const client = new Client();
client.setEndpoint("http://localhost/v1").setProject("63053704131d0a8a3fb1");

const account = new Account(client);
export { client, account };
