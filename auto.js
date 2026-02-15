const P = document.getElementById("portrait");
const img = new Image();
img.src = "./face.jpg";

img.onload = function(){
  const ratio = img.width / img.height;
  P.style.aspectRatio = `${img.width} / ${img.height}`;

  // auto adjust font density
  if(ratio < 0.8){
    P.style.fontSize = "0.4em";
  }else{
    P.style.fontSize = "0.6em";
  }
};
