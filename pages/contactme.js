import NavBar from '../pages/NavBar'

const about = () => {
    return ( 
        <div id="main">
            <title>Contact me</title>

            <NavBar />

            <br /><br />

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

                <div className="text-center">
                    <br />
                    <p>Connect with me on social media.</p>
                      <img src="https://img.icons8.com/color-glass/50/000000/expand-arrow.png" />
                    <br /><br />
                </div>
            
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

        </div>

     );
}



export default about;