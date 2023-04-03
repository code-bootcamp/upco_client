export interface TextChatHeaderProps {
  isVideo: boolean;
  messages: Array<{ contents: string; isSent: boolean }>;
  userId: string;
  messageLog: any;
  myId: string;
  roomId: boolean;
}
