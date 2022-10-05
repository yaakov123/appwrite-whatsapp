import { Query } from "appwrite";
import { databases } from ".";
import { COLLECTION } from "../config";

export interface Contact {
  userId: string;
  contactId: string;
  email: string;
}

export async function getContacts(userId: string): Promise<Contact[]> {
  return databases
    .listDocuments(COLLECTION.contacts, [Query.equal("user_id", userId)])
    .then((result) => {
      return result.documents.map((doc) => {
        return {
          userId: doc.user_id,
          contactId: doc.contact_id,
          email: doc.email,
        };
      });
    });
}
