import { Box, Grid } from "@mui/material";
import MarkdownPreview from "@uiw/react-markdown-preview";
import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";

const QuestionCreatorLayout = () => {
  const [userInput, setUserInput] = useState("");

  // eslint-disable-next-line no-unused-vars
  const handleUserInput = (v, _) => {
    setUserInput(v);
  };

  const markdown = userInput;

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={2} sx={{ flex: 1, overflow: "hidden" }}>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Box sx={{ flex: 1, overflow: "hidden" }}>
            <MonacoEditor
              language="markdown"
              value={userInput}
              onChange={handleUserInput}
              height="100%"
              options={{
                minimap: { enabled: false },
                automaticLayout: true,
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Box sx={{ flex: 1, overflow: "auto" }}>
            <MarkdownPreview source={markdown} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuestionCreatorLayout;
