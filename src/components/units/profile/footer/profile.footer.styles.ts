import styled from "@emotion/styled";
import { ITitleProps } from "./profile.footer.types";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;

  > div {
    display: flex;
    flex-direction: row;
    padding-bottom: 15px;
    border-bottom: 2px solid #191919;
    margin-bottom: 30px;
  }
`;

export const Title = styled.h4`
  font-size: 18px;
  margin-right: 20px;
  cursor: pointer;
  user-select: none;

  :first-of-type {
    color: ${(props: ITitleProps) => (props.isSelector === "follow" ? "#191919" : "#979797")};
  }

  :last-of-type {
    color: ${(props) => (props.isSelector === "block" ? "#191919" : "#979797")};
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
