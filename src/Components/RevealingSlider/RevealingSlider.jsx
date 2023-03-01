import React, { useState, useEffect } from 'react';
import {fadeInImages} from  "../../Anim";
import $ from 'jquery';

function RevealingSlider(props) {
  useEffect(() => {
    fadeInImages(); // call the fadeInImages function on component mount
  }, []);
  const [sliderPos, setSliderPos] = useState(Math.floor(Math.random() * 26) + 45);
  const sliderId = `slider-${props.id}`;

  useEffect(() => {
    $(`#${sliderId}`).on("input change", (e)=>{
        const sliderPos = e.target.value;
        // Update the width of the foreground image
        $(`.foreground-img.${sliderId}`).css('width', `${sliderPos}%`)
        // Update the position of the slider button
        $(`.slider-button.${sliderId}`).css('left', `calc(${sliderPos}% - 26px)`)
      });
    $(`.foreground-img.${sliderId}`).css('width', `${sliderPos}%`);
  }, [sliderPos, sliderId]);

  useEffect(() => {
    // Update the position of the slider button when the component loads
    $(`.slider-button.${sliderId}`).css('left', `calc(${sliderPos}% - 26px)`);
  }, [sliderPos, sliderId]);
  
  const handleSliderChange = (e) => {
    setSliderPos(e.target.value);
  };
  
  const Before = {
    backgroundImage: `url(${props.Background})`,
  };
  const After = {
    backgroundImage: `url(${props.Foreground})`,
  };

  

  return (
    <div className='RevealingSlider_Container hidden_opacity'>
      <div style={Before} className={`img background-img ${sliderId}`}></div>
      <div style={After} className={`img foreground-img ${sliderId}`}></div>
      <input
        type='range'
        min='0'
        max='100'
        value={sliderPos}
        className='slider'
        name='slider'
        id={sliderId}
        onChange={handleSliderChange}
      />

        <div className={`slider-button ${sliderId}`}></div>
    </div>
  );
}

export default RevealingSlider;
