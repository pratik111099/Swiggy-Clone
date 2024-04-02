import { useRouteError } from "react-router-dom";

const ErrorRoute = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error Page</h1>
      <h3>{error.data}</h3>
      <p>
        {error.status}
        {error.statusText}
      </p>
    </div>
  );
};
export default ErrorRoute;
