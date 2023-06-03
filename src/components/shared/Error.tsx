import { useToast, Button } from "@chakra-ui/react";

interface IErrorProps {
  message: string;
}

const Error: React.FC<IErrorProps> = ({message}: IErrorProps) => {
  const toast = useToast({
    position: "top",
    title: "Container style is updated",
    containerStyle: {
      width: "800px",
      maxWidth: "100%",
    },
  });

  return (
    <Button
      onClick={() => {
        toast({
          containerStyle: {
            border: "20px solid red",
          },
        });
      }}
    >
      {message}
    </Button>
  );
};

export default Error;
