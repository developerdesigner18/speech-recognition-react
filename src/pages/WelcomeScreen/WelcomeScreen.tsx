import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useNavigate } from "react-router-dom";

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleMicPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      navigate("/transcribingScreen");
    } catch (error) {
      console.error("Error requesting microphone permission:", error);
    }
  };

  return (
    <Box sx={{ height: "100vh", textAlign: "left", maxWidth: "400px" }}>
      <Typography sx={{ color: "gray", marginTop: "40px" }}>
        Transcript of voice will show here...
      </Typography>
      <Box
        sx={{
          position: "fixed",
          bottom: "40px",
          left: " 50%",
          transform: "translate(-50%, -0%)",
          textAlign: "center",
        }}
      >
        <Typography sx={{ color: "gray" }}>Press here to start</Typography>
        <br />
        <Box
          className="button-container"
          sx={{
            display: "inline-block",
            padding: "8px", // Adjust the padding to control the gap size
            borderRadius: "50%",
            background: "transparent",
            border: "2px solid #52256F",
          }}
        >
          <IconButton
            aria-label="delete"
            onClick={handleMicPermission}
            sx={{
              background: "#2BA3D2",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              color: "black",
              "&:hover": {
                background: "#2BA3D2",
              },
            }}
          >
            <KeyboardVoiceIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeScreen;
