import NavBar from '../pages/NavBar';
import Footer from '../pages/Footer'


const contactme = () => {
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
            <Footer />
        </div>

     );
}



export default contactme;