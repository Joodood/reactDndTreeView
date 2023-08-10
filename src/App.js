import './App.css';
import React, { useState } from "react";
import { getDescendants } from "@minoru/react-dnd-treeview";
import { TreeView } from "./TreeView";
import sampleData from "./multiple-tree.json";
import styles from "./App.module.css";

export default function App() {
  const [treeData, setTreeData] = useState(sampleData);

  const handleDrop = (newTree, { dragSourceId, dropTargetId }) => {
    setTreeData(
        treeData.map((node) => {
          if (node.id === dragSourceId) {
            return {
              ...node,
              parent: dropTargetId
            };
          }

          return node;
        })
    );
  };
  const tree1 = getDescendants(treeData, 100);
  const tree2 = getDescendants(treeData, 200);
  const tree3 = getDescendants(treeData, 300);
  return (
      <div className={styles.rootGrid}>
        <div className={styles.column}>
          <TreeView tree={tree1} onDrop={handleDrop} rootId={100} />
        </div>
        <div className={styles.column}>
          <TreeView tree={tree2} onDrop={handleDrop} rootId={200} />
        </div>
        <div className={styles.column}>
          <TreeView tree={tree3} onDrop={handleDrop} rootId={300} />
        </div>
      </div>
  );
}
