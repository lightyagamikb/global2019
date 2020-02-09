export default ({title, content }) => (
    <div className="text-left mx-4">
        <div className="mb-3 text-white">{title}</div>
        <ul>
            {
                content && content.length > 0 && content.map((c, index)=> {
                    return (
                        <li 
                            key={index} 
                            className="cursor-pointer text-gray-300 hover:text-gray-500 font-normal font-segoeUI mb-2"                        
                        >
                            {c}
                        </li>
                    )
                })
            }
        </ul>
    </div>
)