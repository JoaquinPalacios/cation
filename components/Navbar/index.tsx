import Image from 'next/image';
import Link from 'next/link';

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='container'>
                    <div className='navbar-brand'>
                        <Link href='/' className='logo'>
                            <Image src='/images/logo.svg' alt='Logo' width='233' height='111' />
                        </Link>
                        <a role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                        </a>
                    </div>
                    <div id='navbarBasicExample' className='navbar-menu'>
                        <Link href='/'>Quiénes somos</Link>
                        <Link href='/about'>Productos</Link>
                        <Link href='/contact'>Contacto</Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
