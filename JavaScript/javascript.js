// modals
let tCModal = document.getElementById("terms-conditions-modal");
let privacyModal = document.getElementById("privacy-policy-modal");
let termsBtn = document.getElementById("terms-and-conditions-btn");
let policyBtn = document.getElementById("privacy-policy-btn");
let exitTermsModal = document.getElementById("exit-terms-modal");
let exitPrivacyModal = document.getElementById("exit-privacy-modal");

termsBtn.onclick = function(){
    tCModal.style.display = "block";
}
policyBtn.onclick = function(){
    privacyModal.style.display = "block";
}

exitTermsModal.onclick = function(){
    tCModal.style.display = "none"; 
}
exitPrivacyModal.onclick = function(){
    privacyModal.style.display = "none";
}

// hambuger menu
let hamburgerBtn = document.getElementById("hamburger-btn");
let menuLinks = document.getElementsByClassName("mobile-menu");
let hamburgerMenu = document.getElementById("hamburger-menu-display");
let link = 0;

hamburgerBtn.onclick = function(){
    if(hamburgerMenu.style.display == "block"){
        hamburgerMenu.style.display = "none";
        for(link; link < menuLinks.length; link++){
            menuLinks[link].style.display = "none";
        }
    }else{
        hamburgerMenu.style.display = "block";
        for(link; link < menuLinks.length; link++){
            menuLinks[link].style.display = "block";
        }
    }
}

// Gallery carousel
let i = 1;
let currentSlide = 1;
let arrowLeft = document.getElementsByClassName("left-arrow");
let arrowRight = document.getElementsByClassName("right-arrow");
let slideAmount = document.getElementsByClassName("new-slide");

showSlide(currentSlide);

arrowLeft[0].onclick = function(){
    showSlide(currentSlide -= 1);
}

arrowRight[0].onclick = function(){
    showSlide(currentSlide += 1);
}

function showSlide(currentSlide){
    if(currentSlide > slideAmount.length){
        currentSlide = 1;
    }

    if(currentSlide < 1){
        currentSlide = slideAmount.length - 1;
    }
    
    for(i = 0; i < slideAmount.length; i++){
        slideAmount[i].style.display = "none";
    }
    slideAmount[currentSlide -1 ].style.display = "block";
}
