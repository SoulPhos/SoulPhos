import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import style from '../styles/style';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

const MypageVerify = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const [password, setPassword] = useState('');

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    function ConfirmClick() {
        alert('확인 클릭!');
    }

    return (
        <Container>
            <InnerContainer>

                <HeaderComponent />
                <ContentContainer>
                    <VerifyContainer>
                        <LogoTxt>비밀번호 확인</LogoTxt> 
                        <SmallTxt>안전한 조회를 위해 비밀번호를 한번 더 입력해주세요.</SmallTxt>

                        <input
                            style={styles.password}
                            type="password"
                            placeholder="비밀번호"
                            onChange={onChangePassword}
                            value={password} />
                        
                        <ConfirmBtn onClick={ConfirmClick}>확인</ConfirmBtn>
                    </VerifyContainer>

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

const VerifyContainer = styled.div`
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

const SmallTxt = styled.div`
    text-align: center;
    font-size: 14px;
    margin-top: 5px;   
`;

const ConfirmBtn = styled.div`
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

const styles = {
    password: {
        width: '100%',
        marginTop: '20px',
        padding: '5px 5px 5px 15px',
        borderColor: style.repBlue,
        border: '2px solid',
        color: style.black,
        height: '30px',
        fontSize: '15px',
        outline: 'none',
    },
};


export default MypageVerify;