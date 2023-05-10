const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

// const mainNavBar = document.querySelectorAll('a');
// mainNavBar.forEach(ele => ele.setAttribute("class", "italic"));
// console.log(mainNavBar)


const updateCallToActionContent = (element, text) => {
  element.textContent = text
}
updateCallToActionContent(document.querySelector("button"), siteContent["cta"]["button"]);
updateCallToActionContent(document.querySelector("h1"), siteContent["cta"]["h1"]);

const updateImgContent = (element, url) => {
  element.src = url
};
updateImgContent(document.querySelector('img'), siteContent["images"]["logo-img"])
updateImgContent(document.querySelector('#cta-img'), siteContent["images"]["cta-img"])
updateImgContent(document.querySelector('.middle-img'), siteContent["images"]["accent-img"])


const updateTextContent = (element, text) => {
  element.textContent = text;
  };
updateTextContent(document.querySelector('.top-content h4'), siteContent["main-content"]["features-h4"]);
updateTextContent(document.querySelector('.top-content p'), siteContent["main-content"]["features-content"]);
updateTextContent(document.querySelectorAll(".top-content, .text-content h4")[2], siteContent["main-content"]["about-h4"]);
updateTextContent(document.querySelectorAll(".top-content, .text-content p")[2], siteContent["main-content"]["about-content"]);
updateTextContent(document.querySelector('.bottom-content .text-content h4'), siteContent["main-content"]["services-h4"])
updateTextContent(document.querySelector('.bottom-content .text-content p'), siteContent["main-content"]["services-content"])
updateTextContent(document.querySelectorAll(".bottom-content .text-content h4")[1], siteContent["main-content"]["features-h4"]);
updateTextContent(document.querySelectorAll(".bottom-content .text-content p")[1], siteContent["main-content"]["features-content"]);
updateTextContent(document.querySelectorAll(".bottom-content .text-content h4")[2], siteContent["main-content"]["vision-h4"]);
updateTextContent(document.querySelectorAll(".bottom-content .text-content p")[2], siteContent["main-content"]["vision-content"]);

const updateContact = (element, text) => {
  element.textContent = text;
};

updateContact(document.querySelector(".contact h4"), siteContent["contact"]["contact-h4"]);
updateContact(document.querySelectorAll(".contact p")[0], siteContent["contact"]["address"]);
updateContact(document.querySelectorAll(".contact p")[1], siteContent["contact"]["phone"]);
updateContact(document.querySelectorAll(".contact p")[2], siteContent["contact"]["email"]);

const updateFooterCopyright = (element, text) => {
  element.textContent = text;
};

updateFooterCopyright(document.querySelector("footer a"), siteContent["footer"]["copyright"]);