import React, { useEffect, useRef, useState } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { sql } from "@codemirror/lang-sql";
import { autocompletion } from "@codemirror/autocomplete";
import { defaultKeymap } from "@codemirror/commands";

useEffect(() => {
    if (!editorRef.current) return;

    const state = EditorState.create({
      doc: value || "",
      extensions: [
        keymap.of([
          ...defaultKeymap,
          {
            key: "Shift-Enter",
            run(view) {
              // get selection; if nothing selected run entire doc
              const { from, to } = view.state.selection.main;
              const selection = view.state.doc.sliceString(from, to);
              const toRun = selection && selection.trim() ? selection : view.state.doc.toString();

              if (onExecute) onExecute(toRun);
              return true;
            }
            },
          {
            key: "Mod-Enter",
            run(view) { // Ctrl/Cmd+Enter also runs whole cell
              const { from, to } = view.state.selection.main;
              const selection = view.state.doc.sliceString(from, to);
              const toRun = selection && selection.trim() ? selection : view.state.doc.toString();
              if (onExecute) onExecute(toRun);
              return true;
            }
          }
        ]),
        sql(),
        autocompletion({ override: [autoCompleteSQL] }),
        EditorView.updateListener.of((update) => {
          if (update.changes && onChange) onChange(update.state.doc.toString());
        }),
        EditorView.domEventHandlers({
          focus: (event, view) => {
            if (onFocus) onFocus();
          }
        }),
        EditorView.theme({
          "&": { minHeight: "180px", border: "1px solid #ccc", background: "#fff" },
          ".cm-content": { fontSize: "15px", padding: "8px" }
        })