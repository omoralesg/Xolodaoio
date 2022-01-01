import React from "react";
import styled from "styled-components";


function HeroSection(props) {
  const { x20211126_115930, xolodaoNft, frame52, joinDiscord, frame53 } = props;

  return (
    <HeroSection1>
      <OverlapGroup>
        <X20211126115930 src={x20211126_115930} />
        <XoloDaoNFT src={xolodaoNft} />
      </OverlapGroup>
      <Frame674>
        <Frame52 style={{ backgroundImage: `url(${frame52})` }}>
          <Image56Traced src="/img/image-56--traced--1@2x.svg" />
          <JoinDiscord>{joinDiscord}</JoinDiscord>
        </Frame52>
        <Frame53 src={frame53} />
      </Frame674>
    </HeroSection1>
  );
}

const HeroSection1 = styled.div`
  z-index: 1;
  width: 1440px;
  margin-top: 148px;
  display: flex;
  flex-direction: column;
  padding: 69px 0;
  align-items: flex-end;
  min-height: 1175px;
  background-color: var(--blue-charcoal);
`;

const OverlapGroup = styled.div`
  width: 1366px;
  height: 793px;
  position: relative;
  margin-right: -0.69px;
`;

const X20211126115930 = styled.img`
  position: absolute;
  width: 963px;
  height: 793px;
  top: 0;
  left: 403px;
`;

const XoloDaoNFT = styled.img`
  position: absolute;
  width: 553px;
  height: 258px;
  top: 319px;
  left: 0;
`;

const Frame674 = styled.div`
  width: 548px;
  align-self: center;
  margin-top: 159px;
  display: flex;
`;

const Frame52 = styled.div`
  height: 74px;
  display: flex;
  padding: 0 26px;
  align-items: center;
  min-width: 265px;
  border-radius: 10px;
  box-shadow: 0px 8.008383750915527px 8.008383750915527px #00000040;
  background-size: 100% 100%;
`;

const Image56Traced = styled.img`
  width: 38px;
  height: 42px;
`;

const JoinDiscord = styled.div`
  min-height: 30px;
  margin-left: 14px;
  min-width: 144px;
  font-family: var(--font-family-poppins);
  font-weight: 700;
  color: var(--white);
  font-size: 20px;
  letter-spacing: 0;
`;

const Frame53 = styled.img`
  margin-top: -0.2px;
  width: 282px;
  height: 90.5px;
  margin-left: 9.5px;
`;

export default HeroSection;
