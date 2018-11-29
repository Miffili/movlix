(function(e){function t(t){for(var i,n,r=t[0],l=t[1],d=t[2],c=0,u=[];c<r.length;c++)n=r[c],o[n]&&u.push(o[n][0]),o[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);v&&v(t);while(u.length)u.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(i=!1)}i&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},o={app:0},s=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/movlix/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var v=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0289":function(e,t,a){},"034f":function(e,t,a){"use strict";var i=a("64a9"),o=a.n(i);o.a},"06ca":function(e,t,a){"use strict";var i=a("a7f2"),o=a.n(i);t["default"]=o.a},"087d":function(e,t,a){"use strict";var i=a("6265"),o=a.n(i);o.a},1985:function(e,t,a){},2296:function(e,t,a){"use strict";var i=a("a3c8"),o=a.n(i);t["default"]=o.a},"44c8":function(e,t,a){"use strict";var i=a("0289"),o=a.n(i);o.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("TheHeader",{attrs:{showForm:e.showForm},on:{toggleForm:e.toggleForm}}),a("main",[e.showNotification?a("p",[e._v("There are no movies in the database yet.")]):e._e(),e.showNotification?a("button",{staticClass:"primary",attrs:{type:"button",name:"loadMovies"},on:{click:e.loadSampleMovies}},[e._v("Load Sample Movies")]):e._e(),e.showForm?a("MovieForm",{attrs:{movieData:e.newMovie,type:"addMovie"},on:{addMovie:e.addMovie,toggleForm:e.toggleForm}}):e._e(),e._l(e.movies,function(t,i){return a("MovieCard",{key:t.id,attrs:{movieData:t},on:{remove:function(t){e.removeMovie(i)},save:e.updateMovie}})})],2),a("TheFooter")],1)},s=[],n=(a("20d6"),a("a481"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"movie-card"},[e.openForm?a("div",{staticClass:"edit-info"},[a("MovieForm",{attrs:{movieData:e.editMovie,type:"editMovie"},on:{dataEdit:e.reflectEdit}}),e.invalidEditInput?a("span",{staticClass:"invalid"},[e._v("\n      Please correct the marked fields.\n    ")]):e._e()],1):a("div",{staticClass:"display-info",class:{open:e.openMenu}},[a("div",{staticClass:"card-head"},[a("h3",{staticClass:"title"},[e._v("\n        "+e._s(e.movieData.title)+"\n        "),a("span",{staticClass:"year"},[e._v(e._s(e.movieData.year))])])]),a("div",{staticClass:"card-desc"},[e.movieData.desc?a("p",[e._v(e._s(e.movieData.desc))]):a("p",[a("em",[e._v("Description not provided")])])]),a("div",{staticClass:"card-details"},[e.movieData.length?a("span",{staticClass:"length"},[e._v("\n        "+e._s(e.prettyLength)+"\n      ")]):e._e(),a("MovieRating",{attrs:{grade:e.ratingInNumber,movieId:this.movieData.id}}),a("button",{staticClass:"toggle no-btn",class:{"toggle-open":e.openMenu},attrs:{type:"button",name:e.openMenu?"close menu":"open menu",title:e.openMenu?"close menu":"open menu"},on:{click:function(t){e.toggle("openMenu")}}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"81",height:"81",viewBox:"0 0 81 81",fill:"none"}},[a("path",{attrs:{d:"M3 20L38.2863 58.5797C39.4757 59.88 41.5243 59.88 42.7137 58.5797L78 20","stroke-width":"8","stroke-linecap":"round"}})])])],1)]),e.openMenu?a("div",{staticClass:"card-functions"},[a("button",{staticClass:"delete",attrs:{type:"button",name:"remove"},on:{click:function(t){e.$emit("remove")}}},[e._v("Delete Movie")]),e.openForm?a("div",{staticClass:"edit-buttons"},[a("button",{staticClass:"secondary",attrs:{type:"button",name:"cancel"},on:{click:e.cancelEdit}},[e._v("Cancel")]),a("button",{staticClass:"primary",attrs:{type:"button",name:"save",disabled:e.invalidEditInput},on:{click:e.saveChanges}},[e._v("Save")])]):a("button",{staticClass:"primary",attrs:{type:"button",name:"edit"},on:{click:function(t){e.toggle("openForm")}}},[e._v("Edit")])]):e._e()])}),r=[],l=(a("c5f6"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.rated?a("div",{staticClass:"rating"},[a("ul",{staticClass:"list"},e._l(e.zeroBasedMax,function(t,i){return a("li",{key:"star"+i,staticClass:"star",class:{active:i<=e.stars},on:{click:function(t){e.rate(i)}}},[a("svg",{attrs:{viewBox:"5 5 70 70",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("g",{attrs:{"clip-path":"url(#clip0)"}},[a("path",{attrs:{d:"M41.4168 9.59894L48.4753 29.9053C48.8187 30.893 49.7404 31.5627 50.7858 31.584L72.2795 32.022C73.7014 32.051 74.2885 33.8578 73.1552 34.717L56.0239 47.705C55.1906 48.3368 54.8385 49.4203 55.1413 50.4212L61.3667 70.9982C61.7785 72.3595 60.2415 73.4762 59.0742 72.6638L41.428 60.3845C40.5697 59.7873 39.4303 59.7873 38.572 60.3845L20.9258 72.6638C19.7585 73.4762 18.2215 72.3595 18.6333 70.9982L24.8587 50.4212C25.1615 49.4203 24.8094 48.3368 23.9761 47.705L6.84482 34.717C5.71152 33.8578 6.29859 32.051 7.72048 32.022L29.2142 31.584C30.2596 31.5627 31.1813 30.893 31.5247 29.9053L38.5832 9.59895C39.0501 8.2556 40.9499 8.2556 41.4168 9.59894Z"}})])])])})),this.stars>=0?a("span",{staticClass:"counter"},[e._v(e._s(e.stars)),a("span",{staticClass:"ofMax"},[e._v("/"+e._s(e.maxStars))])]):e._e()]):a("div",{staticClass:"rating",class:{"not-rated":!e.rated},on:{click:e.enableRating}},[a("svg",{attrs:{viewBox:"5 5 70 70",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("g",{attrs:{"clip-path":"url(#clip0)"}},[a("path",{attrs:{d:"M41.4168 9.59894L48.4753 29.9053C48.8187 30.893 49.7404 31.5627 50.7858 31.584L72.2795 32.022C73.7014 32.051 74.2885 33.8578 73.1552 34.717L56.0239 47.705C55.1906 48.3368 54.8385 49.4203 55.1413 50.4212L61.3667 70.9982C61.7785 72.3595 60.2415 73.4762 59.0742 72.6638L41.428 60.3845C40.5697 59.7873 39.4303 59.7873 38.572 60.3845L20.9258 72.6638C19.7585 73.4762 18.2215 72.3595 18.6333 70.9982L24.8587 50.4212C25.1615 49.4203 24.8094 48.3368 23.9761 47.705L6.84482 34.717C5.71152 33.8578 6.29859 32.051 7.72048 32.022L29.2142 31.584C30.2596 31.5627 31.1813 30.893 31.5247 29.9053L38.5832 9.59895C39.0501 8.2556 40.9499 8.2556 41.4168 9.59894Z"}})])]),a("span",{staticClass:"cta"},[e._v("rate now")])])}),d=[],v=new i["a"],c={name:"MovieRating",props:{grade:Number,movieId:[Number,String]},data:function(){return{stars:this.grade,maxStars:5}},computed:{zeroBasedMax:function(){return this.maxStars+1},rated:function(){return!isNaN(this.stars)}},methods:{rate:function(e){"number"===typeof e&&e<=this.maxStars&&e>=0&&(this.stars=e)},enableRating:function(){this.stars=0}},watch:{stars:function(){v.$emit("updateRating",this.stars,this.movieId)}}},u=c,m=(a("8d62"),a("2877")),h=Object(m["a"])(u,l,d,!1,null,"044293e4",null);h.options.__file="MovieRating.vue";var p=h.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return"addMovie"===e.type?a("form",{key:"newMovie",staticClass:"movie-form adding"},[e._m(0),a("fieldset",[e._m(1),a("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:e.formMovie.title,expression:"formMovie.title"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{invalid:e.errors.has("addMovie.title")},attrs:{type:"text",name:"title","data-vv-scope":"addMovie"},domProps:{value:e.formMovie.title},on:{input:function(t){t.target.composing||e.$set(e.formMovie,"title",t.target.value)}}}),e.errors.has("addMovie.title")?a("span",{staticClass:"invalid"},[e._v("\n      "+e._s(e.errors.first("addMovie.title"))+"\n    ")]):e._e()]),a("div",{staticClass:"movie-numbers"},[a("fieldset",[e._m(2),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formMovie.year,expression:"formMovie.year"},{name:"validate",rawName:"v-validate",value:"required|max_value:2030",expression:"'required|max_value:2030'"}],class:{invalid:e.errors.has("addMovie.year")},attrs:{type:"number",name:"year",min:"1988","data-vv-validate-on":"blur|change","data-vv-scope":"addMovie"},domProps:{value:e.formMovie.year},on:{input:function(t){t.target.composing||e.$set(e.formMovie,"year",t.target.value)}}}),e.errors.has("addMovie.year")?a("span",{staticClass:"invalid"},[e._v("\n        "+e._s(e.errors.first("addMovie.year"))+"\n      ")]):e._e()]),a("fieldset",[a("label",{attrs:{for:"length"}},[e._v("Length (in min)")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formMovie.length,expression:"formMovie.length"},{name:"validate",rawName:"v-validate",value:"numeric|min_value:1",expression:"'numeric|min_value:1'"}],class:{invalid:e.errors.has("addMovie.length")},attrs:{type:"number",name:"length","data-vv-validate-on":"input","data-vv-scope":"addMovie"},domProps:{value:e.formMovie.length},on:{input:function(t){t.target.composing||e.$set(e.formMovie,"length",t.target.value)}}}),e.errors.has("addMovie.length")?a("span",{staticClass:"invalid"},[e._v("\n        "+e._s(e.errors.first("addMovie.length"))+"\n      ")]):e._e()])]),a("fieldset",[a("label",{attrs:{for:"desc"}},[e._v("Description")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.formMovie.desc,expression:"formMovie.desc"},{name:"validate",rawName:"v-validate",value:"min:0",expression:"'min:0'"}],class:{invalid:e.errors.has("addMovie.desc")},attrs:{name:"desc",rows:"5",cols:"60","data-vv-scope":"addMovie"},domProps:{value:e.formMovie.desc},on:{input:function(t){t.target.composing||e.$set(e.formMovie,"desc",t.target.value)}}}),e.errors.has("addMovie.desc")?a("span",{staticClass:"invalid"},[e._v("\n      "+e._s(e.errors.first("addMovie.desc"))+"\n    ")]):e._e()]),"addMovie"===e.type?a("div",{staticClass:"form-footer"},[e.invalidAddInput?a("span",{staticClass:"invalid"},[e._v("Please correct the errors.")]):a("span",{staticClass:"info"},[e._v("* required fields")]),a("button",{staticClass:"secondary",attrs:{type:"button",name:"button"},on:{click:function(t){e.$emit("toggleForm")}}},[e._v("Cancel")]),a("button",{staticClass:"primary",attrs:{type:"button",name:"button",disabled:e.invalidAddInput},on:{click:function(t){e.validateBeforeSubmit("addMovie")}}},[e._v("Save")])]):e._e()]):"editMovie"===e.type?a("form",{key:"edit"+e.movieData.id,staticClass:"movie-form edit-movie"},[a("div",{staticClass:"card-head"},[a("fieldset",{staticClass:"fieldset-title"},[a("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:e.formMovie.title,expression:"formMovie.title"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{invalid:e.errors.has("edit"+e.movieData.id+".title")},attrs:{type:"text",name:"title",placeholder:"Title *","data-vv-scope":"edit"+e.movieData.id},domProps:{value:e.formMovie.title},on:{input:function(t){t.target.composing||e.$set(e.formMovie,"title",t.target.value)}}}),e.errors.has("edit"+e.movieData.id+".title")?a("span",{staticClass:"invalid"},[e._v("\n        "+e._s(e.errors.first("edit"+e.movieData.id+".title"))+"\n      ")]):e._e()]),a("fieldset",{staticClass:"fieldset-year"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formMovie.year,expression:"formMovie.year"},{name:"validate",rawName:"v-validate",value:"required|max_value:2030",expression:"'required|max_value:2030'"}],class:{invalid:e.errors.has("edit"+e.movieData.id+".year")},attrs:{type:"number",name:"year",placeholder:"Year of Release *",min:"1988","data-vv-validate-on":"blur|change","data-vv-scope":"edit"+e.movieData.id},domProps:{value:e.formMovie.year},on:{input:function(t){t.target.composing||e.$set(e.formMovie,"year",t.target.value)}}}),e.errors.has("edit"+e.movieData.id+".year")?a("span",{staticClass:"invalid"},[e._v("\n        "+e._s(e.errors.first("edit"+e.movieData.id+".year"))+"\n      ")]):e._e()])]),a("div",{staticClass:"cardDesc"},[a("fieldset",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.formMovie.desc,expression:"formMovie.desc"},{name:"validate",rawName:"v-validate",value:"min:0",expression:"'min:0'"}],class:{invalid:e.errors.has("edit"+e.movieData.id+".desc")},attrs:{name:"desc",placeholder:"Description",rows:"4","data-vv-scope":"edit"+e.movieData.id},domProps:{value:e.formMovie.desc},on:{input:function(t){t.target.composing||e.$set(e.formMovie,"desc",t.target.value)}}}),e.errors.has("edit"+e.movieData.id+".desc")?a("span",{staticClass:"invalid"},[e._v("\n        "+e._s(e.errors.first("edit"+e.movieData.id+".desc"))+"\n      ")]):e._e()])]),a("div",{staticClass:"card-details"},[a("fieldset",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formMovie.length,expression:"formMovie.length"},{name:"validate",rawName:"v-validate",value:"numeric|min_value:1",expression:"'numeric|min_value:1'"}],class:{invalid:e.errors.has("edit"+e.movieData.id+".length")},attrs:{type:"number",name:"length",placeholder:"Length (in min)","data-vv-validate-on":"input","data-vv-scope":"edit"+e.movieData.id},domProps:{value:e.formMovie.length},on:{input:function(t){t.target.composing||e.$set(e.formMovie,"length",t.target.value)}}}),e.errors.has("edit"+e.movieData.id+".length")?a("span",{staticClass:"invalid"},[e._v("\n        "+e._s(e.errors.first("edit"+e.movieData.id+".length"))+"\n      ")]):e._e()])])]):e._e()},g=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fieldset",[a("h3",[e._v("Add Movie")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"title"}},[e._v("Title "),a("span",{staticClass:"required"},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"year"}},[e._v("Year of Release "),a("span",{staticClass:"required"},[e._v("*")])])}],M=(a("6762"),a("2fdb"),{name:"MovieForm",directives:{focus:{inserted:function(e){e.focus()}}},props:{type:String,movieData:{id:Number,title:String,year:Number,length:Number,desc:String}},data:function(){return{formMovie:{title:this.movieData.title,year:this.movieData.year,length:this.movieData.length,desc:this.movieData.desc},invalidAddInput:!1,invalidEditInput:!1}},updated:function(){if(0===this.errors.items.length&&!0===this.invalidAddInput&&(this.invalidAddInput=!1),"editMovie"===this.type){var e=this.errors.items.findIndex(function(e){return e.scope.includes("edit")});e>=0?this.invalidEditInput=!0:e<0&&(this.invalidEditInput=!1),this.$emit("dataEdit",this.formMovie,this.invalidEditInput)}},methods:{validateBeforeSubmit:function(e){var t=this;this.$validator.validateAll(e).then(function(e){e?t.emitMovie():t.invalidAddInput=!0})},emitMovie:function(){this.$emit("addMovie",this.formMovie)}}}),y=M,_=(a("a0a6"),Object(m["a"])(y,f,g,!1,null,"1af482c0",null));_.options.__file="MovieForm.vue";var b=_.exports,w={name:"MovieCard",components:{MovieRating:p,MovieForm:b},props:{movieData:{id:Number,title:String,year:Number,length:Number,rating:[String,Number],desc:String}},data:function(){return{openMenu:!1,openForm:!1,editMovie:{id:this.movieData.id,title:this.movieData.title,year:this.movieData.year,length:this.movieData.length,desc:this.movieData.desc},invalidEditInput:!1}},computed:{prettyLength:function(){var e=this.movieData.length,t=e>=60?"".concat(Math.floor(e/60),"h"):"",a=e%60>0?" ".concat(e%60,"min"):"";return"".concat(t).concat(a)},ratingInNumber:function(){return parseInt(this.movieData.rating)}},methods:{toggle:function(e){this[e]=!this[e]},reflectEdit:function(e,t){this.invalidEditInput=t,e.title!==this.editMovie.title&&(this.editMovie.title=e.title),e.year!==this.editMovie.year&&(this.editMovie.year=e.year),e.desc!==this.editMovie.desc&&(this.editMovie.desc=e.desc),e.length!==this.editMovie.length&&(this.editMovie.length=e.length)},cancelEdit:function(){this.toggle("openForm"),this.editMovie.title=this.movieData.title,this.editMovie.year=this.movieData.year,this.editMovie.length=this.movieData.length,this.editMovie.desc=this.movieData.desc},saveChanges:function(){this.invalidEditInput||(this.toggle("openForm"),this.$emit("save",this.editMovie))}}},C=w,x=(a("44c8"),Object(m["a"])(C,n,r,!1,null,"2f8fd2b6",null));x.options.__file="MovieCard.vue";var D=x.exports,I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",[i("img",{staticClass:"logo",attrs:{src:a("b498"),alt:""}}),i("div",{staticClass:"underline"},[i("button",{staticClass:"no-btn addMovie",attrs:{type:"button",name:(e.showForm?"close":"open")+" form"},on:{click:function(t){e.$emit("toggleForm")}}},[e.showForm?i("span",{class:{opaque:e.showForm}},[e._v("\n        × close form\n      ")]):i("span",{class:{opaque:e.showForm}},[e._v("\n        + add movie\n      ")])])])])},S=[],F={name:"TheHeader",props:{showForm:Boolean}},L=F,N=(a("087d"),a("2296")),k=Object(m["a"])(L,I,S,!1,null,"7233d7f1",null);"function"===typeof N["default"]&&Object(N["default"])(k),k.options.__file="TheHeader.vue";var E=k.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",[e._v("\n    Ⓒ made with  \n    "),a("svg",{staticClass:"heart",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",viewBox:"0 0 200 200",fill:"none"}},[a("path",{attrs:{d:"M99.8968 176.067C-62.6031 131.067 18.3968 -49.4333 99.8967 55.0666C181.397 -49.4333 262.397 131.067 99.8968 176.067Z",fill:"#FFE457",stroke:"#F2D953","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),e._v("\n      &  \n    "),a("svg",{staticClass:"vue-logo",staticStyle:{"/* border":"1px solid black"},attrs:{"xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:cc":"http://creativecommons.org/ns#","xmlns:rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"70 70 280 255",height:"400",width:"400","xml:space":"preserve",id:"svg2",version:"1.1"}},[a("metadata",{attrs:{id:"metadata8"}},[a("rdf:RDF",[a("cc:Work",{attrs:{"rdf:about":""}},[a("dc:format",[e._v("image/svg+xml")]),a("dc:type",{attrs:{"rdf:resource":"http://purl.org/dc/dcmitype/StillImage"}})],1)],1)],1),a("defs",{attrs:{id:"defs6"}}),a("g",{attrs:{transform:"matrix(1.3333333,0,0,-1.3333333,0,400)",id:"g10"}},[a("g",{attrs:{transform:"translate(178.0626,235.0086)",id:"g12"}},[a("path",{staticStyle:{fill:"#4dba87","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"},attrs:{id:"path14",d:"M 0,0 -22.669,-39.264 -45.338,0 h -75.491 L -22.669,-170.017 75.491,0 Z"}})]),a("g",{attrs:{transform:"translate(178.0626,235.0086)",id:"g16"}},[a("path",{staticStyle:{fill:"#435466","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"},attrs:{id:"path18",d:"M 0,0 -22.669,-39.264 -45.338,0 H -81.565 L -22.669,-102.01 36.227,0 Z"}})])])],1),e._v("\n      by "),a("a",{attrs:{href:"https://github.com/Miffili",title:"Klara @ Github"}},[e._v("Klara")])])},j=[],O={name:"TheFooter"},P=O,R=(a("93b5"),a("06ca")),q=Object(m["a"])(P,$,j,!1,null,"686488ee",null);"function"===typeof R["default"]&&Object(R["default"])(q),q.options.__file="TheFooter.vue";var A=q.exports,T=[{id:7,title:"WALL·E",year:2008,length:98,desc:"In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",rating:""},{id:6,title:"Die Hard",year:1988,length:132,desc:"John McClane, officer of the NYPD, tries to save his wife Holly Gennaro and several others that were taken hostage by German terrorist Hans Gruber during a Christmas party at the Nakatomi Plaza in Los Angeles.",rating:5},{id:5,title:"Die Hard 2",year:1990,length:124,desc:"John McClane attempts to avert disaster as rogue military operatives seize control of Dulles International Airport in Washington, D.C.",rating:4},{id:4,title:"Die Hard with a Vengeance",year:1995,length:128,desc:"John McClane and a Harlem store owner are targeted by German terrorist Simon Gruber in New York City, where he plans to rob the Federal Reserve Building.",rating:5},{id:3,title:"Deadpool",year:2016,length:108,desc:"A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.",rating:5},{id:2,title:"Guardians of the Galaxy",year:2014,length:121,desc:"A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.",rating:5},{id:1,title:"Fear and Loathing in Las Vegas",year:1998,length:118,desc:"An oddball journalist and his psychopathic lawyer travel to Las Vegas for a series of psychedelic escapades.",rating:3}],B=T,H={name:"app",components:{MovieCard:D,MovieForm:b,TheHeader:E,TheFooter:A},data:function(){return{movies:[],succId:0,newMovie:{id:0,title:"",year:"",length:"",desc:"",rating:""},showForm:!1,updateRating:{updatedId:"",stars:""}}},watch:{succId:function(){localStorage.succId=this.succId},updateRating:function(){var e=this.updateRating.updatedId,t=this.updateRating.stars,a=this.getIndex(e);this.movies[a].rating=t}},mounted:function(){var e=this;if(localStorage.getItem("movlix-movies"))try{this.movies=JSON.parse(localStorage.getItem("movlix-movies")),this.succId=parseInt(localStorage.succId)}catch(t){localStorage.removeItem("movlix-movies"),localStorage.removeItem("succId")}else this.succId=this.movies.length+1;v.$on("updateRating",function(t,a){e.updateLocalStorage(),e.updateRating={updatedId:a,stars:t}})},computed:{showNotification:function(){return 0===this.movies.length&&!this.showForm}},methods:{loadSampleMovies:function(){this.movies=B,this.updateLocalStorage(),this.succId=B.length+1},addMovie:function(e){var t={id:this.succId,title:e.title,year:e.year,length:e.length.replace(/^0+/,""),desc:e.desc,rating:""};this.movies.splice(0,0,t),this.newMovie={id:0,title:"",year:"",length:"",desc:"",rating:""},this.succId++,this.toggleForm(),this.updateLocalStorage()},updateMovie:function(e){var t=this.getIndex(e.id);e.title!==this.movies[t].title&&(this.movies[t].title=e.title),e.year!==this.movies[t].year&&(this.movies[t].year=e.year),e.desc!==this.movies[t].desc&&(this.movies[t].desc=e.desc),e.length!==this.movies[t].length&&(this.movies[t].length=e.length.replace(/^0+/,"")),this.updateLocalStorage()},removeMovie:function(e){this.movies.splice(e,1),this.updateLocalStorage()},updateLocalStorage:function(){localStorage.setItem("movlix-movies",JSON.stringify(this.movies))},toggleForm:function(){this.showForm=!this.showForm},getIndex:function(e){return this.movies.findIndex(function(t){return t.id===e})}}},G=H,z=(a("034f"),Object(m["a"])(G,o,s,!1,null,null,null));z.options.__file="App.vue";var J=z.exports,Y=a("7bb1");i["a"].config.productionTip=!1,i["a"].use(Y["b"],{events:"blur|input"});var Z={custom:{title:{required:function(){return"Title cannot be empty."}},year:{required:function(){return"Year cannot be empty."},min_value:function(){return"Year must be 1888 or later"},max_value:function(){return"Year must be 2030 or earlier"}},length:{numeric:function(){return"Length cannot have decimals."},min_value:function(){return"Minimum length is 1 minute."}}}};Y["a"].localize("en",Z),new i["a"]({render:function(e){return e(J)}}).$mount("#app")},6265:function(e,t,a){},"64a9":function(e,t,a){},"8d62":function(e,t,a){"use strict";var i=a("923e"),o=a.n(i);o.a},"923e":function(e,t,a){},"93b5":function(e,t,a){"use strict";var i=a("1985"),o=a.n(i);o.a},"9a4d":function(e,t,a){},a0a6:function(e,t,a){"use strict";var i=a("9a4d"),o=a.n(i);o.a},a3c8:function(e,t){},a7f2:function(e,t){},b498:function(e,t,a){e.exports=a.p+"img/movlix-logo.5719f2ec.svg"}});
//# sourceMappingURL=app.7ee4bcde.js.map