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