const Button = ({
  children,
  className = "",
  onClick,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`${className} w-full min-w-min h-10 px-4 py-2 rounded-md cursor-pointer text-sm font-semibold bg-orange-400 hover:opacity-80`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
