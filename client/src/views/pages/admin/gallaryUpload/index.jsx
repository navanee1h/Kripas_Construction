import React, { useState } from "react";

function ImageGallery() {
  //   const [file, setFile] = useState;
  //   const upload = () => {}
  return (
    <div style={{backgroundColor:"red"}}>
      <input
        type="file"
        //   onChange={(e) => setFile(e.target.files[0])}
      />
      <button>Upload</button>
    </div>
  );
}

export default ImageGallery;
