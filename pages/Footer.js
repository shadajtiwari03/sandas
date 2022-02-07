import Link from "next/link"

export default function NavBar() {
    return(
       <>
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
        </>
        
        )   
    }
    
