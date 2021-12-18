import NavBar from '../pages/NavBar'

const about = () => {
    return ( 
        <div id="main">
            <title>My Skills</title>

            <NavBar />
            <br /><br />            
            <section>
            
            <div>
              <div className="justify-content-center">
                <h2 className="text-center"><img src="https://img.icons8.com/color-glass/48/000000/support.png"/>&nbsp; <strong><span>Skills</span></strong></h2>
              </div>
            </div>

            <br />
            
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
            <br />
          </section>

            <section className="container pb-5">
            
            <br/><br/><br /><br />

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
        </div>

     );
}



export default about;