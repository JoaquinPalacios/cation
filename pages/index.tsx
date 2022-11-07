import Head from 'next/head';
import Hero from '../components/Hero';
import Image from 'next/image';
import type { NextPage } from 'next';
import ReachOut from '../components/ReachOut'
import Services from '../components/Services';

/**
 * @author Joaquin Palacios.
 * @name Home
 * @description this contents the Home of the application.
 */

const Home: NextPage = () => {
    return (
        <div className='container'>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className='main'>
                <Hero />
                <ReachOut/>
                <Services/>
            </main>
        </div>
    );
};

export default Home;
