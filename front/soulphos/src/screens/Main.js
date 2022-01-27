import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import style from '../styles/style';
import BannerComponent from '../components/BannerComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
//import { useLocation, useHistory } from 'react-router';

const Main = (props) => {
    //const location = useLocation();
    //const history = useHistory();

    const [isLogin, setIsLogin] = useState(false);

    var size = { width: window.innerWidth || document.body.clientWidth, height: window.innerHeight || document.body.clientHeight };

    return (
        <Container>
            <InnerContainer>

                <HeaderComponent />
                <ContentContainer>

                    <BannerComponent />

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

const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: green;
`;

const FooterContainer = styled.div`
    width: 100%;
    height: 80px;
    background-color: #000;
    border: 1px solid;
`;

const ContentContainer = styled.div`
    width: 100%;
    height: 797px;
    //border: 1px solid;
    display: flex;
    align-items: center;
`;

export default Main;