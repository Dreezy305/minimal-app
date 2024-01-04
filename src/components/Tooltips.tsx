import Tooltip from "@mui/material/Tooltip";
import React from "react";

function Tooltips({
  title,
  icon,
  link,
}: {
  title: string;
  icon: React.ReactNode;
  link?: string;
}): JSX.Element {
  return (
    <Tooltip
      title={
        <span className="font-PublicSansLight text-xs text-white">{title}</span>
      }
      sx={{ background: "rgb(33, 43, 54)" }}
    >
      <a href={link}>{icon}</a>
    </Tooltip>
  );
}

export default Tooltips;
