
// LightboxModal.jsx
import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import the correct styles

const LightboxModal = ({ images, isOpen, onClose }) => {
  if (!isOpen) return null;

  const galleryImages = images.map(src => ({
    original: src, // The main image
    thumbnail: src // The thumbnail image
  }));

  return (
    <div className="lightbox-modal">
      <Gallery
        items={galleryImages}
        showThumbnails={false}
        showFullscreenButton={true} // Show fullscreen button
        showPlayButton={false}
        onClose={onClose}
      />
    </div>
  );
};

export default LightboxModal;
