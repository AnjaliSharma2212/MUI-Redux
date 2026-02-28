export default function Button({
    children,
    varient="primary",
    type="button",
    disabled=false,
    loading=false,
    onclick,
}){
    const base = "px-2 py-2 rounded font-medium transition ocus:outline-none focus-ring-2"
    const varients ={
        primary:"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
        secondary:"bg-gray-200 text-black hover:bg-gray-300 focus:ring-gray-400",
        danger:"bg-red-600 text-white hover:bg-red-700 focus:ring-red-400"
    }
    return (
        <>
        <button 
        type={type}
        disabled={disabled || loading}
        onClick={onclick}
        className={`${base} ${varients[varient]} ${
            disabled? "opacity-50 cursor-not-allowed" :""
        }`}
        aria-busy={loading}
        > 
        {/* {loading? "Loading" :children} */}
        Button
        </button>
        </>
    )
}