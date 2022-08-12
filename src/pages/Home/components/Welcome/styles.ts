import styled from "styled-components";

export const MainContainer = styled.div`
  height: 45.3rem;
  padding: 32px 160px 32px 160px;
  
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  position: absolute;
  width: 588px;
  height: 192px;
  left: calc(50% - 588px/2 - 266px);
  top: calc(50% - 192px/2 - 82px);
`

export const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  width: 567px;
  height: 84px;
  left: calc(50% - 567px/2 - 276.5px);
  top: calc(50% - 84px/2 + 122px);
`

export const ImageContainer = styled.div`
  position: absolute;
  width: 476px;
  height: 360px;
  left: calc(50% - 476px/2 + 322px);
  top: calc(50% - 360px/2);
`

export const Title = styled.div`  
  /* width: 50px; */
  height: 45px;

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;
    color: #574F4D;
  }
`
