import React, { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive"
import styled from 'styled-components';
import { IoIosMenu } from "react-icons/io";
import { useHistory } from 'react-router';
import FooterComponent from './FooterComponent';

const HeaderComponent = (props) => {
    const [isLogin, setIsLogin] = useState(false); // 로그인 여부 관리하는 상태 값 
    const [sideMenu, setsideMenu] = useState(null); // 사이드 메뉴 관리하는 상태 값 
    const [menu, setMenu] = useState(false) // reactHooks    
    const [currentClick, setCurrentClick] = React.useState(null);
    const [prevClick, setPrevClick] = React.useState(null);

    //const history = useHistory();

    const isPc = useMediaQuery({
        query : "(min-width:1024px)"
    });

    const MenuItemClick = (e) => {
        setCurrentClick(e.target.id); // 해당 엘리먼트의 id값
        alert(e.target.id + " 눌렸습니다.")
        //history.push(`/${e.target.id}`);
    };

    if(isLogin){
        return (
            <HeaderContainer>
                {isPc? 
                    <PcContainer>
                        <Home>SoulPhos</Home>
                        <MenuBox>
                            <Menu id="introduction" onClick={MenuItemClick}>기업소개</Menu>
                            <Menu id="use" onClick={MenuItemClick}>사용법</Menu>
                            <Menu id="performance" onClick={MenuItemClick}>품질지표</Menu>
                            <Menu id="quality" onClick={MenuItemClick}>성능지표</Menu>
                        </MenuBox>
                        <LogBox>
                            <Log id="logout" onClick={MenuItemClick}>로그아웃</Log>  
                            <Log id="mypage" onClick={MenuItemClick}>마이페이지</Log>  
                        </LogBox> 
                    </PcContainer>
                    :
                    <MobileContainer>
                        <Home>SoulPhos</Home>
                        <Menubar onClick={() => menu ? setMenu(false) : setMenu(true)}>
                                         
                        <IoIosMenu/>
                                  
                        </Menubar> 
                    </MobileContainer>
                }
        </HeaderContainer> 
        );
    }
    return (
        <HeaderContainer>
                {isPc? 
                    <PcContainer>
                        <Home>SoulPhos</Home>
                        <MenuBox>
                            <Menu id="introduction" onClick={MenuItemClick}>기업소개</Menu>
                            <Menu id="use" onClick={MenuItemClick}>사용법</Menu>
                            <Menu id="performance" onClick={MenuItemClick}>품질지표</Menu>
                            <Menu id="quality" onClick={MenuItemClick}>성능지표</Menu>
                        </MenuBox>
                        <LogBox>
                            <Log id="login" onClick={MenuItemClick}>로그인</Log>  
                        </LogBox> 
                    </PcContainer>
                    :
                    <MobileContainer>
                        <Home>SoulPhos</Home>
                        <Menubar onClick={() => menu ? setMenu(false) : setMenu(true)}>
                                         
                        <IoIosMenu/>
                                  
                        </Menubar> 
                    </MobileContainer>
                }
        </HeaderContainer>     
    );
}

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: center;
`

const PcContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    align-items: center;
`

const MobileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    align-items: center;
`

const Home = styled.div`
    display: flex;
    font-size: 20px;
    color: black;
    font-weight: bold;
    font-family: Noto Sans KR;

    &:hover {
        cursor: grab;
    }
`

const MenuBox = styled.div`
    display: flex;
`

const Menu = styled.div`
    margin-right: 40px;
    color: black;
    font-family: Noto Sans KR;

    &:hover {
        cursor: grab;
        font-weight: bold;
    }
    
`

const Menubar = styled.div`
    display: flex;
    align-items:center;
    font-size: 30px;

    &:hover {
        cursor: grab;
    }
`

const LogBox = styled.div`
    display: flex;
    align-items:center;
`

const Log = styled.div`
    margin-left: 40px;
    color: black;
    font-family: Noto Sans KR;

    &:hover {
        cursor: grab;
        font-weight: bold;
    }
`

export default HeaderComponent;