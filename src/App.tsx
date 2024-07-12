import { useSelector } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./layout/Header";
import { MobileSideBar } from "./layout/MobileSideBar";
import { OutletWrapper } from "./layout/OutletWrapper";
import { SideBar } from "./layout/SideBar";
import { GithubTree } from "./model/GithubModel";
import { HomePage } from "./pages/HomePage";
import { useEffect } from "react";

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
              <OutletWrapper className="py-[68px] px-4 lg:px-8 w-full max-w-screen-2xl ml-auto mr-auto">
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
          path: "*",
          element: <HomePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
