
import Select from "react-select";

const SingleProductSelect = ({ id, options, placeholder='', title='', className='' }) => {
  return (
    <>
      <span>{title}</span>

      <div className={`${className} w-full col-span-2`}>
        <Select
        id={id} 
          classNamePrefix="custom-single-select"
          placeholder={placeholder}
          options={options}
        />
      </div>
    </>
  );
};

export default SingleProductSelect;
