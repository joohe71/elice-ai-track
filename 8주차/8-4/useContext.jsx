// useContext를 활용하여 Dynamic Form 구현하기

import { useRef, useCallback, useContext, createContext } from "react";
// Form.jsx에서 구현된 컴포넌트를 참고하여 register와 handleSubmit을 구현해보세요.

const FormContext = createContext(null);
    
function useForm() {
  // formRef는 register를 통해 등록된 폼 상태를 관리합니다.
  const formRef = useRef({});
  
  const handleSubmit = useCallback(
    (callback) => (e) => {
      e.preventDefault();
      console.log("폼이 제출되었습니다.")
      callback(formRef.current)
    },
    [formRef.current]
  );

  const register = useCallback(
    (label) => {
        console.log('등록된 라벨 : ', label)

        
        const onChange = (e) => {
            formRef.current = {...formRef.current,[label]:e.target.value}
        }
        return {
            onChange,
            name: label,
        }
    },
    []
  );

  return { register, handleSubmit };
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("Use FormContext inside provider.");
  }
  return context;
}

export function FormProvider({ children }) {
  const formControls = useForm();

  return (
    <FormContext.Provider value={formControls}>{children}</FormContext.Provider>
  );
}
