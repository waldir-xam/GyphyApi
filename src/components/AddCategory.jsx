import { useState } from "react";

export const AddCategory = () => {
  const [inpuValue, setInputValue] = useState("");

  return (
    <form>
      <input type="text" placeholder="Buscar GIF" />
    </form>
  );
};
