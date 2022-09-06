const { useState } = require("react");

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const onChange = e => setValue(e.target.value);

  return { value, onChange };
};
