import React from "react";
import styled from "styled-components";
import { Badge, Avatar, Button, Anchor } from "antd";
import { BellOutlined } from "@ant-design/icons";

const NavStyled = styled.div`
  position: sticky;
  z-index: 1;
  top: 0;
  height: 70px;
  background: #fff;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  h2 {
    font-weight: 600;
  }
  .anticon {
    font-size: 22px !important;
    transition: 0.3s;
    &:hover {
      opacity: 0.6;
    }
    &:active {
      color: #000;
    }
  }
  .ant-avatar {
    transition: 0.3s;
    &:hover {
      opacity: 0.6;
    }
  }
  .ant-anchor {
    gap: 25px;
    a {
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
    }
  }
  .ant-anchor-wrapper-horizontal {
    all: unset;
  }
  .ant-anchor-link {
    padding-block: 23px !important;
  }
  .ant-affix {
    min-width: 200px;
  }
`;

export default function Nav() {
  return (
    <NavStyled className="d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-center align-items-center gap-5 ms-5">
        <h2 className="m-0">Weelish</h2>
        <Anchor
          direction="horizontal"
          items={[
            {
              key: "part-1",
              href: "#part-1",
              title: "Home",
            },
            {
              key: "part-2",
              href: "#part-2",
              title: "Your class",
            },
            {
              key: "part-3",
              href: "#part-3",
              title: "Result",
            },
          ]}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center gap-4 me-5">
        <a className="me-2" href="#">
          <Badge dot>
            <BellOutlined
              style={{
                fontSize: 16,
              }}
            />
          </Badge>
        </a>
        <a href="#">
          <Avatar
            style={{
              backgroundColor: "#fde3cf",
              color: "#f56a00",
            }}
            size="large"
          >
            Qu
          </Avatar>
        </a>
      </div>
    </NavStyled>
  );
}
