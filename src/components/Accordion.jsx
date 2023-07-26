import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Accordion = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion">
      <button
        className="flex items-center justify-between w-full px-4 py-2 font-medium text-left border border-gray-200 accordion-header rounded-t-xl "
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        {isExpanded ? (
          <MdKeyboardArrowUp className="w-6 h-6" />
        ) : (
          <MdKeyboardArrowDown className="w-6 h-6 " />
        )}
      </button>
      {isExpanded && (
        <div
          className="p-5 border border-b-0 border-gray-200 accordion-content"
          aria-labelledby={title}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
