import "./style.css";

const Button = ({
  title,
  onClick,
  secondary,
  disabled,
}: {
  title: string;
  onClick?: () => void;
  secondary?: boolean;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`buttonWrap ${secondary ? "secondary" : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
