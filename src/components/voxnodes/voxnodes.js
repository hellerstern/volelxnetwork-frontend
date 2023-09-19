import styled from "styled-components";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { X_LETTER_VOXEL_64 } from "../../assets/images";

const VoxNodes = () => {
  const [mySwiper, setMySwiper] = useState(null);
  const [snapIndex, setSnapIndex] = useState(0);

  useEffect(() => {
    console.log({ mySwiper });
  }, [mySwiper]);

  const NODE_INFOS = [
    {
      avatar: X_LETTER_VOXEL_64,
      title: "VoxNodes Node Network",
      desc: "Community run nodes and auto scaling and high speed",
    },
    {
      avatar: X_LETTER_VOXEL_64,
      title: "VoxNodes Node Network",
      desc: "Community run nodes and auto scaling and high speed",
    },
    {
      avatar: X_LETTER_VOXEL_64,
      title: "VoxNodes Node Network",
      desc: "Community run nodes and auto scaling and high speed",
    },
    {
      avatar: X_LETTER_VOXEL_64,
      title: "VoxNodes Node Network",
      desc: "Community run nodes and auto scaling and high speed",
    },
  ];

  return (
    <VoxNodesWrapper>
      <Swiper
        slidesPerView={1}
        modules={[Pagination]}
        onSwiper={(e) => setMySwiper(e)}
        onSlideChange={(e) => {
          setSnapIndex(e.activeIndex);
        }}
      >
        {NODE_INFOS.map((item, index) => (
          <SwiperSlide key={index}>
            <SwiperSlideDiv>
              <Avatar>
                <img src={item.avatar} alt="node-avatar" />
              </Avatar>
              <NodeInfo>
                <p className="node-p-1">{item.title}</p>
                <p className="node-p-2">{item.desc}</p>
              </NodeInfo>
            </SwiperSlideDiv>
          </SwiperSlide>
        ))}
      </Swiper>

      <SwiperController snapIndex={snapIndex}>
        <div className="nodes">
          {NODE_INFOS.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                mySwiper.slideTo(index, 300);
                setSnapIndex(index);
              }}
            />
          ))}
        </div>
        <p>
          {snapIndex + 1}/{NODE_INFOS.length}
        </p>
      </SwiperController>
    </VoxNodesWrapper>
  );
};

const VoxNodesWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 284px;
  border-radius: 16px 16px 0px 16px;
  border: 1px solid rgba(234, 234, 255, 0.08);
  backdrop-filter: blur(16px);
  background-color: ${(p) => p.theme.opacitiedBgColor3};
  padding: 20px;
`;

const SwiperSlideDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

const Avatar = styled.div`
  border-radius: 50px;
  min-width: 52px;
  max-width: 52px;
  max-height: 52px;
  min-height: 52px;
  overflow: hidden;
  img {
    transform: scale(1);
  }
`;

const NodeInfo = styled.div`
  .node-p-1 {
    color: ${(p) => p.theme.fontColor1};
    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.4px;
    margin-bottom: 8px;
  }
  .node-p-2 {
    color: ${(p) => p.theme.fontColor2};
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`;

const SwiperController = styled.div`
  float: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  margin-top: 10px;
  .nodes {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      width: 33px;
      border: 1px solid ${(p) => p.theme.bgColor3};
      cursor: pointer;
    }
    div: nth-child(${(p) => p.snapIndex + 1}) {
      border-color: ${(p) => p.theme.fontColor1};
    }
    gap: 7px;
  }

  color: ${(p) => p.theme.fontColor1};
`;

export default VoxNodes;
