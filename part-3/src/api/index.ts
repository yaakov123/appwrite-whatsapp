import { Client, Account } from "appwrite";

const client = new Client();
client.setEndpoint("http://localhost/v1").setProject("630d0d8955f7e8abcd75");

const account = new Account(client);
export { client, account };
