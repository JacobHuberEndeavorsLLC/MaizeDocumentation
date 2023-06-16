const ImageStacking = ({ image1, image2 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <img src={image1} alt="Image 1" className="w-full" />
      </div>
      <div>
        <img src={image2} alt="Image 2" className="w-full" />
      </div>
    </div>
  );
};

export default ImageStacking;
