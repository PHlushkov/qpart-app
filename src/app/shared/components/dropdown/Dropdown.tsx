'use client';

import Link from 'next/link';
import React from 'react';

interface SelectOptions {
  name: string;
  path: string;
}

interface DropdownProps {
  options: SelectOptions[];
  title: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, title }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="bg-brown-700 text-white px-4 py-2 rounded-md focus:outline-none"
      >
        {title}
      </button>

      {isOpen && (
        <ul className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-64 right-0">
          {options.map((item, index) => (
            <li
              className="px-4 py-2 hover:bg-brown-600 cursor-pointer"
              key={index}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
