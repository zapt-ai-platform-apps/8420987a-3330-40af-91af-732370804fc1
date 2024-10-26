import { onMount } from 'solid-js';
import { EditorState } from '@codemirror/state';
import { EditorView, basicSetup } from '@codemirror/basic-setup';
import { html } from '@codemirror/lang-html';

function Editor(props) {
  let editorRef;

  onMount(() => {
    const startState = EditorState.create({
      doc: props.code,
      extensions: [
        basicSetup,
        html(),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            props.onCodeChange(update.state.doc.toString());
          }
        }),
      ],
    });

    new EditorView({
      state: startState,
      parent: editorRef,
    });
  });

  return (
    <div class="w-full md:w-1/2 h-full">
      <div ref={editorRef} class="h-full"></div>
    </div>
  );
}

export default Editor;