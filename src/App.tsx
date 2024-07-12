import { useSelector } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./layout/Header";
import { MobileSideBar } from "./layout/MobileSideBar";
import { OutletWrapper } from "./layout/OutletWrapper";
import { SideBar } from "./layout/SideBar";
import { GithubTree } from "./model/GithubModel";
import { DocPage } from "./pages/DocPage";
import { useEffect } from "react";
import { HomePage } from "./pages/HomePage";

function App() {
  const tree: GithubTree[] = useSelector((state: any) => state.content.tree);

  useEffect(() => {}, [tree]);

  const Wrapper = () => {
    return (
      <div>
        <Header />

        <div className="flex flex-col h-[100vh]">
          <div className="flex h-full w-full mt-16">
            <SideBar />
            <div className="relative w-full">
              <MobileSideBar />
              <OutletWrapper className="ml-0 lg:ml-[250px]">
                <Outlet />
              </OutletWrapper>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      element: <Wrapper />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "*",
          element: <DocPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
