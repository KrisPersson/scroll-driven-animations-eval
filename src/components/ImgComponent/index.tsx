type ImgProps = {
  imgSrc: string;
  imgDescription?: string;
  animationClassName?: string[];
};

import "./index.css";

export default function ImgComponent({
  imgSrc,
  imgDescription,
  animationClassName,
}: ImgProps) {
  return (
    <div className="img-component">
      <div
        className={`img-wrapper animation ${
          animationClassName.length > 0 &&
          animationClassName?.reduce((acc, cur) => {
            return acc + " " + cur;
          }, "")
        }`}
      >
        <img className="img-class" src={`/${imgSrc}.jpg`} />
      </div>
      {imgDescription && (
        <p className="img-text p-description">{imgDescription}</p>
      )}
    </div>
  );
}
