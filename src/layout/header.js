import { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

import { PUBLIC_ROUTES } from "../config/routes";
import { AppContext } from "../context/appcontext";

// Images
import { ImgLogo } from "../assets/images";

const Header = () => {
  const [moFlag, setMoFlag] = useState(false);

  const AppData = useContext(AppContext);
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Link to="/">
          <img src={ImgLogo} alt="logo"></img>
        </Link>

        <MainHeader>
          <PageLinks>
            {Object.keys(PUBLIC_ROUTES).map((item, index) =>
              PUBLIC_ROUTES[item].url !== "#" ? (
                <NavLink to={PUBLIC_ROUTES[item].url} key={index}>
                  {PUBLIC_ROUTES[item].title}
                </NavLink>
              ) : (
                <NavLink
                  className="with-icon"
                  to={PUBLIC_ROUTES[item].url}
                  key={index}
                >
                  {PUBLIC_ROUTES[item].title}
                  <svg width={"20"} height={"20"}>
                    <react width={"20"} height={"20"} style={{ fill: "red" }} />
                  </svg>
                </NavLink>
              )
            )}
          </PageLinks>

          <HeaderRadioButtons>
            <ToggleModeBtn
              onClick={() => AppData.setModeFlag(!AppData.modeFlag)}
            >
              <svg width={"24"} height="24"></svg>
            </ToggleModeBtn>
            <BuyVXLBtn to="#">
              Buy $VXL
              <svg width={"24"} height="24"></svg>
            </BuyVXLBtn>
          </HeaderRadioButtons>
        </MainHeader>
      </HeaderContainer>
      <MobileHeaderContainer>
        <svg
          width={"24"}
          height={"24"}
          onClick={() => AppData.setModeFlag(!AppData.modeFlag)}
        ></svg>
        <svg width={"41"} height={"48"}></svg>
        <svg
          width={"24"}
          height={"24"}
          onClick={() => setMoFlag(!moFlag)}
        ></svg>
      </MobileHeaderContainer>

      <MobileMainHeader flag={moFlag}>
        <MobilePageLinks>
          {Object.keys(PUBLIC_ROUTES).map((item, index) =>
            PUBLIC_ROUTES[item].url !== "#" ? (
              <NavLink to={PUBLIC_ROUTES[item].url} key={index}>
                {PUBLIC_ROUTES[item].title}
              </NavLink>
            ) : (
              <NavLink
                className="with-icon"
                to={"https://google.com"}
                key={index}
              >
                {PUBLIC_ROUTES[item].title}
                <svg width={"20"} height={"20"}>
                  <react width={"20"} height={"20"} style={{ fill: "red" }} />
                </svg>
              </NavLink>
            )
          )}
          <MobileBuyVXLBtn to={"#"}>
            Buy $VXL
            <svg width={"24"} height={"24"}></svg>
          </MobileBuyVXLBtn>
        </MobilePageLinks>
      </MobileMainHeader>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  background-color: ${(p) => p.theme.bgColor1};
  position: relative;
  z-index: 2;
`;

const HeaderContainer = styled.div`
  max-width: ${(p) => p.theme.maxWidth};
  padding: 18px 48px;
  margin: auto;
  display: flex;
  @media screen and (max-width: 1000px) {
    display: none;
  }
  align-items: center;
  justify-content: space-between;
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 109px;

  @media screen and (max-width: 1300px) {
    gap: 50px;
  }
`;

const PageLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  @media screen and (max-width: 1500px) {
    gap: 20px;
  }
  a {
    text-decoration: none;
    color: ${(p) => p.theme.fontColor1};
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }

  .with-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;

const HeaderRadioButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const ToggleModeBtn = styled.button`
  padding: 12px 24px;
  border-radius: 24px;
  border: 1px solid ${(p) => p.theme.borderColor1};
  background-color: transparent;
`;

const BuyVXLBtn = styled(Link)`
  padding: 12px 24px;
  border-radius: 24px;
  border: 1px solid ${(p) => p.theme.borderColor1};
  background: #907acc;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  color: ${(p) => p.theme.fontColor1};
`;

const MobileBuyVXLBtn = styled(Link)`
  width: calc(100% - 32px);
  border-radius: 24px;
  border: 1px solid rgba(234, 234, 255, 0.08);
  background: #907acc;
  text-align: center;

  color: #fff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;

  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const MobileHeaderContainer = styled.div`
  display: none;
  @media screen and (max-width: 1000px) {
    display: flex;
  }
  background-color: ${(p) => p.theme.bgColor1};
  padding: 16px 28px;
  justify-content: space-between;
  align-items: center;

  svg {
    background-color: red;
  }
`;

const MobileMainHeader = styled.div`
  position: absolute;
  ${(p) =>
    p.flag
      ? css`
          bottom: calc(-100vh + 80px);
        `
      : css`
          bottom: 0;
        `}

  width: 100%;
  height: calc(100vh - 80px);
  background-color: ${(p) => p.theme.opacitiedBgColor1};
  z-index: -1;

  transition: bottom 0.3s;
`;

const MobilePageLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${(p) => p.theme.bgColor1};
  gap: 24px;
  padding: 36px 32px;

  border-radius: 0px 0px 40px 40px;
  border-bottom: 1px solid rgba(234, 234, 255, 0.08);
  background: rgba(44, 45, 48, 0.48);
  backdrop-filter: blur(16px);

  a {
    text-decoration: none;
    color: ${(p) => p.theme.fontColor1};
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }

  .with-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;

export default Header;
