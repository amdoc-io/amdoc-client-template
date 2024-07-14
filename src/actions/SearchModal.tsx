import { RxMagnifyingGlass } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setSearchModalContext } from "../features/search/searchSlice";
import { Input } from "../forms/Input";
import { Divider } from "../layout/Divider";
import Modal from "../layout/Modal";

import { AiOutlineEnter } from "react-icons/ai";
import { MdOutlineAutoAwesome } from "react-icons/md";
import { Pill } from "../display/Pill";
import { contactUrl } from "../igendoc.config";
import { AskAISearchContent } from "./AskAISearchContent";
import { Link } from "./Link";
import { ListButton } from "./ListButton";

const SuggestedSearch = [
  {
    label: "Ask AI",
    id: "ASK_AI",
    icon: <MdOutlineAutoAwesome />,
  },
];

export const SearchModal = (props: {
  open?: boolean;
  setOpen?: (open: boolean) => void;
}) => {
  const { open, setOpen = () => {} } = props;
  const dispatch = useDispatch();
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
            trailing={
              <Pill>
                <AiOutlineEnter />
                Enter
              </Pill>
            }
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
      open={open}
      setOpen={setOpen}
      noStyle
      action={
        <div className="text-sm text-gray-500 flex justify-center gap-1">
          Need help?
          <Link
            href={contactUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium"
          >
            Contact support
          </Link>
        </div>
      }
    >
      {renderContent()}
    </Modal>
  );
};
