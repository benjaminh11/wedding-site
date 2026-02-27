import { useState } from 'react';
import './Gallery.css';

const photos = [];

function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  function openPhoto(photo) {
    setSelectedPhoto(photo);
  }

  function closePhoto() {
    setSelectedPhoto(null);
  }

  function nextPhoto() {
    const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelectedPhoto(photos[nextIndex]);
  }

  function prevPhoto() {
    const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedPhoto(photos[prevIndex]);
  }

  return (
    <div className="gallery">

      <section className="gallery-hero">
        <div className="gallery-hero-overlay">
          <h1>Gallery</h1>
          <p>Our story in photos</p>
        </div>
      </section>

      <div className="gallery-grid container">
        {photos.length === 0 ? (
          <p className="gallery-empty">Photos coming soon!</p>
        ) : (
          photos.map((photo) => (
            <div
              className="gallery-item"
              key={photo.id}
              onClick={() => openPhoto(photo)}
            >
              <img src={photo.src} alt={`Gallery photo ${photo.id}`} loading="lazy" />
              <div className="gallery-item-overlay">
                <span>View</span>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedPhoto && (
        <div className="lightbox" onClick={closePhoto}>
          <button className="lightbox-close" onClick={closePhoto}>✕</button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevPhoto(); }}>‹</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPhoto.src} alt="Selected" />
          </div>
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextPhoto(); }}>›</button>
        </div>
      )}

    </div>
  );
}

export default Gallery;