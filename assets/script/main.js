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
let current = 0;
changeSliders();

function changeSliders () {
 const  mySlider = document.querySelectorAll(".my-slider");
 console.log(current);
 for (const slider of mySlider) {
    slider.style.display = "none";  
  }
  current++;
  if (current > mySlider.length){
      current = 1;
    }
  mySlider[current-1].style.display = "block";  
  setTimeout(changeSliders, 4000);    
}


    