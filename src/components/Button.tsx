

type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  text,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
    >
      {text}
    </button>
  );
};

export default Button;