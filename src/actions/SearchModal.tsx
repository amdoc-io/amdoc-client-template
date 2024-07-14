import { RxMagnifyingGlass } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchModalContext,
  setSearchModalOpen,
} from "../features/search/searchSlice";
import { Input } from "../forms/Input";
import { Divider } from "../layout/Divider";
import Modal from "../layout/Modal";

import { MdOutlineAutoAwesome } from "react-icons/md";
import { AskAISearchContent } from "./AskAISearchContent";
import { ListButton } from "./ListButton";

const SuggestedSearch = [
  {
    label: "Ask AI",
    id: "ASK_AI",
    icon: <MdOutlineAutoAwesome />,
  },
];

export const SearchModal = () => {
  const dispatch = useDispatch();
  const searchModalOpen: boolean = useSelector(
    (state: any) => state.search.searchModalOpen
  );
  const searchModalContext: string = useSelector(
    (state: any) => state.search.searchModalContext
  );

  const renderContent = () => {
    if (searchModalContext === "ASK_AI") {
      return <AskAISearchContent />;
    }

    return (
      <>
        <div className="px-2 h-14 flex items-center">
          <Input
            leading={<RxMagnifyingGlass />}
            placeholder="Search the docs or ask a question"
            noStyle
          />
        </div>

        <Divider className="!my-0" />

        <div className="py-6 flex flex-col gap-2">
          <div className="text-gray-500 font-medium mx-8">Suggested</div>

          <div className="flex flex-col">
            {SuggestedSearch.map((item, i) => (
              <ListButton
                key={i}
                icon={item.icon}
                onClick={() => dispatch(setSearchModalContext(item.id))}
              >
                {item.label}
              </ListButton>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <Modal
      position="start"
      open={searchModalOpen}
      setOpen={(open) => dispatch(setSearchModalOpen(open))}
      noStyle
    >
      {renderContent()}
    </Modal>
  );
};
