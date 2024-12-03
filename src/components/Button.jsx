export default function Button(props) {
  const children = props.children;
  const className = props.className;
  const onClick = props.onClick;
  const size = props.size;

  const sizeMap = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-4 text-base",
    large: "px-10 py-5 text-lg",
    image: "p-0 text-lg btn-image",
  };

  const sizeClass = sizeMap[size] || sizeMap["medium"];

  return (
    <button
      className={`btn border ${sizeClass} border-black/15 dark:border-white/15 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
