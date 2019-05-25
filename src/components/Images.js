import React from "react";

function Images(props) {
  let dogImages;
  const { images } = props;
  if (images !== "") {
    dogImages = (
      <div className="images">
        {images.map(img => (
          <a key={img} href={img} rel="noopener noreferrer" target="_blank">
            <img key={img} src={img} alt="dogs" />
          </a>
        ))}
      </div>
    );
  }
  return <div>{dogImages}</div>;
}

export default Images;
