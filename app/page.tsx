import Navbar   from '@/components/Navbar'
import Hero     from '@/components/Hero'
import About    from '@/components/About'
import Zone     from '@/components/Zone'
import Services from '@/components/Services'
import Contact  from '@/components/Contact'
import Footer   from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Zone />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
