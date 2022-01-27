import React from 'react';
import styled from 'styled-components';

const FooterComponent = (props) => {
    
    return (
            
        <FooterContainer>
                <FooterContent>(주) 솔포스</FooterContent>
                <FooterContent>MAIL: soulphos22@gmail.com</FooterContent>
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