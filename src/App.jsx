import styled from "styled-components";
import { NavBar } from "./Component/NavBar";
import {
  createBrowserRouter,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {
  Projects,
  Dashboard,
  MyTask,
  Calendar,
  TimeManage,
  Reports,
  Setting,
  ChatBox,
} from "./Page";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Dashboard />
      </>
    ),
  },

  {
    path: "/projects",
    element: (
      <>
        <NavBar />
        <Projects />
      </>
    ),
  },

  {
    path: "/mytask",
    element: (
      <>
        <NavBar />
        <MyTask />
      </>
    ),
  },

  {
    path: "/calendar",
    element: (
      <>
        <NavBar />
        <Calendar />
      </>
    ),
  },

  {
    path: "/timemanage",
    element: (
      <>
        <NavBar />
        <TimeManage />
      </>
    ),
  },

  {
    path: "/reports",
    element: (
      <>
        <NavBar />
        <Reports />
      </>
    ),
  },

  {
    path: "/setting",
    element: (
      <>
        <NavBar />
        <Setting />
      </>
    ),
  },
  {
    path: "/chatbox",
    element: (
      <>
        <NavBar />
        <ChatBox />
      </>
    ),
  },
]);
const App = () => {
  return (
    <Wrapper>
      <RouterProvider router={router} />{" "}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  background-color: #f7f6f4;
  border-radius: 1rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: 20% 1fr;
  gap: 1rem;
`;

export default App;
