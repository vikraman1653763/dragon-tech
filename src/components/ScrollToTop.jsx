import React from "react";

const UpButton = () => {
  


    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button onClick={goTop} className="rocketbtn" >
            <img width="24px" height="auto" src="/assets/scrollup.webp" alt="Back to top" />
        </button>
    );
};

export default UpButton;