import { useState, useRef } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface AccordionItemProps {
  title: string;
  content: string;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  index,
  isOpen,
  onToggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className=" border-custom-accent5 border-[4px] rounded-lg mb-4  overflow-hidden">
      <div
        className="flex items-center justify-between  cursor-pointer"
        onClick={() => onToggle(index)}
      >
        <h3
          className={`text-2xl px-10  font-medium flex-1 ${
            isOpen ? "text-custom-accent" : "text-white"
          }`}
        >
          {index < 10 ? `0${index}` : index}. {title}
        </h3>
        <div
          className={` w-[80px] h-[80px] flex items-center justify-center  ${
            isOpen ? "bg-custom-secondary" : "bg-custom-accent5"
          }`}
        >
          {isOpen ? (
            <FaMinus className="text-custom-primary" size={24} />
          ) : (
            <FaPlus className="text-white" size={24} />
          )}
        </div>
      </div>

      <div
        ref={contentRef}
        className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0 }}
      >
        <div className="px-10 pb-4 text-[20px] py-5 text-white font-regular">
          {content}
        </div>
      </div>
    </div>
  );
};

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      title: "Lorem ipsum dolor sit amet consectetur. Sagittis id.",
      content:
        "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultricies. Ac pharetra ultricies consectetur consequat tellus massa. Nec aliquam eros sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing.",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur. Viverra.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Vivamus blandit libero vitae diam interdum, id convallis magna tempus. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur. Viverra.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Vivamus blandit libero vitae diam interdum, id convallis magna tempus. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur. Viverra.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Vivamus blandit libero vitae diam interdum, id convallis magna tempus. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur. Viverra.",
      content:
        "Lorem ipsum dolor sit amet consectetur. Vivamus blandit libero vitae diam interdum, id convallis magna tempus. Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  return (
    <div className="max-w-[1760px] mx-auto mt-32">
      <h3 className="text-custom-accent text-5xl font-bold px-8 py-4 rounded-2xl	 bg-custom-accent5 w-fit mx-auto">
        FAQs
      </h3>
      <div className="grid grid-cols-12 gap-8 mt-20">
        {faqs.map((faq, index) => (
          <div className="col-span-6">
            <AccordionItem
              key={index}
              index={index + 1}
              title={faq.title}
              content={faq.content}
              isOpen={openIndex === index + 1}
              onToggle={handleToggle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
