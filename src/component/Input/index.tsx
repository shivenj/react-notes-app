import "./style.css";

const Input = ({
  label,
  onChange,
  placeholder,
  textArea,
  name,
  value,
}: {
  label: string;
  onChange?: (e: any) => void;
  placeholder?: string;
  textArea?: boolean;
  name: string;
  value: string;
}) => {
  return (
    <div className="inputWrap">
      <label className="label">{label}</label>
      {textArea ? (
        <textarea
          className="input"
          placeholder={placeholder}
          rows={5}
          onChange={onChange}
          name={name}
          value={value}
        />
      ) : (
        <input
          className="input"
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
        />
      )}
    </div>
  );
};

export default Input;
