Dead Simple Slider

to install `npm install dead-simple-slider`

to use

```javascript
import {Slider} from 'dead-simple-slider'

const images = [
  'https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1517249361621-f11084eb8e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmF0bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1623984109622-f9c970ba32fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXJvbm1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1592513002316-e4fa19175023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXJvbm1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
]

<Slider images={images} />
```

The slider accepts an optional style prop that can style the 6 main components of the slider

- SliderContainer
- SliderHolder
- SlideHolder
- SlideImage
- NavIcon

the default styling looks like this:

```javascript
const SlideHolder: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  scrollSnapAlign: "start",
  flex: "none",
  minWidth: "100%",
  height: style?.height || "20rem",
};
const SlideImage: CSSProperties = {
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
```
