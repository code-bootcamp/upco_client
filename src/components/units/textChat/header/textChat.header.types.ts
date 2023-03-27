export interface TextChatHeaderProps {
  isVideo: boolean;
  messages: Array<{ content: string; isSent: boolean; isUserJoinedMessage: boolean }>;
  userId: string;
  userJoinedMessageRef: React.RefObject<HTMLParagraphElement>;
}
