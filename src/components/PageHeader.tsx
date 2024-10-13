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
  font-size: 2rem;
  font-weight: 700;
`;
