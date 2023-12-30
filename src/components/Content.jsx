import React from "react";
import styled from "styled-components";
import {} from "antd";
import {} from "@ant-design/icons";

const ContentStyled = styled.div``;

export default function Content() {
  return (
    <ContentStyled>
      <div>
        <div
          id="part-1"
          style={{
            width: "100%",
            height: "100vh",
            textAlign: "center",
            background: "rgba(0,255,0,0.02)",
          }}
        />
        <div
          id="part-2"
          style={{
            width: "100%",
            height: "100vh",
            textAlign: "center",
            background: "rgba(0,0,255,0.02)",
          }}
        />
        <div
          id="part-3"
          style={{
            width: "100%",
            height: "100vh",
            textAlign: "center",
            background: "#FFFBE9",
          }}
        />
      </div>
    </ContentStyled>
  );
}
