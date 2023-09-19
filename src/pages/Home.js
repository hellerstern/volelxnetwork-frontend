import styled from "styled-components";

// Images
import { IMG_BACK1 } from "../assets/images";

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
            </WatchVideo>
          </IntorDesc>

          <InproPicture>
            <InproPictureWrapper>
              <img src={IMG_BACK1} alt="back1" />
            </InproPictureWrapper>
          </InproPicture>
        </IntroDivContainer>
      </IntroDiv>
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
    }
  }

  .intro-p-2 {
    width: 60%;
    color: ${(p) => p.theme.fontColor1};
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;

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

export default Home;
