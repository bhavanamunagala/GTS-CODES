

import { extend } from 'jquery';
import React, { Component } from 'react';

class TrainingCard extends Component {

    render() {
        return <div class="card-deck">
            <div class="card">
                <img src={'javaimg.png'} class="card-img-top" alt="1img" class="w-5 h-30"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in </p>
                </div>
               
            </div>
            <div class="card w-30 h-40">
                <img src={'pythonImg.png'} class="card-img-top" alt="2img" class="w-5 h-30"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
               
            </div>
            <div class="card w-30 h-40">
                <img src={'sqlimg.png'} class="card-img-top" alt="3img" class="w-5 h-30" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in </p>
                </div>
               
            </div>
        </div>;
    }

}

export default TrainingCard;