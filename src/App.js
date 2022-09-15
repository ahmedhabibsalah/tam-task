import SignIn from "./components/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useToken from "./hooks/useToken";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

function App() {
  // const { token, setToken } = useToken();

  // if (!token) {
  //   return <SignIn setToken={setToken} />;
  // }

  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route element={<Dashboard />} path="/dashboard" exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
