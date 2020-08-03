const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Note: these are not the "best practices" but are instead practice at using different angles of attack. Pew pew pew.

const navItem1 = document.querySelector("nav a");
const navItem2 = navItem1.nextElementSibling;
const navItem3 = navItem2.nextElementSibling;
const navItem4 = navItem3.nextElementSibling;
const navItem5 = navItem4.nextElementSibling;
const navItem6 = navItem5.nextElementSibling;
navItem1.textContent = siteContent['nav']['nav-item-1']
navItem2.textContent = siteContent['nav']['nav-item-2']
navItem3.textContent = siteContent['nav']['nav-item-3']
navItem4.textContent = siteContent['nav']['nav-item-4']
navItem5.textContent = siteContent['nav']['nav-item-5']
navItem6.textContent = siteContent['nav']['nav-item-6']

const ctaH1 = document.querySelector(".cta h1")
const ctaButton = document.querySelector(".cta button")
const ctaImg = document.querySelector(".cta img")
ctaH1.textContent = siteContent["cta"]["h1"]
ctaButton.textContent = siteContent["cta"]["button"]
ctaImg.src = siteContent["cta"]["img-src"]

let topContentH4s = document.querySelectorAll(".top-content h4")
let topContentPs = document.querySelectorAll(".top-content p")
topContentH4s[0].textContent = siteContent["main-content"]["features-h4"]
topContentH4s[1].textContent = siteContent["main-content"]["about-h4"]
topContentPs[0].textContent = siteContent["main-content"]["features-content"]
topContentPs[1].textContent = siteContent["main-content"]["about-content"]

let middleImg = document.getElementById("middle-img")
middleImg.src = siteContent["main-content"]["middle-img-src"]

// // // AHA! Use a forEach???
// //why can't I convert them both to array's & assign array1.textContent = array2
// let bottomContentH4s = Array.from(document.querySelectorAll(".bottom-content h4"))
//  //didn't work with Array.from or without it...
// console.log(bottomContentH4s)
// let bottomContentPs = document.querySelectorAll(".bottom-content p")
// let siteContentBottomH4s = [
//   siteContent["main-content"]["services-h4"],
//   siteContent["main-content"]["product-h4"],
//   siteContent["main-content"]["vision-h4"]
// ];
// let siteContentBottomPs = [
//   siteContent["main-content"]["services-content"],
//   siteContent["main-content"]["product-content"],
//   siteContent["main-content"]["vision-content"]
// ]
// bottomContentH4s.textContent = siteContentBottomH4s
// console.log(bottomContentH4s)
// console.log(siteContentBottomPs)

//different angle, less convoluted, same as previous work though...
const bottomContentH4s = document.querySelectorAll(".bottom-content h4")
let bottomContentPs = document.querySelectorAll(".bottom-content p")
bottomContentH4s[0].textContent = siteContent["main-content"]["services-h4"],
bottomContentH4s[1].textContent = siteContent["main-content"]["product-h4"]
bottomContentH4s[2].textContent = siteContent["main-content"]["vision-h4"]
bottomContentPs[0].textContent = siteContent["main-content"]["services-content"]
bottomContentPs[1].textContent = siteContent["main-content"]["product-content"]
bottomContentPs[2].textContent = siteContent["main-content"]["vision-content"]

const contactH4 = document.querySelector(".contact h4")
const contactPs = document.querySelectorAll(".contact p")
contactH4.textContent = siteContent["contact"]["contact-h4"]
contactPs[0].textContent = siteContent["contact"]["address"]
contactPs[1].textContent = siteContent["contact"]["phone"]
contactPs[2].textContent = siteContent["contact"]["email"]

const footer = document.querySelector("footer p")
footer.textContent = siteContent["footer"]["copyright"]


//make a giant forEach of the siteContent that runs through a paired array of all the selectors...
//  <del>FOOTER:try skipping the const & just dumping the json straight in</del>
//  no. don't do this. bad practice. opposite of good practices. bc reasons to do with not declaring a variable...