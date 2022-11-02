import '../styles/globals.scss';

import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

/**
 * @author Joaquin Palacios
 * @name MyApp
 * @description This is the main component of the application.
 * @param {AppProps} props
 * @returns {TSX.Element}
 */
const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default MyApp;
