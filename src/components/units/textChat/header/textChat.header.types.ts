export interface TextChatHeaderProps {
  isVideo: boolean;
  messages: Array<{ content: string; isSent: boolean }>;
}
