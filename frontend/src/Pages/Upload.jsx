import {useState} from 'react'

export default function Upload() {
  const[image,setImage] = useState(null);

  const handleChange = (e) => { 
    setImage(e.target.files[0]);
  }
  return (
    <div>
      <h2>Upload image</h2>
      <input type="file" accept="image/*" onChange={handleChange}/>

      {image && (
        <div>
          <p>File: {image.name}</p>
          <img src={URL.createObjectURL(image)} alt="preview" width="200"/>
        </div>
      )}
    </div>
  )
}
