import { Input } from "@windmill/react-ui";

const InputValueFive = ({
  name,
  label,
  type,
  disabled,
  register,
  required,
  maxValue,
  minValue,
  defaultValue,
  placeholder,
  onChange
}) => {
  const value = {
    valueAsNumber: true,
    required: required ? false : `${label} is required!`,
    max: {
      value: maxValue,
      message: `Maximum value ${maxValue}!`,
    },
    min: {
      value: minValue,
      message: `Minimum value ${minValue}!`,
    },
    pattern: {
      value: /^[0-9]*$/,
      message: `Invalid ${label}!`,
    },
    // onBlur: (e) => handleTotalVolume(e.target.value, 'stock'),
  };

  return (
    <>
      <div className={`flex flex-row`}>
        <Input
          {...register(`${name}`, value)}
          name={name}
          type={type}
          disabled={disabled}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="mr-2 p-2"
          onChange={(e) => {
            onChange(e.target.value)
          }}
        />
      </div>
    </>
  );
};

export default InputValueFive;
