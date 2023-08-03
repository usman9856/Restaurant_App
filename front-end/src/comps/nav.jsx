import "./nav.css"

function NavbarComponent(){
    return(
        <>
        <nav class="navigationWrapper">
            
            <ul>
                <li>
                <div class="logoWrapper">
                <span class="stylish">Stylish</span>
                <span class="logo">Logo</span>
            </div>
                </li>
            </ul>
            <ul class="navigation">
                <li class="parent"><a class="link" href="#">Home</a></li>
                <li class="parent"><a class="link" href="#">About</a></li>
                <li class="parent" ><a class="link" href="#"><i class="fas fa-minus"></i> Clients <i class="fas fa-plus"></i></a></li>
                <li class="parent" ><a class="link" href="#"><i class="fas fa-minus"></i> Services <i class="fas fa-plus"></i></a></li>
                <li class="parent"><a class="link" href="#">Contact</a></li>
            </ul>
            <ul className="navigation">
                <li className=""><a className="link" href="#">Login</a></li>
                <li className=""><a className="link" href="#">Signup</a></li>
            </ul>
        </nav>
</>
    )
}

export default NavbarComponent