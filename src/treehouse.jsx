// import {Tree} from "@minoru/react-dnd-treeview";
// import {CustomNode} from "./CustomNode";
// import {CustomDragPreview} from "./CustomDragPreview";
// import styles from "./TreeView.module.css";
// import React, { useState } from "react";
// // import sampleData from "./multiple-tree.json";
// import sampleData from "./multiple-tree.json";

// export const Treehouse = (props) => {
    // console.log(props);
    // const [treeData, setTreeData] = useState(sampleData);
    // const handleDrop = (newTree) => setTreeData(newTree);
    //
    // const [selectedNodes, setSelectedNodes] = useState([]);
    // const handleSelect = (node) => {
    //     const item = selectedNodes.find((n) => n.id === node.id);
    //
    //     if (!item) {
    //         setSelectedNodes([...selectedNodes, node]);
    //     } else {
    //         setSelectedNodes(selectedNodes.filter((n) => n.id !== node.id));
    //     }
    // };
// return (
//     <Tree
//     tree={props.tree}
//     rootId={0}
//     render={(node, { depth, isOpen, onToggle }) => (
//         <CustomNode
//             node={node}
//             depth={depth}
//             isOpen={isOpen}
//             isSelected={!!selectedNodes.find((n) => n.id === node.id)}
//             onToggle={onToggle}
//             onSelect={handleSelect}
//         />
//     )}
//     dragPreviewRender={(monitorProps) => (
//         <CustomDragPreview monitorProps={monitorProps} />
//     )}
//     onDrop={handleDrop}
//     classes={{
//         draggingSource: styles.draggingSource,
//         dropTarget: styles.dropTarget
//     }}
// />
// );
// };
