"use client"

import { useFn } from "@/hooks/useFn";

interface ICustomInputProps {
  type: string;
  placeholder: string;
  style: string;
  value: any; // TODO: Later probably remove any and add custom type
}

const CustomInput: React.FC<ICustomInputProps> = ({
  type,
  placeholder,
  style,
  value,
}: ICustomInputProps) => {
  const fn = useFn();

  return (
    <div className="flex justify-center align-top mt-4">
      <input
        type={type}
        value={value}
        onChange={fn}
        placeholder={placeholder}
        className={style}
      />
    </div>
  );
};

export default CustomInput;
