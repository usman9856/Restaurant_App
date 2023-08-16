import "./css/nav.css"
import user from "./icons/user_.png"
import React from "react"

function NavbarComponent_user(props){


    if(props.type===0){
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
                    <li>Login</li>
                    <li>Signup</li>
                    {/* <li><button><Link to="/Login" element={<Login/>}>Login</Link></button></li>
                    <li><button><Link to="/Signup" element={<Signup/>}>Signup</Link></button></li> */}
                </ul>
            </nav>
    </>
        )
    }
    else if (props.type===1){
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
                    <li className="icon"><a className="link" href="#"><img src={user} alt="user icon" /></a></li>
                </ul>
            </nav>
    </>
        )
    }
}

function NavbarComponent_admin(props) {

    if(props.type===0){
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
                    <li>Login</li>
                    <li>Signup</li>
                    {/* <li className=""><button><Link to="/Login">Login</Link></button></li>
                    <li className=""><button><Link to="/Signup">Signup</Link></button></li> */}
                </ul>
            </nav>
    </>
        )
    }
    else if (props.type===1){
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
                    <li className="icon"><a className="link" href="#"><img src={user} alt="user icon" /></a></li>
                </ul>
            </nav>
    </>
        )
    }
}

function NavbarComponent_admin_detail({ selectedOption, handleOptionChange }) {

    return (
      <nav className='admin_detail'>
        <ul id='admin-func'>
          <li className={selectedOption === 'Restaurant' ? 'active' : ''} onClick={() => handleOptionChange('Restaurant')}>Restaurant</li>
          <li className={selectedOption === 'Pickup' ? 'active' : ''} onClick={() => handleOptionChange('Pickup')}>Pickup</li>
          <li className={selectedOption === 'Delivery' ? 'active' : ''} onClick={() => handleOptionChange('Delivery')}>Delivery</li>
        </ul>
      </nav>
    );
  }
  

export {NavbarComponent_user,NavbarComponent_admin,NavbarComponent_admin_detail}