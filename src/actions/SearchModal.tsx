import { useDispatch, useSelector } from "react-redux";
import Modal from "../layout/Modal";
import { setSearchModalOpen } from "../features/search/searchSlice";
import { Input } from "../forms/Input";
import { RxCross1, RxMagnifyingGlass } from "react-icons/rx";
import { Divider } from "../layout/Divider";

import { MdOutlineAutoAwesome } from "react-icons/md";
import { ListButton } from "./ListButton";
import { useState } from "react";

export const SearchModal = () => {
  const dispatch = useDispatch();
  const searchModalOpen: boolean = useSelector(
    (state: any) => state.search.searchModalOpen
  );
  const [askAIEnabled, setAskAIEnabled] = useState<boolean>(false);

  return (
    <Modal
      position="start"
      open={searchModalOpen}
      setOpen={(open) => dispatch(setSearchModalOpen(open))}
      noStyle
    >
      <div className="p-2">
        <Input
          leading={
            <div className="flex items-center gap-2">
              <RxMagnifyingGlass />
              {askAIEnabled && (
                <div className="flex items-center gap-2 px-2 py-[2px] text-xs bg-gray-100/50 border rounded-md">
                  <div className="text-primary">
                    <MdOutlineAutoAwesome />
                  </div>{" "}
                  Ask AI
                  <div
                    onClick={() => setAskAIEnabled(false)}
                    className="cursor-pointer"
                  >
                    <RxCross1 />
                  </div>
                </div>
              )}
            </div>
          }
          placeholder="Search the docs or ask a question"
          noStyle
        />
      </div>

      <Divider className="!my-0" />

      <div className="p-6 flex flex-col gap-4">
        <div className="text-gray-500 font-medium">Suggested</div>

        <div className="flex flex-col">
          <ListButton
            icon={<MdOutlineAutoAwesome />}
            onClick={() => setAskAIEnabled(true)}
          >
            Ask AI
          </ListButton>
        </div>
      </div>
    </Modal>
  );
};
