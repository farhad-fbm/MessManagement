import { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button
        onClick={toggleAccordion}
        className="w-full text-left px-4 py-2 flex justify-between items-center"
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-2 bg-gray-100">
          {content}
        </div>
      )}
    </div>
  );
};

export const Accordion = () => {
  const accordionData = [
    { title: 'Section 1', content: 'Content for section 1.' },
    { title: 'Section 2', content: 'Content for section 2.' },
    { title: 'Section 3', content: 'Content for section 3.' },
  ];

  return (
    <div className="w-full max-w-md mx-auto border rounded-lg">
      {accordionData.map((item, idx) => (
        <AccordionItem key={idx} title={item.title} content={item.content} />
      ))}
    </div>
  );
};
