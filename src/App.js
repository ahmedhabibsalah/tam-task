import SignIn from "./components/SignIn";
import { BrowserRouter } from "react-router-dom";
import useToken from "./hooks/useToken";
import Home from "./pages/Home";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <SignIn setToken={setToken} />;
  }

  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
