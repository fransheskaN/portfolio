import React, { useState } from "react";

function Dropdown() {
  const [dropdown, setDropdown] = useState("750ml");
  return (
    <form>
      <select
        value={dropdown}
        onChange={(e) => {
          setDropdown(e.target.value);
        }}
      >
        <option value="750ml">750ml</option>
        <option value="800ml">800ml</option>
        <option value="850ml">850ml</option>
      </select>
    </form>
  );
}
export default Dropdown;