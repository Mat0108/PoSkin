import React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const ProgressBar = ({ percent, reversed, color, bcolor, height }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: height ?? 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#EEE8E4",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#264C4D" 
    },
  }));

  return <BorderLinearProgress variant="determinate" value={percent} />;
};

export default ProgressBar;
