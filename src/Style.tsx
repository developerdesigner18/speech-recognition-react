import { keyframes } from "@mui/material";

const borderAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const styles = {
  container: {
    height: "100vh",
    textAlign: "left",
    maxWidth: "400px",
    minWidth: "250px",
  },
  transcription: {
    color: "white",
    marginTop: "40px",
  },
  placeholder: {
    color: "gray",
    marginTop: "40px",
  },
  gray_text: {
    color: "gray",
  },
  btn_holder: {
    position: "fixed",
    bottom: "40px",
    left: "50%",
    transform: "translate(-50%, -0%)",
    textAlign: "center",
  },
  buttonContainer: {
    display: "inline-block",
    padding: "8px",
    borderRadius: "50%",
    background: "transparent",
    border: "2px solid #52256F",
    animation: `${borderAnimation} 1s infinite`,
  },
  iconButton: {
    background: "#2BA3D2",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    color: "black",
    "&:hover": {
      background: "#2BA3D2",
    },
  },
  start_btn_container: {
    display: "inline-block",
    padding: "8px",
    borderRadius: "50%",
    background: "transparent",
    border: "2px solid #52256F",
  },
};
