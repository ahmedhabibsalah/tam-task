import SignIn from "./components/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useToken from "./hooks/useToken";
import Home from "./pages/Home";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <SignIn setToken={setToken} />;
  }

  return (
    <>
      <h1>Hello</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
