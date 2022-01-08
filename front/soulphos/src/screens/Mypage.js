import React from 'react';
import styled from 'styled-components';
import style from '../styles/style';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { IoMdPerson } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";

const Mypage = (props) => {
    
    function ModifyInfoClick() {
        alert('내 정보 수정 클릭!');
    }

    function CashClick() {
        alert('결제 수단 변경 클릭!');
    }

    function ConfirmClick() {
        alert('내 컴퓨터 성능 수치 확인하기 클릭!');
    }

    return (
        <Container>
            <InnerContainer>

                <HeaderComponent />
                 
                <ContentContainer>
                    {/* 마이페이지 최상단 컨테이너*/}
                    <MypageContainer>
                        {/* 이름, 내 정보 수정 컨테이너*/}
                        <MypageInfoContainer>
                            <RowContainer content="flex-start">
                                <IoMdPerson size="30" color="#002187"/> 
                                <Txt size="25px" weight="bold" margin="0px 5px 0px 5px">홍길동</Txt>
                                <Txt size="20px" color="gray" margin="0px 15px 0px 0px">님 안녕하세요.</Txt>
                                <Btn onClick={ModifyInfoClick}>회원 정보 변경</Btn>
                            </RowContainer>
                        </MypageInfoContainer>

                        {/* 횟수, 사용금액 요약 */}
                        <RowContainer content="flex-end" margin="15px 0px 15px 0px">
                            <Btn onClick={ConfirmClick}>내 컴퓨터 성능 수치로 확인하기</Btn>
                        </RowContainer>
                        
                        <MypageSummaryContainer>
                            <RowContainer content="center">
                                <ColumnContainer>
                                    <Txt size="30px" weight="bold">사용횟수</Txt>
                                    <Txt size="30px" weight="bold" color="#002187">2회</Txt>
                                </ColumnContainer>
                            </RowContainer>
                            <RowContainer content="center">
                                <ColumnContainer>
                                    <Txt size="30px" weight="bold">총 사용 금액</Txt>
                                    <Txt size="30px" weight="bold" color="#F29C1B">100,000원</Txt>
                                </ColumnContainer>
                            </RowContainer>
                        </MypageSummaryContainer> 
                    
                        {/* 청구서 */}
                        <RowContainer content="flex-end" margin="15px 0px 15px 0px">
                            <Btn onClick={CashClick}>결제 수단 변경</Btn>
                        </RowContainer>
                        <MypageBillContainer>
                             {/* 청구 요금 및 사용 기간*/}
                            <RowContainer content="center">
                                <ColumnContainer>
                                    <Txt size="15px" color="gray" margin="20px 0px 0px 0px">사용기간 : 2021.11.01 ~ 2021.11.30</Txt>
                                    <Txt size="30px" weight="bold">12월 청구요금</Txt>
                                    
                                </ColumnContainer>
                            </RowContainer>
                            <RowContainer content="center">
                                <ColumnContainer>
                                    {/* 월 요금*/}
                                    <RowContainer content="center">
                                        <Txt size="30px" weight="bold" color="#002187">19,300 원</Txt> 
                                    </RowContainer>
                                        
                                    {/* 요금 요약*/}
                                    <RowContainer content="space-between" margin="20px 0px 0px 0px">
                                        <ColumnContainer>
                                            <Txt>이용 금액</Txt>
                                            <Txt weight="bold" color="#002187">35,755 원</Txt>
                                        </ColumnContainer>
                                        <IoIosRemoveCircle size="20" color='gray'/>
                                        <ColumnContainer>
                                            <Txt >할인 금액</Txt>
                                            <Txt weight="bold" color="#002187">35,755 원</Txt>
                                        </ColumnContainer>
                                    </RowContainer>
                                </ColumnContainer>
                            </RowContainer>
                        </MypageBillContainer>
                    </MypageContainer>
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

const MypageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MypageInfoContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MypageBillContainer = styled.div`
    width: 80%;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
   
    @media screen and (max-width: 767px){
        flex-flow: row wrap;
    } 
    
`;

const MypageSummaryContainer = styled.div`
    width: 80%;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    @media screen and (max-width: 767px){
        flex-flow: row wrap;
    } 
    
    
`;

const Txt = styled.div`
    font-size: ${(props) => props.size}; 
    font-weight: ${(props) => props.weight};
    margin: ${(props) => props.margin}; // 상 우 하 좌(시계방향)
    color: ${(props) => props.color};

    @media screen and (max-width: 767px){
        font-size: 70%;
    } 

`;

const Btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${style.repBlue};
    border-radius: 0.2rem;
    color: ${style.repBlue}; 
    width: ${(props) => props.width}; 
    height: ${(props) => props.height}; 
    padding: 5px;
    font-size: 13px;

    &: hover{
        cursor: grab;
        color: white; 
        background-color: ${style.repBlue};
    }
`;

const RowContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => props.content};
    margin: ${(props) => props.margin};
    align-items: flex-end;
`;

const ColumnContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1300px){
        width: 100%;
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


export default Mypage;