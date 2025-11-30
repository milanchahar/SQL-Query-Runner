import React, { useEffect, useRef, useState } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";

export default function SQLEditor({ value, onChange, onExecute, onFocus }) {
  const editorRef = useRef(null);
  const [tables, setTables] = useState({});
  const [tableNames, setTableNames] = useState([]);
