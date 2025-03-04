import { useEffect, useState } from "react";

interface Input {
  field: string;
  value: any;
}

const useForm = <T>( input: Input,initialState: T,updateFunction: (s: T) => void
) => {
  const [student, setStudent] = useState<T>(initialState);

  useEffect(() => {
    if (input?.field ) {
      setStudent((prevState) => ({
        ...prevState,
        [input.field]: input.value,
      }));
    }
  }, [input]);


  function handleClear() {
    setStudent(initialState);
  }

  function handleSubmit() {
    updateFunction({ ...student, id: Date.now().toString() });
    handleClear();
  }

  return { student, handleSubmit, handleClear, setStudent };
};

export default useForm;
