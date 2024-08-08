import {
  Button,
  Fieldset,
  Group,
  NativeSelect,
  TagsInput,
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
import validator from "validator";
import createQuestion from "../../api/createQuestion";
import DescriptionEditor from "./DescriptionEditor";

const QuestionCreatorPage = () => {
  // setup
  const navigateTo = useNavigate();
  const complexities = Object.freeze(["easy", "medium", "hard"]);

  // state
  const [title, setTitle] = useState("");
  const [complexity, setComplexity] = useState("easy");
  const [categories, setCategories] = useState<string[]>([]);
  const descriptionEditor = useEditor({
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
  })!;
  const [isSubmitting, setIsSubmitting] = useState(false);

  // validation
  const isFormValid =
    title.length > 0 &&
    descriptionEditor.storage.characterCount.characters() > 0 &&
    categories.length > 0 &&
    complexities.includes(complexity);

  const isFormEmpty =
    title.length < 1 &&
    categories.length < 1 &&
    descriptionEditor.storage.characterCount.characters() < 1;

  // actions
  const handleDiscard = () => {
    setTitle("");
    setCategories([]);
    setComplexity("easy");
    descriptionEditor.commands.clearContent();
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const preprocessedUserInput = {
      title: validator.trim(title),
      description: validator.trim(descriptionEditor.getHTML()),
      categories: categories
        .map((c) => validator.trim(c))
        .filter((c) => !validator.isEmpty(c)),
      complexity,
    };
    const response = await createQuestion(preprocessedUserInput);
    if (!response.ok) {
      notifications.show({
        message: `Error: ${response.statusText}`,
        color: "red",
      });
      return;
    }
    notifications.show({
      message: "Question submitted!",
    });
    setIsSubmitting(false);
    navigateTo("/questions");
  };

  return (
    <Fieldset legend="Submit A Question">
      <TextInput
        value={title}
        placeholder="Question title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <DescriptionEditor editor={descriptionEditor} />
      <TagsInput
        mt="md"
        label="Categories"
        placeholder={
          'Press "Enter" to add a category, or delimit each category with commas (,)'
        }
        data={[]}
        value={categories}
        onChange={setCategories}
        clearable
      />
      <NativeSelect
        value={complexity}
        label="Select suggested difficulty"
        onChange={(e) => setComplexity(e.target.value)}
        data={complexities}
        mt="md"
      />
      <Group align="center" grow mt="md">
        <Button
          loading={isSubmitting}
          color="green"
          disabled={!isFormValid}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          color="orange"
          disabled={isFormEmpty || isSubmitting}
          onClick={handleDiscard}
        >
          Discard
        </Button>
      </Group>
    </Fieldset>
  );
};

export default QuestionCreatorPage;
