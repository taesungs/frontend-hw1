export function CustomInput({ label, placeholder }) {
  return (
    <div>
    <p>{label}</p>
    <input type="text" placeholder={placeholder} disabled/>
    </div>
  );
}