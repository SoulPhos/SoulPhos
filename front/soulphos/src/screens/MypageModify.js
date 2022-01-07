import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import style from '../styles/style';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import Modal from 'react-modal';

const MypageModify = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    
    const [name, setName] = React.useState("정세운"); // 이름 입력
    const [phone, setPhone] = React.useState(""); // 휴대폰 번호 입력
    const [password, setPassword] = useState("비밀번호");
    const [passwordVerify, setPasswordVerify] = React.useState("비밀번호 확인"); // 휴대폰 번호 입력
    const [email, setEmail] = useState(""); // 성별 입력

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const customModal = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.45)",
            zIndex: 10,
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '200px',
            overflow: 'hidden',
            borderRadius: 30,
            margin: '0',
            paddingRight: '5px',
            boxShadow: '5px 5px 22px #808080',
            zIndex: 100,
        },
    };

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    let subtitle;
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangePhone = (e) => {
        setPhone(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangePasswordVerify = (e) => {
        setPasswordVerify(e.target.value);
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    function modifyClick() {
        alert('수정 클릭!');
    }

    function secessionClick() {
        alert('탈퇴 클릭!');
    }

    return (
        <Container>
            <InnerContainer>

                <HeaderComponent />
                <ContentContainer>
                    <ModifyContainer>
                        <LogoTxt>회원정보 수정</LogoTxt> 

                        {/*성명*/}
                        <ModifyItemContainer>
                            <SubTxt>성명</SubTxt>
                            <input
                                style={styles.password}
                                type="text"
                                placeholder="성명"
                                onChange={onChangeName}
                                value={name} />
                        </ModifyItemContainer>

                        {/*휴대폰번호*/}
                        <ModifyItemContainer>
                            <SubTxt>휴대폰 번호</SubTxt>
                            <input
                                style={styles.password}
                                type="text"
                                placeholder="휴대폰 번호"
                                onChange={onChangePhone}
                                value={phone} />
                        </ModifyItemContainer>

                        {/*비밀번호*/}
                        <ModifyItemContainer>
                            <SubTxt>비밀번호</SubTxt>
                            <input
                                style={styles.password}
                                type="password"
                                placeholder="비밀번호"
                                onChange={onChangePassword}
                                value={password} />
                            <SubConditionTxt>비밀번호는 6~12자 특순문자 포함가능합니다.</SubConditionTxt>
                        </ModifyItemContainer>

                        {/*비밀번호 확인*/}
                        <ModifyItemContainer>
                            <SubTxt>비밀번호 확인</SubTxt>
                            <input
                                style={styles.password}
                                type="password"
                                placeholder="비밀번호 확인"
                                onChange={onChangePasswordVerify}
                                value={passwordVerify} />
                        </ModifyItemContainer>

                        {/*이메일*/}
                        <ModifyItemContainer>
                            <SubTxt>이메일</SubTxt>
                            <input
                                style={styles.password}
                                type="email"
                                placeholder="이메일"
                                onChange={onChangeEmail}
                                value={email} />
                        </ModifyItemContainer>

                        <ModifyBtn onClick={modifyClick}>수정</ModifyBtn>
                        <SecessionBtn onClick={openModal}>회원 탈퇴</SecessionBtn>

                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customModal}
                            contentLabel="Create Nickname Modal"
                            shouldCloseOnOverlayClick={false}
                            ariaHideApp={false}
                        >
                            <SubTxt style={{fontWeight: 'bold', fontSize: '25px'}}>정말 탈퇴를 하시겠습니까?</SubTxt>
                            <SubTxt style={{fontSize: '17px'}}>탈퇴하실 경우, 모든 정보가 삭제됩니다.</SubTxt>
                            <div>
                                <ModalCancelBtn onClick={closeModal}>아니요</ModalCancelBtn> 
                                <ModalOkBtn onClick={secessionClick}>예, 탈퇴하겠습니다</ModalOkBtn>
                            </div>
                        </Modal>

                    </ModifyContainer>
                    
                </ContentContainer>
                <FooterComponent />

            </InnerContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
`;

const ContentContainer = styled.div`
    width: 100%;
    height: 797px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModifyContainer = styled.div`
    width: 25%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LogoTxt = styled.div`
    text-align: center;
    font-size: 40px;
    font-weight: bold;   

`;

const ModifyItemContainer = styled.div`
    width: 100%;
    margin-top: 5px;   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SubTxt = styled.div`
    font-size: 20px;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5px 15px 5px 5px;
`;

const SubConditionTxt = styled.div`
    font-size: 10px;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5px 15px 5px 5px;
    color: ${style.repBlue};
`;


const ModifyBtn = styled.div`
    width: 100%;
    height: 40px;
    margin-top: 20px;    
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${style.repBlue};
    color: ${style.white};
    font-size: 22px;
    padding: 5px 5px 5px 15px;
    border-color: ${style.repBlue};
    border: 2px solid;

    &: hover{
        cursor: grab;
    }
`;

const SecessionBtn = styled.div`
    font-size: 20px;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 5px 5px 5px 22px;
    text-decoration: underline;

    &: hover{
        cursor: grab;
    }
`;

const ModalOkBtn = styled.div`
    margin-top: 10px;
    font-size: 17px;
    display: flex;
    width: 90%;
    height: 30px;
    justify-content: center;
    align-items: center;
    padding: 5px 5px 5px 22px;
    background-color: ${style.repBlue};
    border-radius: 0.5rem;
    color: white;

    &: hover{
        cursor: grab;
    }
`;

const ModalCancelBtn = styled.div`
    margin-top: 20px;   
    font-size: 17px;
    display: flex;
    width: 90%;
    height: 30px;
    justify-content: center;
    align-items: center;
    padding: 5px 5px 5px 22px;
    background-color: #e9ecef;
    border-radius: 0.5rem;

    &: hover{
        cursor: grab;
    }
`;

const styles = {
    password: {
        width: '100%',
        marginTop: '3px',
        padding: '5px 5px 5px 15px',
        borderColor: style.repBlue,
        border: '2px solid',
        color: style.black,
        height: '30px',
        fontSize: '15px',
        outline: 'none',
    },
};


export default MypageModify;