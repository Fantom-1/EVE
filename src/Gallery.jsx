import { useState, useEffect } from "react";
import axios from "axios";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins"; 
import "yet-another-react-lightbox/styles.css";
import "./Gallery.css"; 

export default function App() {
  const [images, setImages] = useState([]);
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(-1);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newCaption, setNewCaption] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://192.168.77.84:3111/api/images");
      const data = response.data;

      const formattedImages = data.map((item) => ({
        src: item.url,
        original: item.url,
        thumbnail: item.thumbnailUrl,
        width: item.width * 1.5, 
        height: item.height * 1.5, 
        caption: item.caption || "No Caption",
      }));

      setImages(formattedImages);

      const formattedSlides = formattedImages.map(({ src, original, width, height, caption }) => ({
        src: original,
        thumbnail: src,
        width,
        height,
        description: caption, // Ensure captions are passed to Lightbox
      }));

      setSlides(formattedSlides);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleClick = (selectedIndex) => setIndex(selectedIndex);

  const handleUpload = async () => {
    if (!newImageUrl.trim() || !newCaption.trim()) {
      return alert("Enter a valid image URL and caption!");
    }

    try {
      const response = await axios.post("http://192.168.77.84:3111/api/upload", {
        url: newImageUrl,
        caption: newCaption,
      });

      if (response.status === 200) {
        setNewImageUrl("");
        setNewCaption("");
        fetchImages(); 
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // Handle lightbox navigation
  const handleMovePrev = () => setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  const handleMoveNext = () => setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  const handleClose = () => setIndex(-1);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Image Upload Form */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Enter image URL"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
          style={{ padding: "5px", width: "40%", marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Enter caption"
          value={newCaption}
          onChange={(e) => setNewCaption(e.target.value)}
          style={{ padding: "5px", width: "30%", marginRight: "10px" }}
        />
        <button onClick={handleUpload} style={{ padding: "5px 10px", cursor: "pointer" }}>
          Upload Image
        </button>
      </div>

      {/* Gallery */}
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        showImageCaptions={true}
        rowHeight={250} 
        margin={3.5} 
        maxRows={500} 
        imageComponents={images.map((image, idx) => ({
          ...image,
          className: "image-container", 
        }))}
      />

      {/* Lightbox with Mouse Scroll Zoom */}
      {index >= 0 && (
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={handleClose}
          on={{
            prev: handleMovePrev,
            next: handleMoveNext,
          }}
          plugins={[Zoom]} 
          zoom={{
            maxZoomPixelRatio: 100, 
            scrollToZoom: true, 
            wheelZoomDistanceFactor: 30, 
            animationDuration: 500, 
          }}
        />
      )}
    </div>
  );
}
