import Link from 'next/link';


const Header = props => {
    return (
        <>
        <link href="https://fonts.googleapis.com/css?family=Prompt:300,400,500,600,700&display=swap" rel="stylesheet"></link>
        <nav className="w-100 shadow py-3 px-3" style={{height: 60, ...props.style}}>
            <ul className="flex-row flex justify-around">
                <li className="">
                    <a href="#" className="header-nav">HOME</a>
                </li>
                <li className="">
                    <a href="#" className="header-nav">About</a>
                </li>
                <li className="">
                    <a href="#" className="header-nav">Services</a>
                </li>
                <li className="">
                    <a href="#" className="header-nav">Work</a>
                </li>
                <li className="">
                    <a href="#" className="header-nav">Why US</a>
                </li>
                        <li className="">
                    <a href="#" className="header-nav">Gallery</a>
                </li>
                <li className="">
                    <a href="#" className="header-nav">Contact</a>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Header;