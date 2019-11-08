import { Component, OnInit } from '@angular/core';
import {Product}  from '../product/Product';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  product: Array<Product>=[
    

    {
   name:'MI BAND4',
   image:'http://t0.gstatic.com/images?q=tbn%3AANd9GcRnu7uLy1lJSMc9Oa0rwQHi_pYHIJEsL3cafRQ3ypsnuFoS2rDBEhpNQY3TAdAAXQ-dN-mEJg&usqp=CAc',
   description:'',
   imageAlt:'',
   isAvilable:false,
   price:2000

 },
   {
     
     name:'ROLEX',
     image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR9j60B4QogOoh-sI_EdaYHRpAoUB0k3H4vqsh8wLeKGEjSzPSm9QyVkwBL8yqOgHYStqKKq32a6Z1F&usqp=CAc',
     description:'',
     imageAlt:'',
     isAvilable:false,
     price:1500
   },
   {
     
     name:'SEIKO-BLUE',
     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCeuUgM1ipAGqhaJdI__MIs22nKRykupKvlX95OPb8cU-SCJgx',
     description:'',
     imageAlt:'',
     isAvilable:true,
     price:800
   },
   {
     
     name:'LED',
     image:'https://rukminim1.flixcart.com/image/880/1056/jrtj2q80/watch/v/f/n/fully-black-led-silicon-belt-date-day-display-light-changeble-original-imafdgevwzzcdhce.jpeg?q=50',
     description:'',
     imageAlt:'',
     isAvilable:false,
     price:1700
   },
   {
     
     name:'CASIO',
     image:'https://images-na.ssl-images-amazon.com/images/I/61zh8iN%2B%2BlL._AC_UX679_.jpg',
     description:'',
     imageAlt:'',
     isAvilable:true,
     price:1699
   },
   {
     
     name:'TITAN',
     image:'https://staticimg.titan.co.in/Titan/Catalog/1585SL07_1.jpg?pView=pdp',
     description:'',
     imageAlt:'',
     isAvilable:false,
     price:1599
   },
   {
     
     name:'SPORT DIGITAL',
     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgOlrNkYDlifeY3JEmtLXmLGZaYm_gMA_izfKA8ajbjh68VK7N',
     description:'',
     imageAlt:'',
     isAvilable:false,
     price:1000
   },
   {
     
     name:'REDUX',
     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLaON4VnXcNse6FKecQTS6Cc1kxWMQTUsNCxIsg5uaeRTwpvzG',
     description:'',
     imageAlt:'',
     isAvilable:false,
     price:599
   }
   
 ];

}
