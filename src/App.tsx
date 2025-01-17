import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { MobileSideBar } from "./layout/MobileSideBar";
import { OutletWrapper } from "./layout/OutletWrapper";
import { SideBar } from "./layout/SideBar";
import { DocPage } from "./pages/DocPage";
import { HomePage } from "./pages/HomePage";

function App() {
  const Wrapper = () => {
    return (
      <div>
        <Header />

        <div className="flex flex-col h-[100vh]">
          <div className="flex h-full w-full mt-16">
            <SideBar />
            <div className="relative w-full">
              <MobileSideBar />
              <OutletWrapper className="ml-0 lg:ml-[250px] min-h-[calc(100vh-4rem-20rem)]">
                <Outlet />
              </OutletWrapper>
              <div className="ml-0 lg:ml-[250px]">
                <Footer />
              </div>
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
