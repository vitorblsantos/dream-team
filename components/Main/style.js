import styled from 'styled-components'

export const Background = styled.div`
  background: url("https://assets.website-files.com/6266f459f67ef662f852a434/626730bbbcc7f1c1a60c0367_bwf-bg2x-lowB.png");
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
`

export const Circle = styled.div`
  align-items: center;
  background: #ffeb0024;
  border-radius: 100px;
  display: flex;
  height: 200px;
  justify-content: center;
  width: 200px;

  @media (max-width: 992px) {
    margin: 0 0 20px;
  }
`

export const Container = styled.div`
  margin: 140px auto 0;
  max-width: 1200px;
  width: 100%;
`

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 4px;
`

export const Content = styled.span`
  color: hsla(0,0%,100%,.85);
  margin: 8px 0 0;
  text-align: center;
`
export const WrapperCircles = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
    align-items: center;
    flex-flow: column nowrap;
    justify-content: center;
  }
`

export const WrapperImages = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-flow: column nowrap;
    justify-content: center;
  }
`
