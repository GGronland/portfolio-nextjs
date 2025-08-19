const Button = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <button
      className={`w-full h-10 px-4 py-2 rounded-md cursor-pointer text-sm font-semibold bg-orange-400 hover:opacity-80 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
