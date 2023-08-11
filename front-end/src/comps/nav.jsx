import "./css/nav.css"
import user from "./icons/user_.png"
import { useState } from "react"
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
                    <li className=""><a className="link" href="#">Login</a></li>
                    <li className=""><a className="link" href="#">Signup</a></li>
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
                    <li className=""><a className="link" href="#">Login</a></li>
                    <li className=""><a className="link" href="#">Signup</a></li>
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

function NavbarComponent_admin_detail() {
    const [selectedOption, setSelectedOption] = useState('Restaurant');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (

            <nav className='admin_detail'>
                <ul id='admin-func'>
                    <li
                        className={selectedOption === 'Restaurant' ? 'active' : ''}
                        onClick={() => handleOptionClick('Restaurant')}
                    >
                        Restaurant
                    </li>
                    <li
                        className={selectedOption === 'Pickup' ? 'active' : ''}
                        onClick={() => handleOptionClick('Pickup')}
                    >
                        Pickup
                    </li>
                    <li
                        className={selectedOption === 'Delivery' ? 'active' : ''}
                        onClick={() => handleOptionClick('Delivery')}
                    >
                        Delivery
                    </li>
                </ul>
            </nav>
    );
}

export {NavbarComponent_user,NavbarComponent_admin,NavbarComponent_admin_detail}