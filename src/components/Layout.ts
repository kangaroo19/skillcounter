"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  height: 100vh; /* 전체 높이를 차지 */
`;

export const Content = styled.div`
  width: 500px; /* 500픽셀 고정 폭 */
  height: 100%;
  background-color: #f0f0f0; /* 예시 배경색 */
  padding: 20px; /* 내부 여백 */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* 약간의 그림자 */
  border-radius: 8px; /* 모서리 둥글게 */
  color: black;
  padding: 10px 20px;
`;
