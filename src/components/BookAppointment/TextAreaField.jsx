const TextAreaField = ({
  label,
  name,
  register,
  placeholder,
  className = "",
  errors,
  rules = {},
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="text-[#010205] font-semibold lg:text-[24px] font-raleway mb-5 capitalize">
          {label}
        </label>
      )}
      <textarea
        {...register(name, rules)}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border-[1px] lg:h-[205px] border-[#004D3F40] lg:text-[22px] rounded-md focus:outline-none focus:ring-1 focus:ring-[#14322c40] resize-none ${className}`}
        rows={4} // Default row size, can be overridden via className
      ></textarea>
      {errors?.[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default TextAreaField;
