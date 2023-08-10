import React from "react";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { TypeIcon } from "./TypeIcon";
// old css module without checkbox
// import styles from "./CustomNode.module.css";
import styles from "./CustomFRNode.module.css";
// export const CustomNode = (props) => {
//     const { droppable } = props.node;
//     const indent = props.depth * 24;
//
//     const handleToggle = (e) => {
//         e.stopPropagation();
//         props.onToggle(props.node.id);
//     };
//
//     return (
//         <div className={styles.root} style={{ paddingInlineStart: indent }}>
//             <div className={`${styles.arrow} ${props.isOpen ? styles.isOpen : ""}`}>
//                 {props.node.droppable && (
//                     <div onClick={handleToggle}>
//                         <ArrowRightIcon />
//                     </div>
//                 )}
//             </div>
//             <div className={styles.filetype}>
//                 <TypeIcon droppable={droppable || false} />
//             </div>
//             <div className={styles.label}>
//                 <Typography variant="body2">{props.node.text}</Typography>
//             </div>
//         </div>
//     );
// };

import Checkbox from "@mui/material/Checkbox";


export const CustomNode = (props) => {
    const { droppable, data } = props.node;
    const indent = props.depth * 24;

    const handleToggle = (e) => {
        e.stopPropagation();
        props.onToggle(props.node.id);
    };

    const handleSelect = () => props.onSelect(props.node);

    return (
        <div
            className={`tree-node ${styles.root} ${
                props.isSelected ? styles.isSelected : ""
            }`}
            style={{ paddingInlineStart: indent }}
        >
            <div
                className={`${styles.expandIconWrapper} ${
                    props.isOpen ? styles.isOpen : ""
                }`}
            >
                {props.node.droppable && (
                    <div onClick={handleToggle}>
                        <ArrowRightIcon />
                    </div>
                )}
            </div>
            <div>
                <Checkbox
                    color="primary"
                    size="small"
                    checked={props.isSelected}
                    onClick={handleSelect}
                />
            </div>
            <div>
                <TypeIcon droppable={droppable} fileType={data?.fileType} />
            </div>
            <div className={styles.labelGridItem}>
                <Typography variant="body2">{props.node.text}</Typography>
            </div>
        </div>
    );
};
