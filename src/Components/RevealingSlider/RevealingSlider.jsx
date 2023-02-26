import React, { useState, useEffect } from 'react';
// import Teacher_After from "../../Ilustrations/TeacherOld.png"
// import Teacher_After from "../../Ilustrations/Teacher_HomePage.png"
// import Teacher_Before from "../../Ilustrations/test.png"
import $ from 'jquery';

function RevealingSlider(props) {
  const [sliderPos, setSliderPos] = useState(68);
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
    <div className='RevealingSlider_Container'>
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
