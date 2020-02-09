export default ({count, title}) => (
    <div className="flex flex-col justify-center items-center p-4 border-r border-gray-200 bg-primary flex-1 w-full"  style={{borderWidth: 0.25, borderColor: 'transparent'}}>
        <div className="text-5xl text-white">{count}</div>
        <div className="w-6 h-1 bg-secondary rounded-lg font-semibold mb-4"></div>
        <div className="text-gray-100">{title}</div>
    </div>
)