import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import MarkdownPreview from "@uiw/react-markdown-preview";
import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";
import validator from "validator";

import QuestionTitleField from "../inputs/QuestionTitleField";

const QuestionCreatorLayout = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [userInput, setUserInput] = useState("");

  // eslint-disable-next-line no-unused-vars
  const handleUserInput = (v, _) => {
    setUserInput(v);
  };

  const handleQuestionTitle = (e) => {
    setQuestionTitle(e.target.value);
  };

  const isValidFormInput =
    !validator.isEmpty(questionTitle) && !validator.isEmpty(userInput);

  const markdown = userInput;

  return (
    <Box
      sx={{
        // todo: dynamically calculate height based on remaining space on viewport
        height: "94vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ flex: 1, overflow: "hidden" }}
        padding={1}
      >
        <Grid
          item
          xs={6}
          sx={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <QuestionTitleField onChange={handleQuestionTitle} />
          <Typography variant="h6" padding={1}>
            Enter question description here (Markdown supported)
          </Typography>
          <Divider />
          <MonacoEditor
            language="markdown"
            value={userInput}
            onChange={handleUserInput}
            height="100%"
            options={{
              wordWrap: true,
              minimap: { enabled: false },
              automaticLayout: true,
            }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Typography variant="h6" padding={1}>
            Question preview
          </Typography>
          <Divider />
          <Box sx={{ flex: 1, overflow: "auto" }} border={1}>
            <MarkdownPreview
              source={markdown}
              wrapperElement={{
                "data-color-mode": "light",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 2,
              gap: 1,
            }}
          >
            <Button color="warning" variant="outlined" sx={{ mr: 1 }}>
              Discard
            </Button>
            <Button
              color="success"
              variant="contained"
              disabled={!isValidFormInput}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QuestionCreatorLayout;
