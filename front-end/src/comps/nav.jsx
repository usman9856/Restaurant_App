import "./nav.css"

function NavbarComponent(){
    return(
        <>
        <nav class="navigationWrapper">
            <div class="logoWrapper">
                <span class="stylish">Stylish</span>
                <span class="logo">Logo</span>
            </div>
            <ul class="navigation">
                <li class="parent"><a class="link" href="#">Home</a></li>
                <li class="parent"><a class="link" href="#">About</a></li>
                <li class="parent" id="clients"><a class="link" href="#"><i class="fas fa-minus"></i> Clients <i class="fas fa-plus"></i></a></li>
                <li class="parent" id="services"><a class="link" href="#"><i class="fas fa-minus"></i> Services <i class="fas fa-plus"></i></a></li>
                <li class="parent"><a class="link" href="#">Contact</a></li>
            </ul>
        </nav>
</>
    )
}

export default NavbarComponent