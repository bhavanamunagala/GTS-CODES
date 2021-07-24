
import { extend } from 'jquery';
import React,{Component} from 'react';
import TrainingCard from './TrainingCard';
import leftArrow from '../../assets/img/icons/common/leftArrow.png'
import rightArrow from '../../assets/img/icons/common/rightArrow.png'

class TrainingSlider extends Component{

    render(){
        return <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
 
  <div class="carousel-inner container">
    <div class="carousel-item active">
        <TrainingCard/>
    </div>
    <div class="carousel-item">
        <TrainingCard/>
    </div>
    <div class="carousel-item">
        <TrainingCard/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span  aria-hidden="true"><img src={leftArrow} /></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span aria-hidden="true"><img src={rightArrow} /></span>
    <span class="sr-only">Next</span>
  </a>
</div>;
    }

}

export default TrainingSlider;