import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import style from '../styles/style';

// 상업적으로 가능한 이미지 찾아서 변경하기!!!
import leftArrowBtn from '../assets/leftArrowBtn.png';
import rightArrowBtn from '../assets/rightArrowBtn.png';
import personal from '../assets/personal.png';
import company from '../assets/company.png';
import computerStore from '../assets/computerStore.png';

const BannerComponent = (props) => {
    //const [isLogin, setIsLogin] = React.useState(false);

    /* const isPc = useMediaQuery({
        query : "(min-width:1280px)"
    });
    const isTablet = useMediaQuery({
        query : "(min-width:768px) and (max-width:1279px)"
    });
    const isMobile = useMediaQuery({
        query : "(max-width:767px)"
    }); */

    const displayNumber = [0,1,2];

    const title = ["개인 컴퓨터를 테스트하고 싶은 사람이든", "구매한 컴퓨터를 테스트하고 싶은 사람이든", "기업 & 기관 회원이든" ] 
    
    const content = ["컴퓨터 성능시험을 앱을 다운로드 받아서\n무료로 합니다. 단, 성능 & 품질을 진단하시려면\n회원가입을 하고, 유료서비스를 결제해야\n이용 가능합니다.", 
                    "성능 시험과 품질 진단을 할 수 있습니다.\n그 진단 지표를 통해서\n질 좋고 우수한 제품을\n회원들에게 공급하며 신뢰를 쌓을 수 있습니다.", 
                    "사이트 계약 또는 개별 시스템 계약을 통해서\n성능 시험과 품질 진단을 할 수 있습니다.\n컴퓨터 시스템의 성능 및 기능 저하가 발생했을 때\n시험 진단 앱을 통하여 그 문제의 원인과 심도를\n검증할 수 있으면 적절한 대응을 하도록\n도와드릴 수 있습니다."];
    
    const [contentTxt, setContentTxt] = useState(0);

    function Next(idx){
        if(idx === 2)
            setContentTxt(0);
        else
         setContentTxt(idx+1);
    }

    function Previous(idx){
        if(idx === 0)
            setContentTxt(2);
        else
            setContentTxt(idx-1);
    }
    
    return (
        <Container>
            {/* 왼쪽 화살표 div*/}
            <LeftBtn onClick={()=>{Previous(contentTxt)}}/>

            {/* 배너 */}
            <BannerContainer>
                {/* 제목 */}
                <Title>{title[contentTxt]}</Title>

                {/* 내용, 이미지 */}
                <ContentContainer>
                    <Content>
                        {
                        content[contentTxt].split("\n").map((i, key) => {
                            return <p key={key}> {i}</p>;
                        })
                        }
                    </Content>
                    <Image imgNumber={contentTxt}/>
                </ContentContainer>
                <DisplayPageContainer>
                    {
                        displayNumber.map((idx, key) => {
                            if(key === contentTxt)
                                return <Circle CurrentPage = "true"/>
                            else
                                return <Circle CurrentPage = "false"/>
                        })
                    }
                </DisplayPageContainer>

            </BannerContainer>

            {/* 오른쪽 화살표 div*/}
            <RightBtn onClick={()=>{Next(contentTxt)}}/>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    //border: 1px solid;
    display: flex;
    flex-direction: row;
    color: #000; 
`;

const BannerContainer = styled.div`
    width: 90%;
    background: #fff;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 400px;

    @media screen and (max-width: 1120px) {
        justify-content: center;
        align-items: center;
    }
`;

const Title = styled.div`
    text-shadow: 1.5px 1px 0px #BDBDBD;
    font-size: 40px;
    margin-top: 100px;
    margin-left: 30px;

    @media screen and (min-width: 1280px){
        font-size: 43px;
    }

    @media screen and (max-width: 1120px) {
        font-size: 40px;  
        text-align: center;
        justify-content: center;
        margin-left: 0px;
        margin-top: 50px;
    }

    @media screen and (max-width: 1029px) {
        font-size: 38px;  
        text-align: center;
        justify-content: center;
        margin-left: 0px;
        margin-top: 50px;
    }

    @media screen and (max-width: 767px) {
        font-size: 35px;  
        text-align: center;
        justify-content: center;
    }
`;

const Content = styled.div`
    font-size: 20px;
    margin-top: 100px;
    margin-left: 30px;

    @media screen and (max-width: 1120px) {
        text-align: center;
        justify-content: center;
        margin-left: 0px;
        margin-top: 160px;
    }

    @media screen and (max-width: 1029px) {
        text-align: center;
        justify-content: center;
        margin-left: 0px;
        margin-top: 75px;
    }

    @media screen and (max-width: 780px) {
        font-size: 15px;
        text-align: center;        
        justify-content: center;
        margin-left: 0px;
`;

const Image = styled.div`
    width: 25%;
    height: 50%;
    background-size: contain;    
    background-repeat: no-repeat;

    position: absolute;
    margin-left: 40%;
    margin-top: 90px; 

    @media screen and (max-width: 1120px) {
        display: none;
    }

    ${(props) =>
        props.imgNumber === 0
            ? `background-image: url(${personal});`
            : props.imgNumber === 1
                ? `background-image: url(${computerStore});`
                : `background-image: url(${company});`}
`;

const DisplayPageContainer = styled.div `
    display: flex;
    flex-direction: row;

    width: 100%;
    margin-top: 15%;
    justify-content: center;
`;

const Circle = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 30px;
    border: 1px solid #000;
    margin: 0px 10px 0px 10px;
    
    ${(props) => props.CurrentPage === "true" ? `background: ${style.repBlue}}` : `background: #fff;`}
`;

const RightBtn = styled.div`
    width: 60px;
    height: 60px;
    background-size: contain;
    background-image: url(${rightArrowBtn});
    background-repeat: no-repeat;

    margin: 350px 10px 0px 10px;

    &:hover {
        cursor: grab;
    }

    @media screen and (max-width: 1120px) {
        width: 30px;
        height: 30px;
    }
`;

const LeftBtn = styled.div`
    width: 60px;
    height: 60px;
    background-size: contain;
    background-image: url(${leftArrowBtn});
    background-repeat: no-repeat;

    margin: 350px 10px 0px 10px;

    &:hover {
        cursor: grab;
    }

    @media screen and (max-width: 1120px) {
        width: 30px;
        height: 30px;
    }
`;

export default BannerComponent;