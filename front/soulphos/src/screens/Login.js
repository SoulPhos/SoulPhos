import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import style from '../styles/style';

const Login = (props) => {
    const [isLogin, setIsLogin] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const onChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    function LoginClick() {
        alert('클릭 로그인!');
    }

    var size = { width: window.innerWidth || document.body.clientWidth, height: window.innerHeight || document.body.clientHeight };

    return (
        <Container>
            <InnerContainer>

                <HeaderContainer />
                <ContentContainer>
                    <LoginContainer>
                        <LogoTxt>SoulPhos</LogoTxt>
                        <SmallTxt>성능을 넘어 품질까지 검사해보세요!</SmallTxt>

                        <input
                            style={styles.phone}
                            type="text"
                            placeholder="휴대폰 번호 EX) 01012345678"
                            onChange={onChangePhoneNumber}
                            value={phoneNumber} />

                        <input
                            style={styles.password}
                            type="password"
                            placeholder="비밀번호"
                            onChange={onChangePassword}
                            value={password} />

                        <LoginBtn onClick={LoginClick}>로그인</LoginBtn>

                        <FindContainer>
                            <FindId>아이디 찾기</FindId>
                            |
                            <FindPassword>비밀번호 재설정</FindPassword>
                        </FindContainer>

                        <JoinContainer>
                            <JoinTxt>컴바존에 가입하지 않으셨나요? </JoinTxt>
                            <JoinBtn>회원가입</JoinBtn>
                        </JoinContainer>

                    </LoginContainer>

                </ContentContainer>
                <FooterContainer />

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
    width: 1280px;
    height: 797px;
`;

const HeaderContainer = styled.div`
    width: 1280px;
    height: 120px;
    background-color: green;
`;

const FooterContainer = styled.div`
    width: 1280px;
    height: 120px;
    background-color: #000;
    border: 1px solid;
`;

const ContentContainer = styled.div`
    width: 1280px;
    height: 797px;
    border: 1px solid;
    display: flex;
    align-items: center;
`;

const LoginContainer = styled.div`
    width: 500px;
    height: 500px;
    position: absolute;
    margin-left: 400px;
    //margin-top: 150px;
    //border: 1px solid;
`;

const LogoTxt = styled.div`
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    margin-top: 90px;    
`;

const SmallTxt = styled.div`
    text-align: center;
    font-size: 14px;
    margin-top: 5px;   
    color: ${style.black};
`;

const LoginBtn = styled.div`
    width: 372px;
    height: 40px;
    margin-top: 10px;    
    margin-left: 13%;
    background: ${style.repBlue};
    color: ${style.white};
    text-align: center;
    padding-top: 5px;
    font-size: 22px;

    &: hover{
        cursor: grab;
    }
`;

const FindContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    text-align: center;
    font-weight: bold;
`;

const FindId = styled.div`
    width: 100px;

    &: hover{
        cursor: grab;
    }
`;

const FindPassword = styled.div`
    width: 120px;
    margin-left: 5px;

    &: hover{
        cursor: grab;
    }
`;

const JoinContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 5px;
  //  text-align: center;
`;

const JoinTxt = styled.div`
    width: 250px;
    margin-left: 60px;
`;

const JoinBtn = styled.div`
    width: 120px;
    font-weight: bold;

    &: hover{
        cursor: grab;
    }
`;
const styles = {
    phone: {
        width: '70%',
        marginTop: '30px',
        marginLeft: '13%',
        padding: '5px 5px 5px 15px',
        borderColor: style.repBlue,
        border: '2px solid',
        color: style.black,
        height: '30px',
        fontSize: '15px',
    },
    password: {
        width: '70%',
        marginTop: '10px',
        marginLeft: '13%',
        marginBottom: '10px',
        padding: '5px 5px 5px 15px',
        borderColor: style.repBlue,
        border: '2px solid',
        color: style.black,
        height: '30px',
        fontSize: '15px',
    },
};

export default Login;