let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/monty-truth.jpg") {
    myImage.setAttribute("src", "images/luohao.png");
  } else {
    myImage.setAttribute("src", "images/monty-truth.jpg");
  }
};
