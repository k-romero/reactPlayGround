import React from "react";

function FeatureBoxes(props) {
  return (
    <div className="my-container">
      <div class="my-row">
        <div class="col-1-of-4">
          <div class="feature-box">
            <i class="feature-box__icon icon-basic-printer"></i>
            <h3 class="heading-tertiary u-margin-bottom-small">Print Design</h3>
            <p class="feature-box__text">
              I grew up having a love for print design so that's where I started
              my creative journey and where I learned to use Adobes Cretive
              Suite.
            </p>
          </div>
        </div>

        <div class="col-1-of-4">
          <div class="feature-box">
            <i class="feature-box__icon icon-basic-webpage-img-txt"></i>
            <h3 class="heading-tertiary u-margin-bottom-small">Front End</h3>
            <p class="feature-box__text">
              I picked up front end development as a hobby and have been able to
              build a few sites including this one using SASS and webpack.
            </p>
          </div>
        </div>

        <div class="col-1-of-4">
          <div class="feature-box">
            <i class="feature-box__icon icon-basic-webpage-multiple"></i>
            <h3 class="heading-tertiary u-margin-bottom-small">Back End</h3>
            <p class="feature-box__text">
              I'm currently putting a majority of my focus in core Java, Spring
              Boot and using testing frameworks such as JUnit and Mockito.
            </p>
          </div>
        </div>

        <div class="col-1-of-4">
          <div class="feature-box">
            <i class="feature-box__icon icon-basic-server-cloud"></i>
            <h3 class="heading-tertiary u-margin-bottom-small">Learning AWS</h3>
            <p class="feature-box__text">
              Recently began incorporating AWS using SDK to connect to an S3
              bucket for file upload and our RDS to store data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureBoxes;
