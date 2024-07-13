import { useDispatch, useSelector } from "react-redux";
import Modal from "../layout/Modal";
import { setSearchModalOpen } from "../features/search/searchSlice";
import { Input } from "../forms/Input";
import { RxMagnifyingGlass } from "react-icons/rx";
import { Divider } from "../layout/Divider";

import { MdOutlineAutoAwesome } from "react-icons/md";
import { ListButton } from "./ListButton";

export const SearchModal = () => {
  const dispatch = useDispatch();
  const searchModalOpen: boolean = useSelector(
    (state: any) => state.search.searchModalOpen
  );

  return (
    <Modal
      position="start"
      open={searchModalOpen}
      setOpen={(open) => dispatch(setSearchModalOpen(open))}
      noStyle
    >
      <div className="p-2">
        <Input
          leading={<RxMagnifyingGlass />}
          placeholder="Search the docs or ask a question"
          noStyle
        />
      </div>

      <Divider className="!my-0" />

      <div className="p-6 flex flex-col gap-4">
        <div className="text-gray-500 font-medium">Suggested</div>

        <div className="flex flex-col">
          <ListButton icon={<MdOutlineAutoAwesome />}>Ask AI</ListButton>
        </div>
      </div>
    </Modal>
  );
};
