export default ({styles, classes, type, placeholder, onChange, id, error, ...props}) => (
    <input 
        style={styles}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? 'text-red-500': ''}`}
        id={id} 
        type={type || "text"}
        placeholder={placeholder || ""} 
        onChange={(e) => {
            if(typeof onchange === 'function') onChange(e.target.value);
        }}
        {...props}
    />
)