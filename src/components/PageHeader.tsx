"use client";

import styled from "styled-components";
import { ReactNode } from "react"; // ReactNode를 가져옵니다.

interface PageHeaderProps {
  children: ReactNode; // children prop의 타입을 지정합니다.
}

export default function PageHeader({ children }: PageHeaderProps) {
  return <Container>{children}</Container>;
}

const Container = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  background: white;
  border-radius: 16px;
  padding: 8px;
  margin: 20px 0;
  padding: 10px;
  letter-spacing: 1px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
`;
