import { useDispatch, useSelector } from "react-redux";
import Modal from "../layout/Modal";
import { setSearchModalOpen } from "../features/search/searchSlice";
import { Input } from "../forms/Input";
import { RxMagnifyingGlass } from "react-icons/rx";
import { Divider } from "../layout/Divider";

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

      <div className="p-6">Content</div>
    </Modal>
  );
};
