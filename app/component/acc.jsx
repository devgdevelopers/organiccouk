import React, { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi'; // Icons from React Icons


const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion mt-[30px] transition-all ease-in-out duration-300">
      {items.map((item, index) => (
        <div key={index} className="accordion-item transition-all ease-in-out duration-300">
          <button
            className="accordion-header flex justify-between items-center w-[100%] transition-all ease-in-out duration-300"
            onClick={() => toggleAccordion(index)}
          >
            <span className='text-white text-[20px] font-bold transition-all ease-in-out duration-300'>{item.header}</span>
            <span className="icon text-white text-[20px] transition-all ease-in-out duration-300">
              {activeIndex === index ? (
                <HiOutlineChevronUp className="transform-rotate-180 transition-all ease-in-out duration-300" />
              ) : (
                <HiOutlineChevronDown />
              )}
            </span>
          </button>

          {activeIndex === index && (
            <div className="accordion-body transition-all ease-in-out duration-300">
              <p className='text-white transition-all ease-in-out duration-300'> {item.body}</p>
            </div>
          )}
          <div className='w-[100%] h-[1px] bg-white' transition-all ease-in-out duration-300>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

