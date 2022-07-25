export interface Chat {
  id?: string;
  avatar: string;
  name: string;
  secondaryText: string;
  time: string;
}

export interface Attachment {
  type: string;
}

export interface Message {
  chatId: string;
  text: string;
  sender: string;
  date: string;
  attachments?: Attachment[];
}
