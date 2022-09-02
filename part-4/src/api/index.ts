import { Client, Account } from "appwrite";

const client = new Client();
client.setEndpoint("http://localhost/v1").setProject("6311ed140c2ab43be621");

const account = new Account(client);
export { client, account };
