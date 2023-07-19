/** This file implements all the functionalities of the nav bar */
/** navigation point selectors */
const navigation = document.querySelector(".navigation");
const sideNav = document.querySelector(".side-nav");
const sideNavItem = document.querySelector(".side-nav__item");
const sideNavIcon = document.querySelector(".side-nav__icon");
const sideNavText = document.querySelector("side-nav__text");
const sideNavLink = document.querySelector(".side-nav__link");
const copy = document.querySelector(".copy");
const galleryID = document.getElementById('#gallery');
const navHidden = document.querySelector('.nav-hidden');
/** end of the nav bar navigation selectors */
const closeAndOpen = function(){
/** this function handles the functionality of the 
 * closing of the navigation when none of the list items
 * are being selected
 */
  navigation.addEventListener('click', function(e){
    const select = e.target.closest('.side-nave__item');
    const next = e.target.parentElement;
    if(!select){
      navigation.style.visibility ='hidden';
      navigation.style.display = 'none';
    }
      navHidden.style.visibility = "visible";
      navHidden.style.display = "block";
  });
}



/** Handler for the selections functionality */
sideNav.addEventListener("click",  function (el){
  const select = el.target.closest(".side-nav__item");
  const children = [...select.parentElement.children];
  /** selecting the child nodes of the parent node of where the event occured */
  children.forEach((val) => {
    val.classList.remove("side-nav__item-active");
  });

  /** adding the active class to the selected element */
  select.classList.add("side-nav__item-active");
});

/** Implemetation of the nav bar at the tablet view */
let callback = (entries, observer)=>{
  entries.forEach((entry)=>{
    if(!entry.isIntersecting && entry.boundingClientRect.top < 0 ){
      navHidden.style.visibility = "visible";
      navHidden.style.display = "block";
      navHidden.style.backgroundColor ='rgba(119, 119, 119, 0.587)';
      // navHidden.classList.add('nav-shown')
    }
    if(entry.isIntersecting){
      navHidden.style.visibility = "hidden";
      navHidden.style.display = "none";
    }
  });
}
const options = {
  root: null,
  threshold:[0 , .15]
}; 

const galleryObserver = new IntersectionObserver( callback, options);

galleryObserver.observe(galleryID);
/** Function NAV STYLE is used to check for events on the 
 * navigation element and applies and calls closeAndOpen to 
 * close and open the navigation when we click on the 
 * navigation element
 */

    navHidden.addEventListener('click', function(el){
    const select = el.target.closest('.nav-hidden');
    select.style.visibility='hidden';
    select.style.display='none';
    navigation.style.visibility ='visible';
    navigation.style.display = 'grid';

    closeAndOpen();
});

/**
 * This part of the code watches for changes in the width of the
 * screen and applies the appropiet style in the navigation
 */
let mediaQuery = window.matchMedia("(min-width: 900px)");
const mediaQueryFunction = function(mql){
  if(mediaQuery.matches){
    galleryObserver.unobserve(galleryID);
  }
}

mediaQueryFunction(mediaQuery);



/*
const mediaQuery = window.matchMedia('(max-width: 900px)');

const mediaQueryFunction = function(q){
  if(q.matches){
    
});
  }
}

mediaQueryFunction(mediaQuery);

mediaQuery.addListener(mediaQueryFunction);
*/