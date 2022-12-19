import { Navbar, Hero, About, Blog, Footer } from "./components";

function App() {
  return (
    <div className='flex min-h-screen bg-netral-l-gray-blue'>
      <div className='w-full md:max-w-[1440px] md:grid md:place-content-center md:mx-auto'>
        {/* Header Navbar Start */}
        <header>
          <Navbar />
        </header>
        {/* Header navbar end */}
        <main>
          {/* main section start */}
          <div id='content'>
            <Hero />
            <About />
            <Blog />
          </div>
          {/* Main section end */}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
