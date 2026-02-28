export default function Card({ children }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border">
      {children}
    </div>
  );
}