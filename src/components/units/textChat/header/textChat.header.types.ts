export interface TextChatHeaderProps {
  isVideo: boolean;
  messages: Array<{ contents: string; isSent: boolean }>;
  messageLog: any;
  myId: string;
  roomId: string;
}
