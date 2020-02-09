export default props => {
    return (
        <div 
            className = {`flex justify-center h-screen w-full ${props.className}`} 
            style={props.style}
        >
            {props.children}
        </div>
    )
}




