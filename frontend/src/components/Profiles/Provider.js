import React from "react";
import { Calendar } from "antd";

const Provider = (value, mode) => {
  console.log(value, mode);
  const onSelect = value => {
    console.log(value);
  };
  return (
    <div style={{ width: 300, border: "1px solid #d9d9d9", borderRadius: 4 }}>
      <Calendar
        fullscreen={false}
        onPanelChange={Provider}
        onSelect={onSelect}
      />
    </div>
  );
};

export default Provider;
