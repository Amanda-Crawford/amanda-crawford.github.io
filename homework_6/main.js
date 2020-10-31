//set cart text on load of cart
function loadCart(){
  let cartText = document.getElementById("cartLink");
  let cartNum = localStorage.getItem("cartItems") || 2;
  let cartInnerText = "Cart (" + cartNum + ")";
  cartText.innerHTML = cartInnerText;
}


//Color change functions!
function changeColorBB() {
  let detailImg = document.getElementById("detailImg");
  detailImg.src = "./images/catHarnessBlack.jpg";

  let colorTextElem = document.getElementById("colorBtnTxt");
  colorTextElem.innerHTML = "Color: Blackberry";
};


function changeColorStraw() {
  let detailImg = document.getElementById("detailImg");
  detailImg.src = "./images/cat-Collar2.jpg";

  let colorTextElem = document.getElementById("colorBtnTxt");
  colorTextElem.innerHTML = "Color: Strawberry";
};


function changeColorCrazy() {
  let detailImg = document.getElementById("detailImg");
  detailImg.src = "./images/cat-collar.jpg";

  let colorTextElem = document.getElementById("colorBtnTxt");
  colorTextElem.innerHTML = "Color: Crazyberry";
};


function changeColorFire() {
  let detailImg = document.getElementById("detailImg");
  detailImg.src = "./images/catHarnessRed.jpg";

  let colorTextElem = document.getElementById("colorBtnTxt");
  colorTextElem.innerHTML = "Color: Fire Orange";
};


//Size Change functions!
function sizeTiny() {
  let sizeTextElem = document.getElementById("sizeBtnTxt");
  sizeTextElem.innerHTML = "Size: Tiny";
}

function sizeSmall() {
  let sizeTextElem = document.getElementById("sizeBtnTxt");
  sizeTextElem.innerHTML = "Size: Small";
}

function sizeMed() {
 let sizeTextElem = document.getElementById("sizeBtnTxt");
 sizeTextElem.innerHTML = "Size: Medium";
}

function sizeLarge() {
 let sizeTextElem = document.getElementById("sizeBtnTxt");
 sizeTextElem.innerHTML = "Size: Large";
}

function sizeXL() {
 let sizeTextElem = document.getElementById("sizeBtnTxt");
 sizeTextElem.innerHTML = "Size: Extra Large";
}

//Add to cart Function!

function addToCart() {
  let cartText = document.getElementById("cartLink");
  let cartItems = parseInt(localStorage.getItem("cartItems") || 2);
  let quantVal = parseInt(document.getElementById("quantity").value);
  cartItems += quantVal;
  //console.log("going from: " +cartItems + " to : " + newCartNum);
  let cartInnerText = "Cart (" + cartItems + ")";

  cartText.innerHTML = cartInnerText;
  localStorage.setItem('cartItems', cartItems);
}
