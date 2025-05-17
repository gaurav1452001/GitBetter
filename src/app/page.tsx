import Hero from "./_components/hero"
import Howitworks from "./_components/how-it-works"
import Footer from "./_components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-white">
      <Hero/>
      <Howitworks/>
      <Footer/>
    </div>
  )
}
