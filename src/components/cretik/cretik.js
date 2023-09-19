import styled from "styled-components";

import { IMG_BACK2, IMG_CRETIK } from "../../assets/images";

const Cretik = () => {
  return (
    <CretikWrapper bgImg={IMG_BACK2}>
      <div className="top-div">
        <img src={IMG_CRETIK} alt={"cretik"} />
        <div className="info">
          <p className="p-1">Certik</p>
          <p className="p-2">Offical Partner</p>
        </div>
      </div>
    </CretikWrapper>
  );
};

const CretikWrapper = styled.div`
  width: 252px;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
  height: 252px;
  border-radius: 16px;

  background-image: url(${(p) => p.bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  * {
    box-sizing: border-box;
  }

  .top-div {
    border-radius: 16px;
    border: 1px solid rgba(234, 234, 255, 0.08);
    background: rgba(44, 45, 48, 0.24);
    backdrop-filter: blur(24px);
    padding: 24px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;

    img {
      border-radius: 50px;
    }

    .info {
      .p-1 {
        color: #fff;
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 133.333% */
        letter-spacing: -0.4px;
      }

      .p-2 {
        color: rgba(234, 234, 255, 0.6);
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 142.857% */
      }
    }
  }
`;

export default Cretik;
