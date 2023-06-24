import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Verification from "./pages/Verification";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentHomePage from "./pages/student/StudentHomePage";
import ExamsPage from "./pages/student/ExamsPage";
import Questions from "./pages/student/Questions";
import StaffLogin from "./pages/StaffLogin";
import TeacherPage from "./pages/teacher/TeacherPage";

import CreateExam from "./pages/teacher/CreateExam";
import ViewExams from "./pages/teacher/ViewExams";

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
  {
    path: "/staffs/login",
    element: <StaffLogin />,
  },
  {
    path: "/teachers",
    element: <TeacherPage />,
  },
  {
    path: "/examAdder",
    element: <CreateExam />,
  },
  {
    path: "/allExams",
    element: <ViewExams />,
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
