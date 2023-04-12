import { useRecoilState } from "recoil";
import { isCloseState, isFollowerState, selectedComponentState } from "../../stores";

export const mainFooterMode = (): {
  handleChatClick: () => void;
  handleFollowerClick: () => void;
  followerOpen: () => void;
} => {
  const [_, setIsClose] = useRecoilState(isCloseState);
  const [selectedComponent, setSelectedComponent] = useRecoilState(selectedComponentState);
  const [isFollower, setIsFollower] = useRecoilState(isFollowerState);

  const handleChatClick = (): void => {
    setSelectedComponent("location");
    setIsClose(false);
  };

  const handleFollowerClick = (): void => {
    setSelectedComponent("follower");
    setIsClose(false);
  };

  const followerOpen = (): void => {
    setIsFollower((prev) => !prev);
    if (window.innerWidth <= 767) {
      setIsClose(true);
    }
  };

  return {
    handleChatClick,
    handleFollowerClick,
    followerOpen,
  };
};
