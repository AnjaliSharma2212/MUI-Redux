export default function Input({
    label,
    id,
    type = "text",
    value,
    onChange,
    error,
    ...props
}) {
    return (
        <>
            <div>
                <label htmlFor={id} className="block mb-1 font-medium">
                    {label}
                </label>

                <input
                    type={type}
                    id={id}
                    value={value}
                    onChange={onChange}
                    aria-invalid={!!error}
                    className={`w-full border p-2 rounded focus:outline-none focus:ring-2 
        ${error ? "border-red-500 focus:ring-red-300" : "focus:ring-blue-300"}`}
                    {...props}
                />
                {error && (
                    <p className="text-red-500 text-sm mt-1" role="alert">
                        {error}
                    </p>
                )}
            </div>
        </>
    )
}