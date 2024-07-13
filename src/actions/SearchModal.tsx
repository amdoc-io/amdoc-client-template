import { useDispatch, useSelector } from "react-redux";
import Modal from "../layout/Modal";
import { setSearchModalOpen } from "../features/search/searchSlice";

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
    >
      <p>Coming soon...</p>
    </Modal>
  );
};
