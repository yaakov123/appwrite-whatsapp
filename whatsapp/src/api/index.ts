import { Client, Account } from "appwrite";

const client = new Client();
client.setEndpoint("http://localhost/v1").setProject("62dffd8e3cad4aed6f47");

const account = new Account(client);
export { client, account };
