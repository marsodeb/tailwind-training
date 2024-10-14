import logo from '../../assets/logo.png';

function Header() {
    return (
        <header className="p-4 rounded-lg w-11/12 mx-auto my-5 bg-nav-color">
            <nav className="container mx-auto flex justify-between items-center">
                <div className='flex items-center gap-5'>
                    <img src={logo} alt="logo" className="h-10"></img>
                    <h1 className='text-white bg-nav-color py-2 px-4 rounded-lg font-medium'>TAILWIND TRANING</h1>
                </div>
                <ul className="flex gap-10 text-white justify-between">
                    <li className='nav ease-out duration-300'>MARSODEB</li>
                    <li className='nav ease-out duration-300'>NAVBAR</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;