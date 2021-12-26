import NavBar from "../pages/NavBar"
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
            <div className="col-md-6">  
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
            
            <div className="text-center col-md-6 p-3">
              <Image src={MyPic}/>
            </div>
          </div>
        </div>
        <br /><br />
      </section>

      <section className="container p-3" id="abut" > 
        <div className="justify-content-center">
            <h2 className="text-center"><img src="https://img.icons8.com/color-glass/48/000000/guest-male.png" />&nbsp; <strong><span id="AboutHeading"> About me </span></strong></h2>
        </div>
          <br />
        <div className="text-center text-light">
            <p id="AboutContent">My name is Shadaj Tiwari. I am a creative and a fairly perceptive person. I'm a hard worker with quick grasping skills. I love to explore and learn about new Technologies and Devices, Currently doing my Bachelor's in Electronics and Communication Engineering. I enjoy Listening to Music and working on my Music skills like producing some good music and enhancing guitar skills.</p>   
            <br />
            <div className="text-center">
                <br />
                <a id="ResumeLink" href="Resume.pdf" download>
                  <img src="https://img.icons8.com/color-glass/48/000000/download-from-cloud.png" /> &nbsp; Download my Resume
                </a>
            </div>  
            <br />
            <a href="bout1.html">
                <button id="more-about-me-btn"> More about me <i className="fal fa-arrow-right"></i></button>
            </a>
            </div>  
            <br /><br /><br /><br />
          </section>

          <section>
            <div className='container'>
            <br /><br /><br />
              <div className="row">
                <div className="col-sm-3 text-center">
                  <p><img src="https://img.icons8.com/color-glass/48/000000/medal.png"/><br /><span id="counternumber"> 03</span><span id="countersign">+</span></p>
                  <p id="counterlines">Years of experience</p>
                </div>
                
                <div className="col-sm-3 text-center">
                  <p><img src="https://img.icons8.com/color-glass/48/000000/realtime-protection.png"/><br /><span id="counternumber">11</span><span id="countersign">+</span></p>
                  <p id="counterlines">Projects done</p>
                </div>
                
                <div className="col-sm-3 text-center">
                  <p><img src="https://img.icons8.com/color-glass/48/000000/espresso-cup.png"/><br /><span id="counternumber">250</span><span id="countersign">+</span></p>
                  <p id="counterlines">Coffees drank</p>
                </div>
                
                <div className="col-sm-3 text-center">
                  <p><img src="https://img.icons8.com/color-glass/48/000000/code.png"/><br /><span id="counternumber">1500</span><span id="countersign">+</span></p>
                  <p id="counterlines">lines coded</p>
                </div>
              
              </div>
            </div>
            <br /><br /><br /><br/><br/>
          </section>
 
          <section>
            <br />
            <div>
              <div className="justify-content-center">
                <h2 className="text-center"><img src="https://img.icons8.com/color-glass/48/000000/support.png"/>&nbsp; <strong><span>Skills</span></strong></h2>
              </div>
            </div>

            <br/><br/><br />

            <div className="text-center">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <h4><img src="https://img.icons8.com/color-glass/48/000000/code-file.png"/>&nbsp; Technical</h4>
                      <br/>
                    <p>IoT &nbsp; &nbsp; &nbsp; Embedded Systems &nbsp; &nbsp; &nbsp; HTML &nbsp; &nbsp; &nbsp; CSS &nbsp; &nbsp; &nbsp; Javascript &nbsp; &nbsp; &nbsp; Bootstrap &nbsp; &nbsp; &nbsp; PHP &nbsp; &nbsp; &nbsp; Laravel &nbsp; &nbsp; &nbsp; MySQL &nbsp; &nbsp; &nbsp; MongoDb &nbsp; &nbsp; &nbsp; ReactJs &nbsp; &nbsp; &nbsp; NextJs &nbsp; &nbsp; &nbsp; NodeJs &nbsp; &nbsp; &nbsp; ExpressJs &nbsp; &nbsp; &nbsp; C &nbsp; &nbsp; &nbsp; Python &nbsp; &nbsp; &nbsp; Selenium</p>
                  </div>
                  
                  <div className="col-sm-6">
                    <h4><img src="https://img.icons8.com/color-glass/48/000000/speech-bubble-with-dots.png"/>&nbsp; Interpersonal</h4>
                      <br/>
                    <p>Focused &nbsp; &nbsp; &nbsp; Ambitious &nbsp; &nbsp; &nbsp; Creative &nbsp; &nbsp; &nbsp; Communication &nbsp; &nbsp; &nbsp; Flexibility &nbsp; &nbsp; &nbsp; Patience &nbsp; &nbsp; &nbsp; Risk taking &nbsp; &nbsp; &nbsp; Time management &nbsp; &nbsp; &nbsp; Team building &nbsp; &nbsp; &nbsp; Decision making</p>      
                  </div>
                
                </div>
                
                <br/><br/><br/><br/><br/>
                
                <div>
                  <h4><img src="https://img.icons8.com/color-glass/40/000000/medal2.png"/>&nbsp; Extra Curricular</h4>
                  <br/><br/>
      
                  <div className="row">
                    <div className="col-sm-6">Specialist in Guitar certified by Trinity College of Music London</div>
                    <div className="col-sm-6">Sangeet Prabhakar in Hindustani Classical Music (Piano, Vocal and Tabla)</div>
                  </div>

                  <br/>

                  <p>Winner 🏆 - Dr APJ Abdul Kalam Technical University Cultural Fest - Zonal and State - Battle of Bands</p>
                </div>
              </div>
            </div>
            <br/><br/><br/><br/>
          </section>

          
          <section id="contactme">
            <div className="container">
              <br/><br/>
              <h2 className="text-center"><strong><img src="https://img.icons8.com/color-glass/48/000000/nui2.png"/> &nbsp; Get in Touch</strong></h2>
              <br/><br/><br/><div className="row">
                <div className="col-sm-6 text-center">
                  <p>Hey, If you’ve got a project in mind, let’s talk! We can grab a coffee in person or if it’s easier, simply book in a meeting with me and we can jump on a call.</p>
                </div>

                <div className="col-sm-6 text-center">
                  <p><a id="ContactLinks" className="text-light" href="https://calendly.com/shadajtiwari01/onemeeting"><img src="https://img.icons8.com/color-glass/48/000000/video-message.png"/> &nbsp; Coffee with me</a></p>
                  <p><a id="ContactLinks" className="text-light" href="mailto: shadajtiwar01@gmail.com"><img src="https://img.icons8.com/color-glass/48/000000/filled-sent.png"/> &nbsp; Email me</a></p>
                  <p><a id="ContactLinks" className="text-light" href="tel: +917042731300"><img src="https://img.icons8.com/color-glass/48/000000/phone.png"/> &nbsp; Call me</a></p>
                </div> 
              </div> 
          
              <br/>
            </div>
            <br/><br/>
          </section>

          <hr />

            <footer className="text-center text-white">
              <div className="container pt-3 pb-3">
                  <a id="footerlinks" className="shadow-lg rounded m-1 px-2" href="https://api.whatsapp.com/send?phone=+917042731300&text=Hey Shadaj" role="button">
                    <img src="https://img.icons8.com/color-glass/40/000000/whatsapp.png"/>
                  </a>
                
                  <a id="footerlinks" className="shadow-lg rounded m-1 px-2" href="https://twitter.com/TiwariShadaj" role="button">
                    <img src="https://img.icons8.com/color-glass/40/000000/twitter.png"/>
                  </a>

                  <a id="footerlinks" className="shadow-lg rounded m-1 px-2" href="mailto: shadajtiwar01@gmail.com" role="button">
                    <img src="https://img.icons8.com/color-glass/40/000000/google-logo.png"/>
                  </a>

                  <a id="footerlinks" className="shadow-lg rounded m-1 px-2" href="https://www.instagram.com/shadajtiwari.in/" role="button">
                    <img src="https://img.icons8.com/color-glass/45/000000/instagram-new.png"/>
                  </a>

                  <a id="footerlinks" className="shadow-lg rounded m-1 px-2" href="https://www.linkedin.com/in/shadaj-tiwari-371281188/" role="button">
                    <img src="https://img.icons8.com/color-glass/45/000000/linkedin.png"/>
                  </a>

                <div className="text-center pt-4">
                  <img src="https://img.icons8.com/color-glass/40/000000/code.png"/> &nbsp; with &nbsp;<img src="https://img.icons8.com/color-glass/40/000000/like.png"/>&nbsp; by <a id="FooterContactLink" href="https://www.linkedin.com/in/shadaj-tiwari-371281188/"><strong>&nbsp; Shadaj Tiwari </strong></a>
                </div>
              </div>
            </footer>

            <BottomNavigation
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
</BottomNavigation>



    </div>
  )
}

export default Home;