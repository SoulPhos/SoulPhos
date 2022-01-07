import React from 'react';
import styled from 'styled-components';

const FooterComponent = (props) => {
    
    return (
            
        <FooterContainer>
                <FooterContent>(주) 솔포스</FooterContent>
                <FooterContent>서울 광나루로 9가길 10 대표이사 김창선</FooterContent>
                <FooterContent>TEL: 010-5309-7884 </FooterContent>
                <FooterContent>MAIL: petercskim01@naver.com</FooterContent>
                <FooterContent>COPYRIGHT ⓒ SOULPHOS COMPANY. ALL RIGHTS RESERVED.</FooterContent>   
        </FooterContainer>      
            
    );
}

const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: center;
    background-color: white;
    flex-direction: column;
`
const FooterContent = styled.div`
    color: gray;
    font-size: 5px;
`


export default FooterComponent;