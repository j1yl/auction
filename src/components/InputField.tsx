const InputField = ({
  text,
  type,
  name,
  placeholder,
}: {
  text: string;
  type: string;
  name: string;
  placeholder: string;
}) => {
  return (
    <div className="flex w-full gap-2">
      <label className="border border-black">{text}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full border border-black p-2"
      />
    </div>
  );
};

export default InputField;
