import { Checkbox } from '@headlessui/react';

type props = {
  isOpen?: boolean | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean | null | undefined>>;
};
export const FilterOpenNow = (props: props) => {
  const { isOpen, setIsOpen } = props;
  const handleChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex items-center  ">
      <Checkbox
        checked={isOpen || false}
        onChange={handleChange}
        className="group block size-4 rounded-full border bg-white data-[checked]:bg-blue-500"
      >
        {' '}
        <svg
          className="stroke-white opacity-0 group-data-[checked]:opacity-100"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Checkbox>
      <p>Open Now</p>
    </div>
  );
};
