import { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

import { PUBLIC_ROUTES } from "../config/routes";
import { AppContext } from "../context/appcontext";

// Images
import { X_LETTER_VOXEL_1, X_LETTER_VOXEL_2 } from "../assets/images";

const Header = () => {
  const [moFlag, setMoFlag] = useState(false);

  const AppData = useContext(AppContext);
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Link to="/">
          <img src={X_LETTER_VOXEL_1} alt="logo"></img>
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
                  <img alt="north_east" />
                </NavLink>
              )
            )}
          </PageLinks>

          <HeaderRadioButtons>
            <ToggleModeBtn
              onClick={() => AppData.setModeFlag(!AppData.modeFlag)}
            >
              <img alt="toggleMode"></img>
            </ToggleModeBtn>
            <BuyVXLBtn to="#">
              Buy $VXL
              <img alt={"NORTH_EAST_LIGHT_24"}></img>
            </BuyVXLBtn>
          </HeaderRadioButtons>
        </MainHeader>
      </HeaderContainer>
      <MobileHeaderContainer flag={moFlag}>
        <img
          alt={"toggleMode"}
          className="toggle-mode"
          onClick={() => AppData.setModeFlag(!AppData.modeFlag)}
        ></img>
        <img src={X_LETTER_VOXEL_2}></img>
        <img
          alt={"menuIcon"}
          className="menu-icon"
          onClick={() => setMoFlag(!moFlag)}
        ></img>
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
                <img alt={"outDirectIcon_20"}></img>
              </NavLink>
            )
          )}
          <MobileBuyVXLBtn to={"#"}>
            Buy $VXL
            <img alt={"outDirectIcon_24"} />
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
  position: sticky;
  top: 0;
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
  @media screen and (max-width: 1200px) {
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

    img {
      content: url(${(p) => p.theme.outDirectIcon_20});
    }
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

  img {
    content: url(${(p) => p.theme.toggleMode});
  }
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
  color: #fff;

  img {
    content: url(${(p) => p.theme.NORTH_EAST_LIGHT_24});
  }
`;

const MobileBuyVXLBtn = styled(Link)`
  width: calc(100% - 32px);
  border-radius: 24px;
  border: 1px solid rgba(234, 234, 255, 0.08);
  background: #907acc;
  text-align: center;

  color: #fff !important;
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

  img {
    content: url(${(p) => p.theme.NORTH_EAST_LIGHT_24});
  }
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

  .toggle-mode {
    content: url(${(p) => p.theme.toggleMode});
  }
  .menu-icon {
    ${(p) =>
      !p.flag
        ? css`
            content: url(${(p) => p.theme.menuIcon_24});
          `
        : css`
            content: url(${(p) => p.theme.removeIcon_24});
          `}
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
  @media screen and (max-width: 1000px) {
    background-color: ${(p) => p.theme.opacitiedBgColor1};
  }
  z-index: -1;

  transition: bottom 0.3s;
`;

const MobilePageLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  /* background-color: ${(p) => p.theme.bgColor1}; */
  gap: 24px;
  padding: 36px 32px;

  border-radius: 0px 0px 40px 40px;
  border-bottom: 1px solid rgba(234, 234, 255, 0.08);
  background: ${(p) => p.theme.opacitiedBgColor2};
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
    img {
      content: url(${(p) => p.theme.outDirectIcon_20});
    }
  }
`;

export default Header;
