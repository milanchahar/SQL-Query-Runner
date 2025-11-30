import React, { useEffect, useRef, useState } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { sql } from "@codemirror/lang-sql";
import { autocompletion } from "@codemirror/autocomplete";
import { defaultKeymap } from "@codemirror/commands";

export default function SQLEditor({ value, onChange, onExecute, onFocus }) {
  const editorRef = useRef(null);
  const [tables, setTables] = useState({});
  const [tableNames, setTableNames] = useState([]);
