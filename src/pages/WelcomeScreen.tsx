import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useNavigate } from "react-router-dom";
import { styles } from "../Style";

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
    <Box sx={styles.container}>
      <Typography sx={styles.placeholder}>
        Transcript of voice will show here...
      </Typography>
      <Box sx={styles.btn_holder}>
        <Typography sx={styles.gray_text}>Press here to start</Typography>
        <br />
        <Box className="button-container" sx={styles.start_btn_container}>
          <IconButton
            aria-label="delete"
            onClick={handleMicPermission}
            sx={styles.iconButton}
          >
            <KeyboardVoiceIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeScreen;
