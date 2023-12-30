import React from "react";
import styled from "styled-components";
import {} from "antd";
import {} from "@ant-design/icons";
import Nav from "../components/Nav";
import Content from "../components/Content";

const ContainerStyled = styled.div`
  min-height: 1000px;
  background: #e7f9f9;
`;

export default function HomePage() {
  return (
    <ContainerStyled>
      <Nav />
      <Content />
    </ContainerStyled>
  );
}
