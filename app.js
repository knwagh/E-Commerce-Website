const wrapper=document.querySelector(".sliderWrapper");
const menuItem=document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "BoAt",
      price: 3499,
      desc: "Keeping a track of your heart rate and oxygen level SpO2 while having guided breathing for you to help in meditation and a daily activity tracker with 10 sports mode; this smartwatch is the complete package you look for in a partner!.",
      colors: [
        {
          code: "darkblue",
          img: "./img/boat2.png",
        },
        {
          code: "red",
          img: "./img/boat1.png",
         
        },
        {
          code: "black",
          img: "./img/boat3.png",
        },
      ],
    },
    {
      id: 2,
      title: "Apple",
      price: 5599,
     desc: " Move. Exercise. Stand. Track all the ways you're active. Activity rings show your daily activity. Make it your goal to close them every day. To keep you motivated there are awards, personalised coaching and Activity competitions.",
      colors: [
        {
          code: " rgb(240, 186, 194)",
          img: "./img/apple2.png",
        },
        {
          code: "white",
          img: "./img/apple3.png",
        },
        {
          code: "rgb(233, 121, 136)",
          img: "./img/apple4.png",
        },
      ],
    },
    {
      id: 3,
      title: "Noise",
      price: 2399,
      desc:"Answer calls from your wrist , Keep your eyes on the bigger picture as you go about your day and get all the information at a glance , Take charge of your day. Make calls, play music, know the weather and open the camera just by talking to your watch.",
      colors: [
        {
          code: "black",
          img: "./img/noise3.png",
        },
        {
          code: "white",
          img: "./img/noise5.png",
        },
        {
          code: "rgb(49, 178, 230)",
          img: "./img/noise4.png",
        },
       
      ],
    },
    {
      id: 4,
      title: "Realme",
      price: 4299,
      desc: '3.5cm (1.4") Large Color Touchscreen with a high resolution of 320 x 320 pixelscan display vivid and lifelike visuals which are so captivating that you ll never want to look away. Its responsive touch lets you effortlessly control the watch.',
      colors: [
        {
          code: "black",
          img: "./img/realme1.png",
        },
        {
          code: "white",
          img: "./img/realme2.png",
        },
        {
          code: "rgb(249, 50, 50)",
          img: "./img/realme3.png",
        },
      ],
    },
    {
      id: 5,
      title: "Samsung",
      price: 2299,
      desc: "The Galaxy Watch is a smartwatch that can analyse your exercise pattern, manage your health and allows you to use a variety of convenient apps for making phone calls and playing music.  By rotating the bezel, you can access convenient features quickly and easily. You can also change the watch face to your taste.",
      colors: [
        {
          code: "gray",
          img: "./img/samsumg1.png",
        },
        {
          code: "black",
          img: "./img/samsung2.png",
        },
        {
          code: "brown",
          img: "./img/samsumg3.png",
        },
      ],
    },
  ];
  let choosenProduct= products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
let currentProductDesc =document.querySelector(".productDesc");



 menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {

      wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = products[index];

        currentProductTitle.textContent=choosenProduct.title;
        currentProductDesc.textContent=choosenProduct.desc;
        currentProductPrice.textContent= "₹" + choosenProduct.price;
        currentProductImg.src =choosenProduct.colors[0].img;
        
      

        currentProductColors.forEach((color, index)=>{

          color.style.backgroundColor = choosenProduct.colors[index].code;
        });
       
    });
 });


 currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
    currentProductImg.src=choosenProduct.colors[index].img;
    });
 });


 currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
currentProductSizes.forEach((size) => {
  size.style.backgroundColor = "white";
    size.style.color = "black";
});

    size.style.backgroundColor = "black";
    size.style.color = "white";
  })
 })


 const productButton =document.querySelector(".productButton");
 const payment =document.querySelector(".payment");
 const close= document.querySelector(".close");

 productButton.addEventListener("click",()=>{
   payment.style.display="flex";
 });

close.addEventListener("click",()=>{
  payment.style.display="none";
});







const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
