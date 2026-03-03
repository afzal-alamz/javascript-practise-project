
let sliderImage = document.querySelector("#sliderImage");
let prevButton = document.querySelector("#prevBtn");
let imageCount = document.querySelector('#imageCount');
let nextBtn = document.querySelector("#nextBtn");

let image = ["https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg","https://www.shutterstock.com/image-photo/traveler-woman-arms-raised-triumph-260nw-2457990309.jpg","https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_1280.jpg","https://img.freepik.com/free-photo/nature-landscape-with-hand-holding-frame_23-2149389976.jpg?semt=ais_rp_progressive&w=740&q=80"];

let currentIndex = 0;
function updateSlider() {
    sliderImage.src = image[currentIndex];
    imageCount.innerText = `${currentIndex + 1}/${image.length}`;
}

prevButton.addEventListener("click",function(){
    if(currentIndex>0){
        currentIndex--;
        updateSlider();
    }
});
nextBtn.addEventListener("click",function(){
    if(currentIndex<image.length-1){
        currentIndex++;
        updateSlider();
    }
});
