import {
  Button,
  Fieldset,
  Group,
  NativeSelect,
  TextInput,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Link } from "@mantine/tiptap";
import CharacterCount from "@tiptap/extension-character-count";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import SubScript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { serializeError } from "serialize-error";
import createQuestion from "../../api/createQuestion";
import DescriptionEditor from "./DescriptionEditor";
import processUserInput from "./processUserInput";
import validateFormData from "./validateFormData";

const QuestionCreatorPage = () => {
  const navigateTo = useNavigate();

  const [title, setTitle] = useState("");
  const [complexity, setComplexity] = useState("easy");
  const [categories, setCategories] = useState("");
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      CharacterCount,
      Image.configure({
        allowBase64: true,
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder: "Question description" }),
    ],
  });

  const handleDiscard = () => {
    setTitle("");
    setCategories("");
    setComplexity("easy");
    editor!.commands.clearContent();
  };

  const handleSubmit = async () => {
    try {
      await createQuestion(
        processUserInput({
          questionTitle: title,
          questionDescription: editor!.getHTML(),
          categories,
          complexity,
        })
      );
      notifications.show({
        message: "Question submitted!",
      });
      navigateTo("/questions");
    } catch (error: any) {
      notifications.show({
        message: "Error: " + JSON.stringify(serializeError(error).message),
        color: "red",
      });
    }
  };

  const isFormValid = validateFormData({
    title: title,
    descriptionCharacterCount: editor!.storage.characterCount.characters(),
    categories,
    complexity,
  });

  const isFormPartiallyFilled =
    title || categories || editor!.storage.characterCount.characters() > 0;

  return (
    <>
      <Fieldset legend="Submit A Question">
        <TextInput
          value={title}
          placeholder="Question title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <DescriptionEditor editor={editor!} />
        <TextInput
          value={categories}
          placeholder="Add relevant categories; please delimit using commas (,)"
          onChange={(e) => setCategories(e.target.value)}
          mt="md"
        />
        <NativeSelect
          value={complexity}
          label="Select suggested difficulty"
          onChange={(e) => setComplexity(e.target.value)}
          data={["easy", "medium", "hard"]}
          mt="md"
        />
        <Group align="center" grow mt="md">
          <Button color="green" disabled={!isFormValid} onClick={handleSubmit}>
            Submit
          </Button>
          <Button
            color="orange"
            disabled={!isFormPartiallyFilled}
            onClick={handleDiscard}
          >
            Discard
          </Button>
        </Group>
      </Fieldset>
    </>
  );
};

export default QuestionCreatorPage;
