
const Button = ({
  children,
  className = "",
  onClick,
  type = "button",
  img = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex hover:cursor-pointer items-center justify-center rounded-2xl font-inter text-base font-medium shadow-sm transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 ${className}`}
    >
      {img && (
        <span className="flex items-center justify-center rounded-full border-4 border-white">
          <img
            src={img}
            alt=""
            aria-hidden="true"
            width="28"
            height="28"
            className="w-7 rounded-full"
          />
        </span>
      )}

      <span>{children}</span>
    </button>
  );
};

export default Button;
