const Button = ({
  children,
  className = "",
  bgColour = "bg-emerald-600",
  isCTA = false,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  bgColour?: string;
  isCTA?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`${className} ${
        isCTA ? "bg-orange-400" : bgColour
      } w-full min-w-min h-10 px-4 py-2 rounded-md cursor-pointer text-sm font-semibold  hover:opacity-80`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
