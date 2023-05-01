import Carousel from 'react-bootstrap/Carousel';
import NFT3 from './Images/NFT3.png'
import NFT2 from './Images/NFT2.jpeg'
import NFT1 from './Images/NFT1.png'
import metthew from './Images/metthew.jpeg'
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <div class='row'>
          <div class='col-lg-12 mb-2'>
            <div class="card card-body remove-margin" >
              <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/2.jpg' class="card-img-top bid-1" alt="..." /></div>

              <div class="card-body">
                <div class='author-sq1-top'>
                  <div class='spacing-styles'>
                    <div class='author-img'>
                      <img src={metthew}></img>
                      <span class="glyphicon glyphicon-ok-sign slider-icon"></span>
                    </div>
                    <div >
                      <a class='author-name'>James Charlie</a><div class='price'>$235768</div>
                    </div>
                  </div>

                  <div class='feature-btn'>Featured</div>
                </div>


              </div>
            </div>

          </div>
        </div>

        {/* <img
          className="d-block w-100"
          src={NFT3}
          alt="First slide"
        /> */}

      </Carousel.Item>
      <Carousel.Item>
      <div class="card card-body remove-margin" >
              <div class='image-section'> <img src='https://harnishdesign.net/demo/html/metovo/images/items/8.jpg' class="card-img-top bid-1" alt="..." /></div>

              <div class="card-body">
                <div class='author-sq1-top'>
                  <div class='spacing-styles'>
                    <div class='author-img'>
                      <img src={metthew}></img>
                      <span class="glyphicon glyphicon-ok-sign slider-icon"></span>
                    </div>
                    <div >
                      <a class='author-name'>James Charlie</a><div class='price'>$235768</div>
                    </div>
                  </div>

                  <div class='feature-btn'>Featured</div>
                </div>


              </div>
            </div>
        {/* <img
          className="d-block w-100"
          src={NFT2}
          alt="Second slide"
        /> */}

      </Carousel.Item>

    </Carousel>
  );
}

export default UncontrolledExample;