import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import bg from '../Assets/main.jpg';
import './Pcss/upload.css';

export default function Upload() {
  const [image, setImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
 // const navigate = useNavigate();

  const handleChange = (e) => {
    setImage(e.target.files[0]);
    setProcessedImage(null);
  };

  const handleRemoveBackground = () => {
    if (image) {
      const processed = URL.createObjectURL(image);
      setProcessedImage(processed);
    }
  };

  const handleAddBackground = () => {
    alert('Lowde  enu aakilla olage');
  };

  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'processed-image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div
      id="upload-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div id="heading">
        <h2 id="upload-text">Upload image</h2>
      </div>

      <input
        type="file"
        accept="image/*"
        id="file-input"
        onChange={handleChange}
      />

      <div id="photo">
        {!image && (
          <label id="upload-label" htmlFor="file-input">
            <div className="plus-box">+</div>
            <p className="click-text">Click Here</p>
          </label>
        )}
      </div>

      {/* Show original image preview and remove button if no processed image */}
      {!processedImage && image && (
        <div id="button">
          <div id="preview">
            <p>File: {image.name}</p>
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
          <button id="remove-bg-btn" onClick={handleRemoveBackground}>
            Remove Background ➜
          </button>
        </div>
      )}

      {/* Show processed image preview and action buttons */}
      {processedImage && (
        <div id="processed-section">
          <h3>Processed Image Preview</h3>
          <img
            src={processedImage}
            alt="Processed"
            id="processed-image"
          />
          <div id="processed-buttons">
            <button id="add-bg-btn" onClick={handleAddBackground}>
              Add Background
            </button>
            <button id="download-btn" onClick={handleDownload}>
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
