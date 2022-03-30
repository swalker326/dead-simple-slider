import { CSSProperties, MouseEvent, useRef } from "react";
type Props = {
  images: string[];
  style?: {
    height?: string;
    NavIcon?: {
      width?: string;
      height?: string;
      margin?: string;
      backgroundColor?: string;
      border?: string;
      borderRadius?: string;
      cursor?: string;
    };
    ImageStyle?: {
      objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
      width?: string;
    };
  };
};
const Slider = ({ images, style }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const SlideRefs = useRef<HTMLDivElement[]>([]);

  const handleNavClick = (event: MouseEvent) => {
    if (SlideRefs.current && event.target instanceof Element) {
      SlideRefs.current[parseInt(event.target.id)].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };
  // Styles
  const SliderContainer: CSSProperties = {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: style?.height || "20rem",
  };
  const SliderHolder: CSSProperties = {
    display: "flex",
    overflow: "auto",
    flex: "none",
    width: "100%",
    height: style?.height || "20rem",
    flexFlow: "row nowrap",
    scrollSnapType: "x mandatory",
  };
  const SlideHolder: CSSProperties = {
    display: "flex",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    justifyContent: "center",
    scrollSnapAlign: "start",
    flex: "none",
    minWidth: "100%",
    height: style?.height || "20rem",
  };
  const ImageStyle: CSSProperties = {
    objectFit: style?.ImageStyle?.objectFit || "cover",
    width: "100%",
  };
  const SliderNav: CSSProperties = {
    display: "flex",
    justifyContent: "center",
  };
  const NavIcon: CSSProperties = {
    width: "20px",
    height: "20px",
    margin: "15px 3px",
    backgroundColor: style?.NavIcon?.backgroundColor || "purple",
    border: "none",
    borderRadius: "100%",
    cursor: "pointer",
  };
  return (
    <div className="dead-simple-slider">
      <div style={SliderContainer}>
        <div style={SliderHolder}>
          {images.map((imageString, index) => (
            <div
              ref={(el: HTMLDivElement) => (SlideRefs.current[index] = el)}
              style={SlideHolder}
            >
              <img src={imageString} alt="" style={ImageStyle} />
            </div>
          ))}
        </div>
      </div>
      <div ref={sliderRef} style={SliderNav} onClick={handleNavClick}>
        {images.map((item, index) => (
          <button style={NavIcon} id={index.toString()}></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
