// import './App.css';
// import React, { useState } from "react";
// import { getDescendants } from "@minoru/react-dnd-treeview";
// import { Treehouse } from "./treehouse";
// // import sampleData from "./multiple-tree.json";
// import sampleData from "./checkmarksampledata.json";
// import styles from "./App.module.css";
// import {DndProvider} from "react-dnd";
// import {
//     getBackendOptions,
//     MultiBackend,
// } from "@minoru/react-dnd-treeview";
//
// export default function App() {
//   const [treeData, setTreeData] = useState(sampleData);
//     console.log(treeData);
//   const handleDrop = (newTree, { dragSourceId, dropTargetId }) => {
//     setTreeData(
//         treeData.map((node) => {
//           if (node.id === dragSourceId) {
//             return {
//               ...node,
//               parent: dropTargetId
//             };
//           }
//
//           return node;
//         })
//     );
//   };
//   const tree1 = getDescendants(treeData, 100);
//   const tree2 = getDescendants(treeData, 200);
//   const tree3 = getDescendants(treeData, 300);
//   return (
//
//       <div className={styles.rootGrid}>
//         <div className={styles.column}>
//           <Treehouse tree={tree1} onDrop={handleDrop} rootId={100} />
//         </div>
//         <div className={styles.column}>
//           <Treehouse tree={tree2} onDrop={handleDrop} rootId={200} />
//         </div>
//         <div className={styles.column}>
//           <Treehouse tree={tree3} onDrop={handleDrop} rootId={300} />
//         </div>
//       </div>
//
//   );
// }
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { ThemeProvider, CssBaseline } from "@mui/material";
import {
    Tree,
    MultiBackend,
    getBackendOptions
} from "@minoru/react-dnd-treeview";
import { CustomNode } from "./CustomNode";
import { CustomDragPreview } from "./CustomDragPreview";
import { theme } from "./theme";
import styles from "./App.module.css";
import SampleData from "./checkmarksampledata.json";

function App() {
    const [treeData, setTreeData] = useState(SampleData);
    const handleDrop = (newTree) => setTreeData(newTree);
    const [selectedNodes, setSelectedNodes] = useState([]);

    const handleSelect = (node) => {
        const item = selectedNodes.find((n) => n.id === node.id);

        if (!item) {
            setSelectedNodes([...selectedNodes, node]);
        } else {
            setSelectedNodes(selectedNodes.filter((n) => n.id !== node.id));
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <DndProvider backend={MultiBackend} options={getBackendOptions()}>
                <div className={styles.app}>
                    <div className={styles.current}>
                        <p>
                            Current node:
                            <span className={styles.currentLabel}>
                {selectedNodes.length === 0
                    ? "none"
                    : selectedNodes.map((n) => n.text).join(", ")}
              </span>
                        </p>
                    </div>
                    <Tree
                        tree={treeData}
                        rootId={0}
                        render={(node, { depth, isOpen, onToggle }) => (
                            <CustomNode
                                node={node}
                                depth={depth}
                                isOpen={isOpen}
                                isSelected={!!selectedNodes.find((n) => n.id === node.id)}
                                onToggle={onToggle}
                                onSelect={handleSelect}
                            />
                        )}
                        dragPreviewRender={(monitorProps) => (
                            <CustomDragPreview monitorProps={monitorProps} />
                        )}
                        onDrop={handleDrop}
                        classes={{
                            draggingSource: styles.draggingSource,
                            dropTarget: styles.dropTarget
                        }}
                    />
                </div>
            </DndProvider>
        </ThemeProvider>
    );
}

export default App;
