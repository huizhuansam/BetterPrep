import { createRoot } from "react-dom/client";

import mockQuestions from "./mocks/mockQuestions";
import App from "./App";

// Setup mock data
if (localStorage.getItem("questionList") === null) {
  localStorage.setItem("questionList", JSON.stringify(mockQuestions));
}

// Application entry point
createRoot(document.getElementById("root")).render(<App />);
