import React, { useState } from 'react';
import YogaClass from '../../../assets/images/YogaStory/YogaClass.png';
import YogaDay from '../../../assets/images/YogaStory/YogaDay.png';
import YogaLetters from '../../../assets/images/YogaStory/YogaLetters.png';
import YogaMember from '../../../assets/images/YogaStory/YogaMember.png';
import YogaMorning from '../../../assets/images/YogaStory/YogaMorning.png';
import YogaSteps3 from '../../../assets/images/YogaStory/YogaSteps3.png';

const PaginationComponent = () => {
  const [active, setActive] = useState(1); // Initialize active page to 1

  // Array of image URLs
  const imageUrls = [
    YogaClass,
    YogaDay,
    YogaLetters,
    YogaMember,
    YogaMorning,
    YogaSteps3,
  ];

  // Handle click event for pagination
  const handlePageClick = (number) => {
    setActive(number);
  };

  // Render small images for pagination
  const smallImages = imageUrls.map((imageUrl, index) => (
    <img 
      key={index}
      src={imageUrl}
      alt={`yoga ${index + 1}`}
      onClick={() => handlePageClick(index + 1)}
      style={{ maxWidth: '50px', margin: '5px', cursor: 'pointer' }}
      className='border border-light shadow rounded-1'
    />
  ));

  return (
    <div className='w3-container w3-content w3-padding-large '>
        <div className='row  w3-padding-small w3-padding-64 '>
        <div className='col-sm-12 col-md-6 col-lg-6  w3-padding-small w3-padding-64 '>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6  w3-padding-small w3-padding-64 w3-light-gray shadow'>
      {/* Large image */}
      <div style={{ textAlign: 'center' }} >
        <img 
          src={imageUrls[active - 1]}
          alt={`yoga ${active}`}
          style={{ maxWidth: '40%', height: 'auto' }} 
          className='shadow border border-light rounded-1 '
        />
      </div>
      
      {/* Small images for pagination */}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        {smallImages}
      </div>
  
      </div>
      </div>
    </div>
  );
};

export default PaginationComponent;
