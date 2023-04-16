import Head from 'next/head';
import Nav from '@/components/Nav';
import About from '@/components/About';
import Recipes from '@/components/Recipes';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Home() {
  const [shownTab, setTab] = useState('About')

  return (
    <>
      <Head>
        <title>Hello, world!</title>
      </Head>
      <Nav />
      <main>
        <h1>Online Recipe Book</h1>
        <button className={shownTab === 'About' ? 'btn btn-primary margin-right' : 'btn btn-light margin-right'} onClick={()=>setTab('About')}>
          About
        </button>
        <button className={shownTab === 'Recipe' ? 'btn btn-primary margin-right' : 'btn btn-light margin-right'} onClick={()=>setTab('Recipe')}>
          Recipes
        </button>
        {shownTab === 'About' && <About/>}
        {shownTab === 'Recipe' && <Recipes/>}
      </main>
      <Footer />
    </>
  )
}