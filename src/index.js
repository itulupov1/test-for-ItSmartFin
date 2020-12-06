'use strict';


import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'es6-promise';

import animateSlide from './animateSlide';
import preloader from './preloader';
import filterOnMobile from './filterOnMobile';

//start animateSlide
animateSlide();

//start preloader
preloader();

//start filterOnMobile
filterOnMobile();
