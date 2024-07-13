import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ReactNode } from "react";

export default function Modal(props: {
  open?: boolean;
  setOpen?: (value: boolean) => void;
  icon?: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
  action?: ReactNode;
  position?: "centerEnd" | "start";
}) {
  const {
    open,
    setOpen = () => {},
    icon,
    title,
    children,
    action,
    position = "centerEnd",
  } = props;

  const getClassByPosition = () => {
    if (position === "start") {
      return "items-start";
    }
    return "items-end sm:items-center";
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-40">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-40 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-40 w-screen overflow-y-auto">
        <div
          className={`flex min-h-full justify-center py-4 px-8 text-center sm:p-0 ${getClassByPosition()}`}
        >
          <DialogPanel
            transition
            className="relative transform rounded-lg w-full md:min-w-[648px] max-h-[750px] overflow-auto top-8 bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div
              className={`bg-white px-4 pb-6 pt-5 sm:p-6 sm:pb-6 rounded-tl-lg rounded-tr-lg ${
                action ? "" : "rounded-bl-lg rounded-br-lg"
              }`}
            >
              <div className="sm:flex sm:items-start">
                {icon && (
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <div className="h-6 w-6">{icon}</div>
                  </div>
                )}
                <div className="sm:mt-0 flex flex-col gap-2 w-full">
                  {title && (
                    <DialogTitle
                      as="h3"
                      className="text-gray-900 font-semibold text-center sm:text-left"
                    >
                      {title}
                    </DialogTitle>
                  )}
                  {children && (
                    <div className="text-sm text-gray-500">{children}</div>
                  )}
                </div>
              </div>
            </div>
            {action && (
              <div className="bg-gray-50 px-4 py-3 flex flex-col sm:flex-row-reverse sm:px-6 rounded-bl-lg rounded-br-lg gap-2">
                {action}
              </div>
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
