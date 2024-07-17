
type props = {
  isOpen?:boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
export const FilterOpenNow = (props:props) => {
  const {isOpen,setIsOpen} = props
  return <div>FilterOpenNow</div>;
};
