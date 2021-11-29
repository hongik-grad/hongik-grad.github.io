import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { mediaQuery } from "../styles/media";
import Footer from "./Footer";
import Header from "./Header";

const PageStyle = styled.div`
  background-color: #f7f8f9;
  height: 100%;
  justify-content: space-between;
  align-items: space-between;
  width: 24rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;

const StyledBody = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export interface PageTemplateProps {
  children?: React.ReactNode;
}

export default function PageTemplate(props: PageTemplateProps) {
  return (
    <PageStyle>
      <Header />
      <StyledBody>{props.children}</StyledBody>
      <Footer />
    </PageStyle>
  );
}
