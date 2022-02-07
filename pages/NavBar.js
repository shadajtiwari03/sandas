import Link from "next/link"

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = '50%';

  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  export default function NavBar() {
    return(
       <>
       <div id="mySidenav" class="sidenav">
            <div class='text-center'>
                <a class="closebtn" onClick={closeNav}><i class="fal fa-times"></i></a>
                <Link href='/'> 
                    <a id='nav-link' class='px-2'>Home</a>
                </Link>
                <Link href='/about'> 
                    <a id='nav-link' class='px-2'>About</a>
                </Link>
                <Link href='/skills'> 
                    <a id='nav-link' class='px-2'>Skills</a>
                </Link>
                <Link href='/contactme'> 
                    <a id='nav-link' class='px-2'>Contact me</a>
                </Link>
            </div>
        </div>

            <div class="row">
              <div class="col-6">
              
                <Link class="navbar-brands" href='/'> 
                    <a class="all-a"><h3>Shadaj Tiwari</h3></a>
                </Link>

              </div> 
              
              <div class="col-6" align="end">
                <a id="OpenNav" class="all-a" onClick={openNav}>
                    <i class="fal fa-bars"></i>
                </a>
              </div> 
            </div>
       </>
        
    )   
}

