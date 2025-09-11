import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError()
  return (
    <div>
      <h1>Error 404</h1>
      <h3>{err.status}: {err.statusText}</h3>
    </div>
  );
}
export default Error