import React, { useState, useEffect } from 'react';
import { NavbarComponent_detail } from './nav';
import './css/track-order.css';
import tick from './img/check-circle.svg';
import CircularProgressBar from './loading_bar';
import './css/loading_bar.css';

function Track_Order() {
    const [selectedOption, setSelectedOption] = useState('Restaurant');
    const [orderProgress, setOrderProgress] = useState(0);
    const [flipped, setFlipped] = useState(false); // State to track if the card is flipped

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setOrderProgress(0);
        setFlipped(false);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (orderProgress < 100) {
                setOrderProgress(orderProgress + (10)); // Add 1 every second
            } else {
                clearInterval(interval);
                setFlipped(true); // Flip the card when progress is complete
            }
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, [orderProgress]); // Update on orderProgress change

    const progress = (title) => {
        if (flipped) {
            return (
                <>
                <img className='tick-image' src={tick} alt="Check Circle" /><br />
                {/* <h2>{title}</h2> */}
                </>
            );
        } else {
            return (
                <>
                <CircularProgressBar progress={orderProgress} /><br />
                {/* <h2>{title}</h2> */}
                </>
            );
        }
    };
    return (
        <>
            <div className='admin_body'>
                <center>
                    <NavbarComponent_detail
                        selectedOption={selectedOption}
                        handleOptionChange={handleOptionChange}
                    />
                </center>
            </div>
            <div className='order_body'>
                <div className='progress-bar-container'>
                    {progress("Order")}
                    <p className='progress-divider'>------------------------------------------------</p>
                    {progress("Cooking")}
                    <p className='progress-divider'>------------------------------------------------</p>
                    {progress("Thank you for ordering")}
                </div>
            </div>
        </>
    );
}

export default Track_Order;