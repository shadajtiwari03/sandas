import NavBar from "../pages/NavBar"
import Footer from "../pages/Footer"
import Image from 'next/image';
import MyPic from "../styles/MyPic.png"
import Link from "next/link"

const Home = () => {
  return (
    <div  id="main">
      <meta name="theme-color" content="#999999" />
      <title>Home</title>

      <NavBar />
      <section className="container p-3" id="LandingPage">
        <div className="container">
          <div className="row">
            <div className="text-center col-md-6 p-3">
              <Image src={MyPic}/>
            </div>
            <div className="col-md-6 text-end">  
              <br /><br />
              <p id="LandingPageHeadLine">I'm Shadaj Tiwari, <br /> a <span id="FSWD"><strong> Full-Stack Web Developer </strong></span><br /> who loves to code and make music.</p>
              <Link href="/about" >
                <a>
                  <button id="know-more-btn"><strong>Know more &nbsp; <i className="far fa-hand-point-right"></i></strong></button>
                </a>
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link href="/contactme">
                <a>
                  <button id="get-in-touch-btn"><strong>Get in touch &nbsp;<i className="fal fa-phone"></i></strong></button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <br /><br />
      </section>

      <Footer />
         
    </div>
  )
}

export default Home;