import React, { ChangeEvent } from "react";

interface BaseInputProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const BaseInput: React.FC<BaseInputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
  disabled,
  onKeyPress,
}) => {
  const inputClassName = `block py-2.5 px-0 w-full text-sm text-white bg-transparent appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer ${
    disabled ? "cursor-not-allowed" : "border-0 border-b-2 border-gray-300"
  }`;

  return (
    <div className="relative w-full my-6">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={inputClassName}
        placeholder=" "
        required
        onKeyPress={onKeyPress}
        disabled={disabled}
      />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        {placeholder}
      </label>
      {error && (
        <p className="text-red-500 text-xs w-full text-start">{error}</p>
      )}
    </div>
  );
};

export default BaseInput;
