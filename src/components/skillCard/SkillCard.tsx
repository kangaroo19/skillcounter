"use client";

import {
  Box,
  LinearProgress,
  LinearProgressProps,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import LogoIcon from "./components/LogoIcon";

export default function SkillCard(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          width: "10%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LogoIcon />
      </div>
      <div style={{ width: "90%;" }}>
        <Box>React.js</Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              variant="determinate"
              {...props}
              sx={{ height: 25, borderRadius: 25 }}
            />
          </Box>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-item: center;
  width: 100%;
`;
