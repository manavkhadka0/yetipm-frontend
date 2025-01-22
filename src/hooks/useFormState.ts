import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useFormState = <T extends Record<string, any>>(
  initialState: T
) => {
  const [state, setState] = useState<T>(initialState);

  const handleChange = (
    e:
      | React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      | { name: string; value: any }
  ) => {
    const { name, value } = "target" in e ? e.target : e;
    setState((prevState: T) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return [state, handleChange] as const;
};
