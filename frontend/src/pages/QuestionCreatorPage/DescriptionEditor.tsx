import { FileButton } from "@mantine/core";
import { RichTextEditor } from "@mantine/tiptap";
import { ImageIcon } from "@radix-ui/react-icons";
import { Editor } from "@tiptap/react";
import { useCallback } from "react";
import fileToBase64 from "./fileToBase64";

const DescriptionEditor = ({ editor }: { editor: Editor }) => {
  const addImage = useCallback(
    async (file: File | null) => {
      if (!file) {
        return;
      }
      editor!
        .chain()
        .focus()
        .setImage({ src: await fileToBase64(file) })
        .run();
    },
    [editor]
  );
  return (
    <RichTextEditor editor={editor} mt="md">
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 />
          <RichTextEditor.H2 />
          <RichTextEditor.H3 />
          <RichTextEditor.H4 />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Blockquote />
          <RichTextEditor.Hr />
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
          <RichTextEditor.Subscript />
          <RichTextEditor.Superscript />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.AlignLeft />
          <RichTextEditor.AlignCenter />
          <RichTextEditor.AlignJustify />
          <RichTextEditor.AlignRight />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Control title="Insert image from device">
            <FileButton onChange={addImage} accept="image/png,image/jpeg">
              {(props) => <ImageIcon {...props} />}
            </FileButton>
          </RichTextEditor.Control>
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Undo />
          <RichTextEditor.Redo />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>
      <RichTextEditor.Content />
    </RichTextEditor>
  );
};

export default DescriptionEditor;
