import ErrorWrapper from "./error/ErrorWrapper";

const NotFoundComponent: React.FC = () => {
  return <ErrorWrapper statusCode="404" message="Please check the URL in the address bar and try again." />
};

export default NotFoundComponent;
