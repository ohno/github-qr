window.onload = function() {
  SVG();
}

// SVG
function SVG() {
  
  // reset
  var parent = document.getElementById('qrcode');
  var url = document.getElementById('url').value;
  while(parent.lastChild){
    parent.removeChild(parent.lastChild);
  }

  // generate // https://github.com/oblakstudio/qr-code-styling
  const qrCode = new QRCodeStyling({
    width: 1200,
    height: 1200,
    type: "svg",
    data: url,
    // image: "./assets/img/github.svg",
    image: "data:image/svg+xml,%3Csvg width='44' height='43' viewBox='0 0 44 43' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M21.7173 -2.56102e-06C9.724 -2.56102e-06 0 9.724 0 21.72C0 31.316 6.22267 39.456 14.8533 42.3293C15.94 42.528 16.336 41.8573 16.336 41.2813C16.336 40.7667 16.3173 39.4 16.3067 37.588C10.2653 38.9 8.99067 34.676 8.99067 34.676C8.00267 32.168 6.57867 31.5 6.57867 31.5C4.60667 30.152 6.728 30.1787 6.728 30.1787C8.908 30.3333 10.0547 32.4173 10.0547 32.4173C11.992 35.736 15.1387 34.7773 16.376 34.2227C16.5733 32.8187 17.1333 31.8613 17.7547 31.3187C12.932 30.7707 7.86133 28.9067 7.86133 20.584C7.86133 18.2133 8.708 16.2747 10.0973 14.756C9.87333 14.2067 9.128 11.9987 10.3093 9.008C10.3093 9.008 12.1333 8.424 16.2827 11.2347C18.0147 10.7533 19.8733 10.512 21.72 10.504C23.564 10.512 25.4227 10.7533 27.1573 11.2347C31.304 8.424 33.124 9.008 33.124 9.008C34.3093 11.9987 33.564 14.2067 33.34 14.756C34.732 16.2747 35.5733 18.2133 35.5733 20.584C35.5733 28.928 30.4947 30.764 25.656 31.3013C26.436 31.972 27.1307 33.2973 27.1307 35.324C27.1307 38.2267 27.104 40.5693 27.104 41.2813C27.104 41.8627 27.4947 42.5387 28.5973 42.3267C37.2213 39.448 43.4387 31.3133 43.4387 21.72C43.4387 9.724 33.7133 -2.56102e-06 21.7173 -2.56102e-06Z' fill='%231B1817'/%3E%3C/svg%3E%0A",
    backgroundOptions: {
      color: "transparent",
    },
    cornersSquareOptions: {
      color: "#1B1817",
      type: "extra-rounded",
    },
    cornersDotOptions: {
      color: "#1B1817",
      type: "dot",
    },
    dotsOptions: {
      color: "#1B1817",
      type: "dots"
    },
    imageOptions: {
      imageSize: 0.5,
      margin: 10
    },
  });

  // show
  qrCode.append(parent);

  // resize SVG
  var child = parent.children[0];
  child.removeAttribute("width");
  child.removeAttribute("height");
  child.setAttribute("width", 200);
  child.setAttribute("height", 200);
  child.setAttribute("viewBox", "0 0 1200 1200");
  
  // return to save by button
  return qrCode;
}


// PNG
function PNG() {
  
  // reset
  // var parent = document.getElementById('qrcode');
  var url = document.getElementById('url').value;
  // while(parent.lastChild){
  //   parent.removeChild(parent.lastChild);
  // }

  // generate // https://github.com/oblakstudio/qr-code-styling
  const qrCode = new QRCodeStyling({
    width: 1200,
    height: 1200,
    type: "canvas",
    data: url,
    // image: "./assets/img/github.png",
    // image: "./assets/img/github.svg",
    image: "data:image/svg+xml,%3Csvg width='44' height='43' viewBox='0 0 44 43' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M21.7173 -2.56102e-06C9.724 -2.56102e-06 0 9.724 0 21.72C0 31.316 6.22267 39.456 14.8533 42.3293C15.94 42.528 16.336 41.8573 16.336 41.2813C16.336 40.7667 16.3173 39.4 16.3067 37.588C10.2653 38.9 8.99067 34.676 8.99067 34.676C8.00267 32.168 6.57867 31.5 6.57867 31.5C4.60667 30.152 6.728 30.1787 6.728 30.1787C8.908 30.3333 10.0547 32.4173 10.0547 32.4173C11.992 35.736 15.1387 34.7773 16.376 34.2227C16.5733 32.8187 17.1333 31.8613 17.7547 31.3187C12.932 30.7707 7.86133 28.9067 7.86133 20.584C7.86133 18.2133 8.708 16.2747 10.0973 14.756C9.87333 14.2067 9.128 11.9987 10.3093 9.008C10.3093 9.008 12.1333 8.424 16.2827 11.2347C18.0147 10.7533 19.8733 10.512 21.72 10.504C23.564 10.512 25.4227 10.7533 27.1573 11.2347C31.304 8.424 33.124 9.008 33.124 9.008C34.3093 11.9987 33.564 14.2067 33.34 14.756C34.732 16.2747 35.5733 18.2133 35.5733 20.584C35.5733 28.928 30.4947 30.764 25.656 31.3013C26.436 31.972 27.1307 33.2973 27.1307 35.324C27.1307 38.2267 27.104 40.5693 27.104 41.2813C27.104 41.8627 27.4947 42.5387 28.5973 42.3267C37.2213 39.448 43.4387 31.3133 43.4387 21.72C43.4387 9.724 33.7133 -2.56102e-06 21.7173 -2.56102e-06Z' fill='%231B1817'/%3E%3C/svg%3E%0A",
    backgroundOptions: {
      color: "transparent",
    },
    cornersSquareOptions: {
      color: "#1B1817",
      type: "extra-rounded",
    },
    cornersDotOptions: {
      color: "#1B1817",
      type: "dot",
    },
    dotsOptions: {
      color: "#1B1817",
      type: "dots"
    },
    imageOptions: {
      imageSize: 0.5,
      margin: 10
    },
  });

  // show
  // qrCode.append(parent);

  // return to save by button
  return qrCode;
}
