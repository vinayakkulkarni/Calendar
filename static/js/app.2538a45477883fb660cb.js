webpackJsonp([1],[,,,,,,,,function(t,e,a){"use strict";var s=a(9);e.a={name:"app",components:{Calendar:s.a}}},function(t,e,a){"use strict";function s(t){a(24),a(26)}var n=a(10),i=a(56),o=a(0),r=s,c=o(n.a,i.a,!1,r,null,null);e.a=c.exports},function(t,e,a){"use strict";var s=a(27),n=a.n(s),i=a(16);e.a={name:"VueAwesomeCalendar",computed:n()({},Object(i.b)(["user","events","date"]))}},,,,,,,function(t,e,a){"use strict";e.a={name:"CreateEvent",data:function(){return{user:{name:"Vinayak"},calendar:{events:[]},date:new Date}}}},function(t,e,a){"use strict";e.a={name:"EditEvent"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),n=a(23),i=a(58),o=a(68);s.a.config.productionTip=!1,new s.a({el:"#app",router:i.a,store:o.a,template:"<App/>",components:{App:n.a}})},,,,function(t,e,a){"use strict";var s=a(8),n=a(57),i=a(0),o=i(s.a,n.a,!1,null,null,null);e.a=o.exports},function(t,e){},,function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mobile-wrapper"},[a("header",{staticClass:"header"},[a("div",{staticClass:"container"},[a("span",[t._v("Welcome Back, "+t._s(t.user.name)+"!")]),t._v(" "),a("h1",[t._v("Calendar Plan")]),t._v(" "),t._m(0)])]),t._v(" "),a("section",{staticClass:"today-box",attrs:{id:"today-box"}},[a("span",{staticClass:"breadcrumb"},[t._v("Today")]),t._v(" "),a("h3",{staticClass:"date-title"},[t._v(t._s(t.date.toLocaleString()))]),t._v(" "),t._m(1)]),t._v(" "),a("section",{staticClass:"upcoming-events"},[a("div",{staticClass:"container"},[a("h3",[t._v("Lastest Events")]),t._v(" "),a("div",{staticClass:"events-wrapper"},t._l(t.events,function(e){return a("router-link",{key:e.id,staticClass:"event",class:{active:"now"===e.timeago},attrs:{to:{name:"EditEvent",params:{id:e.id}},tag:"div",exact:""}},[a("i",{staticClass:"ion",class:{"ion-ios-flame hot":e.missed,"ion-ios-flame done":e.completed,"ion-ios-radio-button-on icon-in-active-mode":"now"===e.timeago}}),t._v(" "),a("h4",{staticClass:"event__point"},[t._v(t._s(e.time))]),t._v(" "),"now"!==e.timeago?a("span",{staticClass:"event__duration"},[t._v(t._s(e.timeago))]):t._e(),t._v(" "),a("p",{staticClass:"event__description"},[t._v(t._s(e.description))])])})),t._v(" "),a("router-link",{staticClass:"add-event-button",attrs:{to:{name:"CreateEvent"},tag:"button"}},[a("span",{staticClass:"add-event-button__title"},[t._v("Add Event")]),t._v(" "),a("span",{staticClass:"add-event-button__icon"},[a("i",{staticClass:"ion ion-ios-star-outline"})])])],1)])]),t._v(" "),t.user.name?t._e():a("div",{staticStyle:{display:"flex","align-items":"center"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"mobile-wrapper",staticStyle:{border:"0"},attrs:{type:"text",name:"name",id:"name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu-toggle"},[a("div",[a("span"),t._v(" "),a("span"),t._v(" "),a("span")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plus-icon"},[a("i",{staticClass:"ion ion-ios-add"})])}],i={render:s,staticRenderFns:n};e.a=i},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],i={render:s,staticRenderFns:n};e.a=i},function(t,e,a){"use strict";var s=a(1),n=a(59),i=a(9),o=a(60),r=a(64);s.a.use(n.a);var c=[{path:"/",name:"Calendar",component:i.a},{path:"/create",name:"CreateEvent",component:o.a},{path:"/:id/edit",name:"EditEvent",component:r.a}];e.a=new n.a({base:/Calendar/,mode:"history",routes:c})},,function(t,e,a){"use strict";function s(t){a(61),a(62)}var n=a(17),i=a(63),o=a(0),r=s,c=o(n.a,i.a,!1,r,null,null);e.a=c.exports},function(t,e){},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mobile-wrapper"},[a("header",{staticClass:"header"},[a("div",{staticClass:"container"},[a("span",[t._v("Welcome Back, "+t._s(t.user.name)+"!")]),t._v(" "),a("h1",[t._v("Calendar Plan")]),t._v(" "),t._m(0)])]),t._v(" "),a("section",{staticClass:"today-box",attrs:{id:"today-box"}},[a("span",{staticClass:"breadcrumb"},[t._v("Today")]),t._v(" "),a("h3",{staticClass:"date-title"},[t._v(t._s(t.date.toLocaleString()))]),t._v(" "),t._m(1)]),t._v(" "),a("section",{staticClass:"upcoming-events"},[a("div",{staticClass:"container"},[a("h3",[t._v("Lastest Events")]),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"events-wrapper"},t._l(t.calendar.events,function(e){return a("div",{key:e.id,staticClass:"event",class:{active:"now"===e.timeago}},[a("i",{staticClass:"ion",class:{"ion-ios-flame hot":e.missed,"ion-ios-flame done":e.completed,"ion-ios-radio-button-on icon-in-active-mode":"now"===e.timeago}}),t._v(" "),a("h4",{staticClass:"event__point"},[t._v(t._s(e.time))]),t._v(" "),"now"!==e.timeago?a("span",{staticClass:"event__duration"},[t._v(t._s(e.timeago))]):t._e(),t._v(" "),a("p",{staticClass:"event__description"},[t._v(t._s(e.description))])])})),t._v(" "),t._m(3)])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu-toggle"},[a("div",[a("span"),t._v(" "),a("span"),t._v(" "),a("span")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plus-icon"},[a("i",{staticClass:"ion ion-ios-add"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"events-wrapper"},[a("form",{staticStyle:{padding:"10%"},attrs:{method:"POST"}},[a("input",{staticStyle:{padding:"2px",border:"1px solid #404",transition:"ease-out 0.2s",color:"#333","border-radius":"5px"},attrs:{type:"text",name:"event",id:"event",placeholder:"Event Name"}}),t._v(" "),a("input",{staticStyle:{padding:"2px",border:"1px solid #404",transition:"ease-out 0.2s",color:"#333","border-radius":"5px"},attrs:{type:"date",name:"date",id:"date"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"add-event-button"},[a("span",{staticClass:"add-event-button__title"},[t._v("Save Event")]),t._v(" "),a("span",{staticClass:"add-event-button__icon"},[a("i",{staticClass:"ion ion-ios-calendar"})])])}],i={render:s,staticRenderFns:n};e.a=i},function(t,e,a){"use strict";function s(t){a(65),a(66)}var n=a(18),i=a(67),o=a(0),r=s,c=o(n.a,i.a,!1,r,null,null);e.a=c.exports},function(t,e){},function(t,e){},function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  DuDu\n")])},n=[],i={render:s,staticRenderFns:n};e.a=i},function(t,e,a){"use strict";var s=a(1),n=a(16),i=a(69),o=a(70),r=a(71),c=a(72);s.a.use(n.a),e.a=new n.a.Store({state:i.a,getters:o.a,mutations:r.a,actions:c.a,strict:!1})},function(t,e,a){"use strict";var s={date:new Date,user:{name:"Vinayak"},user_loading:!1,events:[{id:1,time:"11:00 am",timeago:"in 30 minutes.",missed:!0,completed:!1,description:"Monday briefing with the team"},{id:2,time:"12:00 pm",timeago:"in 1 hour.",missed:!1,completed:!0,description:"Lunch with Paul McCartney, @Burgers' House!"},{id:3,time:"14:00 pm",timeago:"now",missed:null,completed:null,description:"Meet clients from project."},{id:4,time:"20:45 pm",timeago:"in 5 hours 45 minutes.",missed:null,completed:null,description:"Watch Mr.Robot"},{id:5,time:"23:15 pm",timeago:"in 9 hours 15 minutes.",missed:null,completed:null,description:"Skype meeting with Dave."}]};e.a=s},function(t,e,a){"use strict";var s={};e.a=s},function(t,e,a){"use strict";var s={};e.a=s},function(t,e,a){"use strict";var s={};e.a=s}],[19]);
//# sourceMappingURL=app.2538a45477883fb660cb.js.map