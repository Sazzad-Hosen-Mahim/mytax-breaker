const InputField = ({
  label,
  name,
  register,
  type = "text",
  placeholder,
  className = "",
  errors,
  rules = {},
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="text-[#010205] font-semibold lg:text-[24px] font-raleway capitalize">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className={`w-full px-4 py-2 border-[1px] border-[#004D3F40] lg:h-[80px] rounded-[8px] lg:text-[22px] focus:outline-none focus:ring-1 focus:ring-[#14322c40] ${className}`}
      />
      {errors?.[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputField;
