/**Starting to write our my main js for the whole page */
/** exporting my personal modules */
import './scripts/navBar.js'

/** DOM selectors */

/** to of the page selectors */
const header = document.querySelector('.header');
const search = document.querySelector('.search');
const searchInput  =document.querySelector('.search__input');
const searchButton = document.querySelector('.search__button');


/**user navigation selectors */
const userNav = document.querySelector('.user-nav');
const userNavIconBox = document.querySelector('.user-nav__icon-box');
const userNavNotification = document.querySelector('.user-nav__notification');
const userNavUser = document.querySelector('.user-nav__user');
const userNavUsername = document.querySelector('.user-nav__username');
const userNavPhoto = document.querySelector('.user-nav__user-photo');

/** view section selectors */
const view = document.querySelector('.view');
const gallery = document.querySelector('.gallery');
const galleryFigure = document.querySelector('.gallery__image');

/** overview of the hotel selectors */
const overview = document.querySelector('.overview');
const overviewHeading = document.querySelector('.overview__heading');
const overviewStars = document.querySelector('.overview__stars');
const overviewIcon = document.querySelector('.overview__icon');
const overviewLocation = document.querySelector('.overview__location');
const overviewRating = document.querySelector('.overview__rating');
const overviewRatingAverage = document.querySelector('.overview__rating-average');
const overviewRatingCount = document.querySelector('.overview__rating-count');


/** Detail section selectors */
const detail = document.querySelector('.detail');
const description = document.querySelector('.description');
const paragraph = document.querySelector('.paragraph');
const list = document.querySelector('.list');
const listItems = document.querySelector('.list__items');
const recomended = document.querySelector('.recomended');
const recomendedCount = document.querySelector('.recomended__count');
const recomendedFriends = document.querySelector('.recomended__friends');
const recomendedPhoto = document.querySelector('.recomended__photo');

/** User reviews selectors */
const userReviews = document.querySelector('.user-reviews');
const review = document.querySelector('.review');
const reviewText = document.querySelector('.review__text');
const reviewUser = document.querySelector('.review__user');
const reviewPhoto = document.querySelector('.review__photo');
const reviewUserBox = document.querySelector('.review__user-box');
const reviewUsername = document.querySelector('.review__user-name');
const reviewUserdate = document.querySelector('.review__user-date');
const reviewRating = document.querySelector('.review__rating');
const buttonInline = document.querySelector('.btn-inline');


/**  cta selectors  */ 
const cta = document.querySelector('.cta');
const ctaBookNow  = document.querySelector('.cta__book-now');
const ctaButton = document.querySelector('.btn');
const ctaButtonVisible = document.querySelector('.btn__visible');
const ctaButtonInvisible = document.querySelector('.btn__invisible');


const data = function(){
    fetch('https://airportsapi/v1/airports/{icao_code}').then(function(response){
        console.log(response);
    });
}

data();

