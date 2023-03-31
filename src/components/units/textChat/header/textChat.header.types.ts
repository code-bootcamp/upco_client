export interface TextChatHeaderProps {
  isVideo: boolean;
  messages: Array<{ contents: string; isSent: boolean }>;
  userId: string;
  userJoinedMessageRef: React.RefObject<HTMLParagraphElement>;
  messageLog: any;
  myId: string;
}
