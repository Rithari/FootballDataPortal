import { Socket } from "socket.io-client";

export interface ChatMessage {
  id: string;
  name: string;
  text: string;
}

export interface ChatBodyProps {
  messages: ChatMessage[];
  typingStatus: string;
  lastMessageRef: React.RefObject<HTMLDivElement>;
}

export interface ChatUser {
  socketID: string;
  userName: string;
}

export interface ChatPageProps {
  socket: Socket;
}
