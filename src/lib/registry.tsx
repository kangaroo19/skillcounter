"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import styled, { ServerStyleSheet, StyleSheetManager } from "styled-components";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  color: black;
`;

const Inner = styled.div`
  background: white;
  width: 500px;
  min-height: 100vh;
  &::-webkit-scrollbar {
    display: none;
  }
  box-sizing: content-box;
  height: 100%;
  overflow-y: scroll;
  position: relative;
  background-color: white;
  padding: 10px 20px;
`;
