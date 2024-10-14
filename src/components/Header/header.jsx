import logo from '../../assets/logo.png';

function Header() {
    return (
        <header className="shadow-main p-4 rounded-lg w-11/12 mx-auto my-5 bg-nav-bar-color">
            <nav className="container mx-auto flex justify-between items-center">
                <img src={logo} alt="logo" className="h-10"></img>
                <ul className="flex text-white w-5/12 justify-between font-medium">
                    <li>HOME</li>
                    <li>PROJECT</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;