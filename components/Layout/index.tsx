import Navbar from '../Navbar';

interface Props {
    children: any;
}
const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            {/* <Head>
              <meta name='viewport' content='initial-scale=1.0, width=device-width' />
              <link rel="icon" type="image/png" sizes="16x16" href="/images/logo.png" />
              <meta property="og:title" content='Fletes TiziFlet' />
              <meta property="og:description" content='Fletes y mudanzas en Mar del Plata y alrededores' />
              <meta property="og:type" content="website" />
              <meta property="og:image" content="https://www.tiziflet.com.ar/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fmision.fc4e03fc331008783b8be5d256c3fe76.jpg&w=3840&q=75" />
              <meta property="og:url" content="www.tiziflet.com.ar" />
              <meta property="og:locale" content="es_FR" />
            </Head>         */}
            <div>
                <Navbar />
                {children}
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default Layout;
