const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-close');
const modalContainer = document.querySelector('.js-modal-container');
// open modal and add class open
function showBuyBtickets() {
    modal.classList.add('open');
}
// hide modal
function hideBuyTickets() {
    modal.classList.remove('open');
}
// loop button
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyBtickets);
}
// listener event
modalClose.addEventListener('click', hideBuyTickets);

modal.addEventListener('click', hideBuyTickets);

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});


// menu mobile

const header = document.getElementById('header');
const menu = document.querySelector('.js-menu-btn');
const getHeight = header.clientHeight;

// open/close menu mobile

menu.addEventListener('click', function () {
    const isClose = header.clientHeight === getHeight;
    if (isClose) {
        header.style.height = 'auto';
    }else{
        header.style.height = null;
    }
})
// Khai báo biến header/ mobile/ headerHeight
        // Đóng/ Mở mobile menu
        // Khi click vào mobileMenu thì sẽ chạy hàm như sau: 
            // Khai báo biến isclosed = header.clientHeight bằng với headerHeight (biến True False);
            // Nếu biến isClosed đúng thì header.style.height ='auto' --> sổ ra 
            // Nếu biến isClosed sai thì header.style.height = null --> đóng vào

            // Tự động đóng khi chọn menu\

            const menuItems = document.querySelectorAll('#nav li a[href*="#"]');

            for( const item of menuItems){
        
                item.addEventListener('click', function (event) {

                    const isParentMenu = item.nextElementSibling && item.nextElementSibling.classList.contains('subnav');
                    if(isParentMenu){
                        event.preventDefault();
                    }else{
                        header.style.height = null;
                    }
                });
            }

 //Khai báo biến menuItems là các thẻ nav li a có chứa dấu #
        // Chạy vòng lặp for (khai báo biến i=0; nếu i nhỏ hơn số lượng MenuItems; tăng i lên 1) Nếu i thỏa mãn chạy: 
            // Khai báo biến tạm menuItem = truyền giá trị của menuItems vị trí i vào;
            // Khi click vào menuItem chạy hàm 
               //header.style.height =null; --> giấu thanh đi




            
// Automatic Slideshow - change image every 4 seconds

// Automatic Slideshow - change image every 4 seconds
let automactic = 0;
changePics();

function changePics () {
 const  mySlider = document.querySelectorAll(".my-slider");
 console.log(automactic);
 for (const slider of mySlider) {
    slider.style.display = "none";  
  }
  automactic++;
  if (automactic > mySlider.length){
      automactic = 1;
    }
  mySlider[automactic-1].style.display = "block";  
  setTimeout(changePics, 4000);    
}


let current = 1,
playPauseBool = true,
interval;

const changeSlides = () => {
const slideList = document.querySelectorAll(".slide");
const slides = Array.from(slideList);
console.log(current);
if (current > slides.length) {
  current = 1;
} else if (current === 0) {
  current = slides.length;
}

slides.forEach(slide => {
  if (slide.classList[1].split("-")[1] * 1 === current) {
    slide.style.cssText = "visibility: visible; opacity: 1";
  } else {
    slide.style.cssText = "visibility: hidden; opacity: 0";
  }
});
};

const arrowVisibility = () => {
const arrows = document.querySelectorAll(".control");
Array.from(arrows).forEach(arrow => {
  if (!playPauseBool) {
    arrow.classList.add("arrows-visibility");
  } else {
    arrow.classList.remove("arrows-visibility");
  }
});
};

const changePlayPause = () => {
const i = document.querySelector(".play-pause i");
const cls = i.classList[1];
if (cls === "fa-play") {
  i.classList.remove("fa-play");
  i.classList.add("fa-pause");
} else {
  i.classList.remove("fa-pause");
  i.classList.add("fa-play");
}
};

const playPause = () => {
if (playPauseBool) {
  interval = setInterval(() => {
    current++;
    changeSlides();
  }, 3000);
  playPauseBool = false;
} else {
  clearInterval(interval);
  playPauseBool = true;
}
arrowVisibility();
changePlayPause();
};

document.querySelector(".left-arrow").addEventListener("click", () => {
if (!playPauseBool) {
  playPause();
}
current--;
changeSlides();
});

document.querySelector(".right-arrow").addEventListener("click", () => {
if (!playPauseBool) {
  playPause();
}
current++;
changeSlides();
});

document.querySelector(".play-pause").addEventListener("click", () => {
playPause();
});

changeSlides();
playPause();
