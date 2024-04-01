import Body from "./pages/Body";
import { Provider, useDispatch } from "react-redux";
import store from "./utils/redux/store";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/redux/slices/userSlice";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
