import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, IconButton, keyframes } from "@mui/material";
import StopIcon from "@mui/icons-material/Stop";

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
const TranscribingScreen: React.FC = () => {
  const [transcription, setTranscription] = useState<string>("");
  const [recognition, setRecognition] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initRecognition = () => {
      const newRecognition = new (window as any).webkitSpeechRecognition();
      newRecognition.lang = "en-US";
      newRecognition.continuous = true;

      newRecognition.onresult = (event: any) => {
        const transcript =
          event.results[event.results.length - 1][0].transcript;
        setTranscription((prev) => prev + transcript);
      };

      newRecognition.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
      };

      newRecognition.start();
      setRecognition(newRecognition);
    };

    if (!recognition) {
      initRecognition();
    }
  }, [recognition]);

  const handleStopTranscription = () => {
    if (recognition) {
      recognition.stop();
      setRecognition(null);
      navigate("/");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        textAlign: "left",
        maxWidth: "400px",
        minWidth: "250px",
      }}
    >
      <Typography sx={{ color: "white", marginTop: "40px" }}>
        {transcription}
      </Typography>
      <Box
        sx={{
          position: "fixed",
          bottom: "40px",
          left: "50%",
          transform: "translate(-50%, -0%)",
          textAlign: "center",
        }}
      >
        <Typography sx={{ color: "gray" }}>Press here to stop</Typography>
        <br />
        <Box
          className="button-container"
          sx={{
            display: "inline-block",
            padding: "8px",
            borderRadius: "50%",
            background: "transparent",
            border: "2px solid #52256F",
            animation: `${borderAnimation} 1s infinite`, // Apply the animation
          }}
        >
          <IconButton
            aria-label="delete"
            onClick={handleStopTranscription}
            sx={{
              background: "#2BA3D2",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              color: "black",
              "&:hover": {
                background: "#2BA3D2",
              },
              //   animation: "none", // Disable animation for IconButton
            }}
          >
            <StopIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default TranscribingScreen;
