import FindUI from "../../commons/items/modal/find/find.index";
import JoinUI from "../../commons/items/modal/join/join.index";
import LoginUI from "../../commons/items/modal/login/login.index";
import HomeBody from "./body/home.body.index";
import HomeHeader from "./header/home.header.index";
import { useRecoilState } from "recoil";
import { isFindState, isJoinState, isLoginState, showModalState } from "../../commons/stores";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";

export default function HomeUIPage(): JSX.Element {
  const [isOpen, setIsOpen] = useRecoilState(isLoginState);
  const [isJoin, setIsJoin] = useRecoilState(isJoinState);
  const [isFind, setIsFind] = useRecoilState(isFindState);
  const [showModal, setShowModal] = useRecoilState(showModalState);
  const router = useRouter();

  const onClickOpen = (open: string) => (): void => {
    if (open === "login") {
      setIsOpen((prev) => !prev);
    } else if (open === "join") {
      setIsJoin((prev) => !prev);
    }
  };
  const handleCloseModal = (): void => {
    setShowModal(false);
    router.push("/main");
  };

  return (
    <>
      {isOpen && <LoginUI setIsOpen={setIsOpen} setIsJoin={setIsJoin} setIsFind={setIsFind} />}
      {isJoin && <JoinUI setIsJoin={setIsJoin} setIsOpen={setIsOpen} />}
      {isFind && <FindUI setIsOpen={setIsOpen} setIsFind={setIsFind} />}
      <HomeHeader onClickOpen={onClickOpen} />
      <HomeBody onClickOpen={onClickOpen} />
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        style={{
          display: "flex",
          justifyContent: "row",
          flexDirection: "center",
        }}
      >
        <Modal.Body style={{ textAlign: "center" }}>
          {!isOpen ? "로그인 되었습니다." : "회원가입 되었습니다."}
        </Modal.Body>
        <Modal.Footer style={{ border: "none" }}>
          <Button
            style={{ backgroundColor: "#6658CA", borderColor: "#6658CA" }}
            onClick={handleCloseModal}
          >
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
