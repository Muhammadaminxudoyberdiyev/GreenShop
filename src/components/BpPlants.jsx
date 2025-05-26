import SmallFlower from "/smallFlower.png";
import BigFlower from "/bigFlower.png";
import '../index.css'
function BpPlants() {
  return (
    <div className="container">
      <div
            id="carouselExampleInterval"
            className="car ousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="5000">
                <div className="better_planet">
                  <div className="part1">
                    <div className="part1_wrapper">
                      <h6 className="welcome_greenShop">
                        Welcome to GreenShop
                      </h6>
                      <h1 className="planet_title">
                        LET'S MAKE A BETTER <span>PLANET</span>
                      </h1>
                      <p className="planet_text">
                        We are an online plant shop offering a wide range of
                        cheap and trendy plants. Use our plants to create an
                        unique Urban Jungle. Order your favorite plants!
                      </p>
                    </div>
                    <button className="part1_btn">SHOP NOW</button>
                  </div>
                  <div className="part2">
                    <img className="small_flower" src={SmallFlower} />
                    <img className="big_flower" src={BigFlower} />
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <div className="better_planet">
                  <div className="part1">
                    <div className="part1_wrapper">
                      <h6 className="welcome_greenShop">
                        Welcome to GreenShop
                      </h6>
                      <h1 className="planet_title">
                        LET'S MAKE A BETTER <span>PLANET</span>
                      </h1>
                      <p className="planet_text">
                        We are an online plant shop offering a wide range of
                        cheap and trendy plants. Use our plants to create an
                        unique Urban Jungle. Order your favorite plants!
                      </p>
                    </div>
                    <button className="part1_btn">SHOP NOW</button>
                  </div>
                  <div className="part2">
                    <img className="small_flower" src={SmallFlower} />
                    <img className="big_flower" src={BigFlower} />
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <div className="better_planet">
                  <div className="part1">
                    <div className="part1_wrapper">
                      <h6 className="welcome_greenShop">
                        Welcome to GreenShop
                      </h6>
                      <h1 className="planet_title">
                        LET'S MAKE A BETTER <span>PLANET</span>
                      </h1>
                      <p className="planet_text">
                        We are an online plant shop offering a wide range of
                        cheap and trendy plants. Use our plants to create an
                        unique Urban Jungle. Order your favorite plants!
                      </p>
                    </div>
                    <button className="part1_btn">SHOP NOW</button>
                  </div>
                  <div className="part2">
                    <img className="small_flower" src={SmallFlower} />
                    
                    <img className="big_flower" src={BigFlower} />
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default BpPlants
