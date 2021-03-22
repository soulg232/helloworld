export default function InputRow({ name, type, onChange: changeCallback }) {
  const id = name.replace(/[ ]/g, "_");

  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        id={id}
        onChange={(e) => changeCallback(e.target.value)}
      />
    </>
  );
}
