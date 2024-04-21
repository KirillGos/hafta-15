import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Root from "./routes/Root";
  import ErrorPage from "./error-page";
  import Contact from "./routes/contact"
  import {loader as rootLoader, action as rootAction} from "./routes/Root"
  import {loader as contactLoader} from "./routes/contact"
  import EditContact, {action as editAction} from "./routes/Edit";
  import {action as destroyAction} from "./routes/destroy";
  import MainMenu from "./routes/MainMenu";
  import About from "./routes/About";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
      action: rootAction,
      children: [
        { index: true, element: <MainMenu /> },
        {
          path: "contacts/:contactId",
          element: <Contact />,
          loader: contactLoader
        },
        {
          path: "contacts/:contactId/edit",
          element: <EditContact />,
          loader: contactLoader,
          action: editAction
        },
        {
          path: "contacts/:contactId/destroy",
          action: destroyAction,
          errorElement: <div>Silme işleminde hata oluştu..</div>
        },
        {
          path: "about",
          element: <About />
        },
      ]
    },
  
  ]);
  
  function App() {
  
    return (
      <RouterProvider router={router} />
    )
  }
  
  export default App;
  