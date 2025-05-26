import React from 'react'

function Blog() {
  return (
    <>
      <div className="blog">
        <div className="blog-title">
          <h2>Our Blog Posts</h2>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
        </div>
        <div className="blog-party">
          <div className="part">
            <img src="/blog1.svg" alt="" />
            <p className='party-text'>September 12  I Read in 6 minutes</p>
            <h3 className='party-title'>Cactus & Succulent Care Tips</h3>
            <p className='party-text2'>Cacti are succulents are easy care plants for any home or patio. </p>
            <a href='#' className='read-more'>Read More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="part">
            <img src="/blog2.svg" alt="" />
            <p className='party-text'>September 13  I Read in 2 minutes</p>
            <h3 className='party-title'>Top 10 Succulents for Your Home</h3>
            <p className='party-text2'>Cacti are succulents are easy care plants for any home or patio. </p>
            <a href='#' className='read-more'>Read More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="part">
            <img src="/blog3.svg" alt="" />
            <p className='party-text'>September 15  I Read in 3 minutes</p>
            <h3 className='party-title'>Cactus & Succulent Care Tips</h3>
            <p className='party-text2'>Cacti are succulents are easy care plants for any home or patio. </p>
            <a href='#' className='read-more'>Read More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="part">
            <img src="/blog4.svg" alt="" />
            <p className='party-text'>September 15  I Read in 2 minutes</p>
            <h3 className='party-title'>Best Houseplants Room by Room</h3>
            <p className='party-text2'>Cacti are succulents are easy care plants for any home or patio. </p>
            <a href='#' className='read-more'>Read More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
