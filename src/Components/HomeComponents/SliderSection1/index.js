import React from 'react'
import './style.scss'

function SliderSecton1() {
  return (
    <>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5" class="active"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://dlcdnwebimgs.asus.com/gain/21ECF5A7-68FE-41EF-ADC0-02E0F19AFCD3/fwebp" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://dlcdnwebimgs.asus.com/gain/61E66D12-AD75-475E-A70D-37169A60BDF0/fwebp" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://dlcdnwebimgs.asus.com/gain/C6CAB979-3C02-4F28-ABF7-85B9984351AD/fwebp" alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://dlcdnwebimgs.asus.com/gain/BA27DC28-9633-4768-BF7B-2A37EFAA3C74/fwebp" alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://dlcdnwebimgs.asus.com/gain/9EB0C91D-5C6D-4F7E-AEB1-7823F8B76594/fwebp" alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://dlcdnwebimgs.asus.com/gain/0A33FE2D-9022-44B7-9FA3-A20C787F0D00/fwebp" alt="Third slide"/>
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    
    
    </>
  )
}

export default SliderSecton1