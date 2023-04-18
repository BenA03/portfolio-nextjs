import Head from 'next/head';
import Nav from '@/components/Nav';
import About from '@/components/About';
import Recipes from '@/components/Recipes';
import Footer from '@/components/Footer';
import NavButton from '@/components/NavButton';
import { useState } from 'react';

export default function Home() {
  const [shownTab, setTab] = useState('About')

  return (
    <>
      <Head>
        <title>Hello, world! (Recipe App)</title>
      </Head>
      <Nav />
      <main>
        <h1>Online Recipe Book</h1>
        <NavButton
          shownTab={shownTab}
          toggleName='About'
          stateChanger={setTab}
        />
        <NavButton
          shownTab={shownTab}
          toggleName='Recipes'
          stateChanger={setTab}
        />
        {shownTab === 'About' && <About />}
        {shownTab === 'Recipes' && <Recipes />}
      </main>
      <Footer />
    </>
  )
}