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

// Updating the Navigation Items
const navigationItems = document.getElementsByTagName('a');
navigationItems[0].textContent = siteContent["nav"]["nav-item-1"];
navigationItems[1].textContent = siteContent["nav"]["nav-item-2"];
navigationItems[2].textContent = siteContent["nav"]["nav-item-3"];
navigationItems[3].textContent = siteContent["nav"]["nav-item-4"];
navigationItems[4].textContent = siteContent["nav"]["nav-item-5"];
navigationItems[5].textContent = siteContent["nav"]["nav-item-6"];

// Updating the cta-section
let ctaHeading = document.querySelector('.cta-text h1');
ctaHeading.innerText = siteContent["cta"]["h1"];

// Updating the call-to-action "Get Started" Button
let buttonText = document.querySelector('.cta button');
buttonText.textContent = siteContent["cta"]["button"];

// Call to action image
let ctaImage = document.querySelector('.cta img');
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

// Updating the Main Content
let topContentHeadings = document.querySelectorAll('.text-content h4');
let topContentParagraphs = document.querySelectorAll('.text-content p');

topContentHeadings[0].textContent  = siteContent["main-content"]["features-h4"] ;
topContentParagraphs[0].textContent = siteContent["main-content"]["features-content"];

topContentHeadings[1].textContent  = siteContent["main-content"]["about-h4"] ;
topContentParagraphs[1].textContent = siteContent["main-content"]["about-content"];

// select and update src attribute of middle image
let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);