import { RxChevronLeft, RxCross1 } from "react-icons/rx";
import { Input } from "../forms/Input";
import { MdOutlineAutoAwesome } from "react-icons/md";
import { Divider } from "../layout/Divider";
import { ListButton } from "./ListButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchModalContext } from "../features/search/searchSlice";

const SampleQuestions = [
  {
    label: "How do I get started?",
  },
  {
    label: "Tell me about the product",
  },
  {
    label: "What is the pricing?",
  },
];

export const AskAISearchContent = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <div className="px-2 h-14 flex items-center">
        <Input
          value={query}
          inputClassName="!text-gray-600 !text-sm"
          onChange={(e) => setQuery(e.target.value)}
          leading={
            <div className="flex items-center gap-2">
              <div
                className="text-inherit cursor-pointer"
                onClick={() => dispatch(setSearchModalContext(undefined))}
              >
                <RxChevronLeft />
              </div>
              <div className="flex items-center gap-2 px-2 py-[2px] text-xs bg-gray-100/50 border rounded-md">
                <div className="text-primary">
                  <MdOutlineAutoAwesome />
                </div>{" "}
                Ask AI
              </div>
            </div>
          }
          placeholder="Search the docs or ask a question"
          noStyle
        />
      </div>

      <Divider className="!my-0" />

      <div className="py-6 flex flex-col gap-2">
        <div className="text-gray-500 font-medium mx-8">Sample questions</div>

        <div className="flex flex-col">
          {SampleQuestions.map((question, i) => (
            <ListButton
              key={i}
              icon={<MdOutlineAutoAwesome />}
              onClick={() => setQuery(question.label)}
            >
              {question.label}
            </ListButton>
          ))}
        </div>
      </div>
    </>
  );
};
