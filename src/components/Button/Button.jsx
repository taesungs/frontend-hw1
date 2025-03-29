export function CustomButton({ children, variant, className }) {
  return (
    <button
      className={`px-4 py-2 rounded font-medium ${
        variant === "outline" ? "border border-blue-500 text-blue-500" : "bg-blue-500 text-white"
      } ${className}`}
    >
      {children}
    </button>
  );
}
