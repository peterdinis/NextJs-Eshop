import { useFn } from "@/hooks/useFn";
import { ReactNode } from "react";

interface ICustomButtonProps {
  style: string;
  name: string;
  children?: ReactNode;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
  style,
  name,
}: ICustomButtonProps) => {
  const fn = useFn();

  return (
    <button onClick={fn} className={style}>
      {name}
    </button>
  );
};

export default CustomButton;
