import styled from "styled-components";

import { useState } from "react";

// Images
import { IMG_BACK1 } from "../assets/images";

import VoxNodes from "../components/voxnodes/voxnodes";
import Comp103k from "../components/comp103k/comp103k";
import Cretik from "../components/cretik/cretik";
import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "../config/routes";

const Home = () => {
  return (
    <HomeWrapper>
      <IntroDiv>
        <IntroDivContainer>
          <IntorDesc>
            <p className="intro-p-1">
              Swap, earn, and build on the decentralized crypto protocol
            </p>

            <p className="intro-p-2">
              Voxel X one of leading provider <br /> of technological platforms
              for projects in the emerging NFT, GameFi & Metaverse space{" "}
            </p>

            <WatchVideo>
              <WatchVideoBtn>
                <img alt="video-play" />
              </WatchVideoBtn>
              <WatchVideoDesc>
                <p>Watch voxel x Network</p>
                <p>video series</p>
              </WatchVideoDesc>
              h
            </WatchVideo>
          </IntorDesc>

          <InproPicture>
            <VoxNodes />
            <InproPictureWrapper>
              <img src={IMG_BACK1} alt="back1" />
            </InproPictureWrapper>
          </InproPicture>
        </IntroDivContainer>
      </IntroDiv>

      <JoinVoxel>
        <JoinVoxelDiv>
          <div className="left-div">
            <Comp103k />
            <Cretik />
          </div>
          <div className="right-div">
            <p className="joinvoxel-p-1">Join the</p>
            <p className="joinvoxel-p-2">Voxel X Revolution</p>
            <p className="joinvoxel-p-3">
              Voxel X Network is a community established ecosystem that believes
              DeFi is a vital resource to the Web3 economy in acquiring
              generational wealth distribution through collaboration and
              commerce in creating the largest free decentralized market the
              world has ever seen
            </p>

            <Link to={PUBLIC_ROUTES.pitchdeck}>
              {" "}
              Open Pitchdeck <img src="north_east_40" />
            </Link>
          </div>
        </JoinVoxelDiv>
      </JoinVoxel>

      <VoxelTech>
        <VoxelTechDiv>
          <h1>Hello</h1>
        </VoxelTechDiv>
      </VoxelTech>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  background-color: ${(p) => p.theme.bgColor1};
`;

const IntroDiv = styled.div`
  margin: auto;
  max-width: ${(p) => p.theme.maxWidth};
  padding: 0 48px;

  @media screen and (max-width: 1000px) {
    padding: 0 28px;
  }
`;

const IntroDivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: calc(100vh - 148px);
  padding-bottom: 48px;
  max-height: 700px;
  @media screen and (max-width: 1000px) {
    max-height: none;
    padding-bottom: 16px;
  }
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

const IntorDesc = styled.div`
  width: 50%;
  margin-top: 70px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
  .intro-p-1 {
    color: ${(p) => p.theme.fontColor1};
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 60px;

    font-style: normal;
    font-weight: 500;
    line-height: 60px;
    margin-bottom: 60px;
    @media screen and (max-width: 1300px) {
      font-size: 45px;
      line-height: 45px;
      margin-top: 32px;
      margin-bottom: 24px;
    }
    @media screen and (max-width: 1000px) {
      font-size: 30px;
      line-height: 30px;
    }
  }

  .intro-p-2 {
    width: 60%;
    @media screen and (max-width: 1300px) {
      width: 100%;
    }
    color: ${(p) => p.theme.fontColor1};
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 18px;

    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    @media screen and (max-width: 1300px) {
      font-size: 16px;
      line-height: 24px;
    }

    height: 60%;
    margin-bottom: 64px;
  }
`;
const WatchVideo = styled.div`
  width: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const WatchVideoBtn = styled.button`
  border-radius: 24px;
  border: 1px solid ${(p) => p.theme.borderColor1};
  background-color: transparent;
  outline: 0;
  padding: 12px 26px;
  img {
    content: url(${(p) => p.theme.videoPlay_24});
  }
`;

const InproPicture = styled.div`
  border-radius: 16px;
  height: 100%;
  position: relative;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
  img {
    height: 100%;
    float: right;
  }
`;

const InproPictureWrapper = styled.div`
  width: 664px;
  height: 100%;
  aspect-ratio: 664 / 656;
  @media screen and (max-width: 1300px) {
    width: 600px;
  }
  @media screen and (max-width: 1150px) {
    width: 500px;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
  }

  height: min-content;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 16px;
  background-color: #101112;
`;

const WatchVideoDesc = styled.div`
  p {
    color: ${(p) => p.theme.fontColor1};
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    white-space: nowrap;
  }
`;

const JoinVoxel = styled.div`
  background-color: ${(p) => p.theme.bgColor2};
  border-radius: 64px 64px 0px 0px;
  padding: 120px 48px;

  @media screen and (max-width: 1000px) {
    padding: 64px 16px;
  }
`;

const JoinVoxelDiv = styled.div`
  max-width: ${(p) => p.theme.maxWidth};
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 120px;

  @media screen and (max-width: 1200px) {
    gap: 60px;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 32px;
  }
  .left-div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;

    @media screen and (max-width: 560px) {
      flex-direction: column;
    }
    @media screen and (max-width: 450px) {
      width: 100%;
    }
  }

  .right-div {
    .joinvoxel-p-1 {
      color: ${(p) => p.theme.fontColor3};
      font-feature-settings: "clig" off, "liga" off;
      font-family: Manrope;
      font-size: 44px;
      font-style: normal;
      font-weight: 500;
      line-height: 44px; /* 100% */
    }

    .joinvoxel-p-2 {
      color: ${(p) => p.theme.fontColor1};
      font-feature-settings: "clig" off, "liga" off;
      font-family: Manrope;
      font-size: 44px;
      font-style: normal;
      font-weight: 500;
      line-height: 44px; /* 100% */
      margin-bottom: 44px;
    }
    .joinvoxel-p-1,
    .joinvoxel-p-2 {
      @media screen and (max-width: 1150px) {
        font-size: 36px;
      }
    }

    .joinvoxel-p-3 {
      color: ${(p) => p.theme.fontColor1};
      font-feature-settings: "clig" off, "liga" off;
      font-family: Manrope;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 150% */

      width: 532px;

      @media screen and (max-width: 1250px) {
        width: 95%;
      }
      margin-bottom: 32px;
    }

    a {
      border-radius: 24px;
      font-family: Manrope;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 150% */

      border: 1px solid ${(p) => p.theme.borderColor1};
      text-decoration: none;
      color: ${(p) => p.theme.fontColor1};
      padding: 12px 24px;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      width: min-content;
      white-space: nowrap;
      img {
        content: url(${(p) => p.theme.outDirectIcon_24});
      }
    }
  }
`;

const VoxelTech = styled.div`
  background-color: ${(p) => p.theme.bgColor2};
`;

const VoxelTechDiv = styled.div`
  border-radius: 64px 64px 0px 0px;
  background-color: ${(p) => p.theme.bgColor1};
  padding: 120px 48px;
  max-width: ${(p) => p.theme.maxWidth};
  margin: auto;
  @media screen and (max-width: 1000px) {
    padding: 64px 16px;
  }
`;

export default Home;
