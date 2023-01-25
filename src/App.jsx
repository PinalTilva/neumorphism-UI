import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Index";
import TheRoutes from "./router/Index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <TheRoutes />
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
