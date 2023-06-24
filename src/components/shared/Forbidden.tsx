import ErrorWrapper from "./error/ErrorWrapper";

const Forbidden: React.FC = () => {
  return <ErrorWrapper statusCode="403" message="You are not allowed to go to this site." />
};

export default Forbidden;
