import Image from 'next/image';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <Image src='/images/footer-logo.svg' alt='Logo' width='233' height='111' />
                </div>
                <div className='footer-links'>
                    <a href='#'>Direccion</a>
                    <a href='#'>Email</a>
                    <a href='#'>Telefono</a>
                </div>
                <button className='btn-login'>Login clientes</button>
                <div className='footer-social'></div>
            </div>
        </footer>
    );
};

export default Footer;
