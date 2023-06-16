import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Verification from "./pages/Verification";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentHomePage from "./pages/student/StudentHomePage";
import ExamsPage from "./pages/student/ExamsPage";
import Questions from "./pages/student/Questions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/verify",
    element: <Verification />,
  },
  {
    path: "/student",
    element: <StudentHomePage />,
  },
  {
    path: "/exams",
    element: <ExamsPage />,
  },
  {
    path: "/questions",
    element: <Questions />,
  },
]);
function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
