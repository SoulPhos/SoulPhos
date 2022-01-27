import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate  } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import style from '../styles/style';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

const QualityIndicator = (props) => {
    const is_login = useSelector((state) => state.user.is_login); // 로그인 여부 관리하는 상태 값

    return (
        <Container>
            <InnerContainer>

                <HeaderComponent />
                <ContentContainer>  
                    품질지표 페이지 준비중입니다.
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

export default QualityIndicator;