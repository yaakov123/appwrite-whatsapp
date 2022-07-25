import { Client, Account } from "appwrite";

const client = new Client();
client.setEndpoint("http://localhost/v1").setProject("62ddc2e6c56a664945ea");

const account = new Account(client);
export { client, account };
