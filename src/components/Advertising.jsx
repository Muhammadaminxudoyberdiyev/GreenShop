import React from 'react'

function Advertising() {
  return (
    <>
        <div className="advertising-wrapper">
            <div className="advertising">
                <img src="/advertising1.svg" alt="flower" />
                <div className="advertising-text-container">
                    <h3>SUMMER CACTUS & SUCCULENTS</h3>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                    <button>Find more <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="advertising">
                <img src="/advertising2.svg" alt="flower" />
                <div className="advertising-text-container">
                    <h3>Styling Trends & much more</h3>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                    <button>Find more <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Advertising
