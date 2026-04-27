function Button({ onClick, children, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 border border-gray-400 rounded hover:bg-gray-100 active:bg-gray-200 text-sm cursor-pointer ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
