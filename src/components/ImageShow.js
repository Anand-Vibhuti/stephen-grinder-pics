function ImageShow({image}) {
  return ( <div><form >{image.alt_description}
  {console.log(image)}
  <img src={image.links.download} style={{width:95,height:85}} /> 
 </form> </div>);
}
export default ImageShow;
