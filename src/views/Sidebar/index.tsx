import React from "react";
import { sideBarItems } from "../../utils/constants";
import styles from "./sidebar.module.css";

interface ListItemProps {
  Logo: React.ElementType;
  text: string;
}

function ListItem({ Logo, text }: ListItemProps) {
  return (
    <div className={styles.listItem}>
      <span className={styles.listItemSpan}>
        <Logo />
        <p>{text}</p>
      </span>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className={styles.root}>
      {sideBarItems.map((item, index) => (
        <ListItem key={index} Logo={item.logo} text={item.text} />
      ))}
    </aside>
  );
}
