import Head from 'next/head'
import Nav from '@/components/Nav'
import RecipeCard from '@/components/RecipeCard'
import Footer from '@/components/Footer'
import NavButton from '@/components/NavButton'

let currentTab = 'About';

export default function Home() {
  return (
    <>
        <Head>
          <title>Hello, world!</title>
        </Head>
        <Nav />
        <main>
          <h1>Online Recipe Book</h1>
          <NavButton
            currentTab={currentTab}
            text="About the Project"
            link="#"
          />
          <NavButton
            currentTab={currentTab}
            text="Recipe book"
            link="#"
          />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </main>
        <Footer />
    </>
  )
}