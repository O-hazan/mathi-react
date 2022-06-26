import { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div class="container-fluid row pt-2">
        <div
          id="carouselExampleSlidesOnly"
          class="col carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/Resources/sup.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/Resources/sup.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/Resources/sup.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="card card-right" style={{ width: "18rem" }}>
            <img src="/Resources/rice.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Eating out</h5>
              <p class="card-text">Watch mathi's last Milstones.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Climbing the triangle</li>
              <li class="list-group-item">Saying si</li>
            </ul>
            <div class="card-body">
              <a href="/milestones.html" class="card-link">
                See All Milestones
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
