import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, IconButton } from "@mui/material";
import StopIcon from "@mui/icons-material/Stop";
import { styles } from "../Style";

//--Add webkitSpeechRecognition and SpeechRecognition type
declare global {
  interface Window {
    // webkitSpeechRecognition: any;
    // SpeechRecognition: any;
    webkitSpeechRecognition: typeof SpeechRecognition;
    SpeechRecognition: typeof SpeechRecognition;
  }
}

const TranscribingScreen: React.FC = () => {
  const [transcription, setTranscription] = useState<string>("");
  const [recognition, setRecognition] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initRecognition = () => {
      const newRecognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      newRecognition.lang = "en-US";
      newRecognition.continuous = true;

      newRecognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript =
          event.results[event.results.length - 1][0].transcript;
        setTranscription((prev) => prev + transcript);
      };

      newRecognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error("Speech recognition error:", event.error);
      };

      newRecognition.start();
      setRecognition(newRecognition);
    };

    if (!recognition) {
      initRecognition();
    }
  }, [recognition]);

  const stopTranscription = () => {
    if (recognition) {
      recognition.stop();
      setRecognition(null);
      navigate("/");
    }
  };

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.transcription}>{transcription}</Typography>
      <Box sx={styles.btn_holder}>
        <Typography sx={styles.gray_text}>Press here to stop</Typography>
        <br />
        <Box className="button-container" sx={styles.buttonContainer}>
          <IconButton
            aria-label="delete"
            onClick={stopTranscription}
            sx={styles.iconButton}
          >
            <StopIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default TranscribingScreen;
