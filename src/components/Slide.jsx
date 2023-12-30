import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import {} from "@ant-design/icons";

const SlideStyled = styled.div``;
const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Slide() {
  return (
    <SlideStyled>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </SlideStyled>
  );
}
