(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a(49)},26:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),c=a.n(r),m=(a(26),a(3)),o=a(4),l=a(6),s=a(5),u=(a(27),a(9)),p=a(7),d=a.n(p),h=a(20),f=a(2),v=(a(29),a(30),function(e){var t=e.data,a=e.units;return i.a.createElement("div",{className:"main-display"},i.a.createElement("h1",{className:"date"},t.date),i.a.createElement("div",{className:"weather-image"},void 0!==t.data.low&&void 0===t.data.high?i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(t.data.low.weather.icon,".png"),alt:t.data.low.weather.desciption})):i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(t.data.high.weather.icon,".png"),alt:t.data.high.weather.desciption}))),i.a.createElement("div",{className:"temeratures"},void 0!==t.data.low&&i.a.createElement(i.a.Fragment,null,"Min: ","".concat(t.data.low.temp," ").concat(a))),i.a.createElement("div",{className:"temeratures"},void 0!==t.data.high&&i.a.createElement(i.a.Fragment,null,"Max: ","".concat(t.data.high.temp," ").concat(a))))}),g=function(e){var t=e.weather,a=e.units,n=e.error;return i.a.createElement(i.a.Fragment,null,0===t.length?i.a.createElement("div",null,n?"Failed to load":"Loading!"):i.a.createElement("div",{className:"list-group"},t.map((function(e){return i.a.createElement(v,{data:e,key:e.date,units:a})}))))},w=(a(31),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={city:"Cape Town"},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.city)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"inline-input"},i.a.createElement("form",{onSubmit:this.onFormSubmit},i.a.createElement("input",{type:"text",placeholder:"Search for a place",value:this.state.city,onChange:function(t){return e.setState({city:t.target.value})}})))}}]),a}(n.Component)),E=a(8),b=a.n(E),y="87c4d0766e312391d63eb4c67ad58131",O=function(){var e=Object(n.useState)({city:"Cape Town",tempUnits:"celsius",tempSymbol:"\xb0C"}),t=Object(f.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({icon:"",main:"",tempUnits:"celsius",mainTemp:0,timezone:"",temp:{min:0,max:0}}),m=Object(f.a)(c,2),o=m[0],l=m[1],s=Object(n.useState)([]),p=Object(f.a)(s,2),v=p[0],E=p[1],O=Object(n.useState)(!1),j=Object(f.a)(O,2),N=j[0],S=j[1],x=Object(n.useState)(!1),C=Object(f.a)(x,2),T=C[0],k=C[1],F=Object(n.useState)(!1),M=Object(f.a)(F,2),z=M[0],U=M[1],_=Object(n.useState)(0),W=Object(f.a)(_,2),D=W[0],J=W[1],q=function(e){var t=new Date,a=t.getTime(),n=6e4*t.getTimezoneOffset(),i=new Date(a+n+1e3*e);return i.toDateString()+" at "+i.toTimeString().split(" ")[0]};Object(n.useEffect)((function(){!function e(){var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(a.city,"&units=metric&appid=").concat(y);b.a.get(t).then((function(t){var a=t.data;l({icon:a.weather[0].icon,main:a.weather[0].main,timezone:q(a.timezone),mainTemp:Math.round(a.main.temp),warning:R(Math.round(a.main.temp_min),Math.round(a.main.temp_max)),temp:{min:Math.round(a.main.temp_min),max:Math.round(a.main.temp_max)}}),setTimeout((function(){e()}),12e5)})).catch((function(){}))}()}),[a.city]);var A=Object(n.useCallback)((function(){return new Promise((function(e,t){var n="https://api.openweathermap.org/data/2.5/forecast?q=".concat(a.city,"&units=metric&appid=").concat(y);b.a.get(n).then((function(t){var a=t.data;if("200"===a.cod){e(!1);var n=a.list.filter((function(e){var t=e.dt_txt.split(" ")[1];return"00:00:00"===t||"12:00:00"===t})),i=[];n.forEach((function(e){var t=e.dt_txt.split(" ")[0];i[t]?i[t].push(e):i[t]=[e]}));var r=Object.entries(i);r=r.filter((function(e){return 1!==e[1].length}));var c=[];r.forEach((function(e){var t={};e[1].forEach((function(e){var a=e.dt_txt.split(" ")[1],n=Math.round(e.main.temp),i={temp:n,mainTemp:n,weather:e.weather[0]};"12:00:00"===a?t.high=i:t.low=i})),c.push({date:e[0],data:t})})),E(c)}else e(!0)})).catch((function(t){e(!0)}))}))}),[a.city]),B=Object(n.useCallback)(function(){var e=Object(h.a)(d.a.mark((function e(t,a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t().then((function(e){return e}));case 2:e.sent?a<=16e3?(console.log("Next delay",a),S(!0),J(a),n=setTimeout((function(){z?(U(!1),clearTimeout(n)):B(t,2*a)}),a)):(console.log("Just stop trying."),k(!0),S(!1),J(0)):(S(!1),J(0));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),[z]);Object(n.useEffect)((function(){B(A,2e3)}),[B,a.city,A]);var R=function(e,t){return e>=15&&t<=25?"Temperatures are warm today":e<15?"Morning is cold":t>25?"Maximum temperatures are high":void 0},I=function(e,t){return"celsius"!==t?(a=e,Math.round(1.8*a+32)):(n=e,Math.round(5/9*(n-32)));var a,n},L=function(e){var t=e.target.value,n="\xb0C";"celsius"!==t&&(n="\xb0F");var i={icon:o.icon,main:o.main,mainTemp:I(o.mainTemp,t),timezone:o.timezone,temp:{min:I(o.temp.min,t),max:I(o.temp.max,t)}};l(i);var c=v.map((function(e){var a=e;return void 0!==a.data.high&&(a.data.high.temp=I(a.data.high.temp,t)),void 0!==a.data.low&&(a.data.low.temp=I(a.data.low.temp,t)),a}));E(c),r(Object(u.a)(Object(u.a)({},a),{},{tempSymbol:n,tempUnits:t}))};return i.a.createElement("div",{className:"card"},i.a.createElement(w,{onSubmit:function(e){r({city:e,tempUnits:"celsius",tempSymbol:"\xb0C"})}}),i.a.createElement("h1",{className:"main-card-header"},"Weekly weather forecast in ",a.city),i.a.createElement("div",{className:"options-container"},i.a.createElement("label",{htmlFor:"celsius"},i.a.createElement("input",{onChange:L,type:"radio",id:"celsius",checked:"celsius"===a.tempUnits,value:"celsius"}),i.a.createElement("div",null,"Celsius")),i.a.createElement("label",{htmlFor:"fahrenheit"},i.a.createElement("input",{onChange:L,type:"radio",id:"fahrenheit",checked:"fahrenheit"===a.tempUnits,value:"fahrenheit"}),i.a.createElement("div",null,"Fahrenheit"))),i.a.createElement("div",{className:"sub-info-datatitle"},"Current Weather Today, ",o.timezone),i.a.createElement("div",{className:"currentWeather"},i.a.createElement("div",{className:"main-info"},i.a.createElement("div",{className:"temp-measurement"},o.mainTemp),i.a.createElement("div",{className:"temp-unit"},"celsius"===a.tempUnits?"\xb0C":"\xb0F")),i.a.createElement("div",{className:"sub-info"},i.a.createElement("div",{className:"sub-info-text"},o.main),i.a.createElement("div",{className:"sub-info-text"},i.a.createElement("div",{className:"weather-warning"},o.warning),i.a.createElement("span",{className:"max-temp"},i.a.createElement("i",{className:"mdi mdi-arrow-up"}),"".concat(o.temp.min," ").concat(a.tempSymbol)),i.a.createElement("span",{className:"min-temp"},i.a.createElement("i",{className:"mdi mdi-arrow-down"}),"".concat(o.temp.max," ").concat(a.tempSymbol))))),i.a.createElement(g,{error:T&&!N,weather:v,units:a.tempSymbol}),N&&i.a.createElement("div",{className:"retry-container"},i.a.createElement("button",{className:"retry-btn",onClick:function(){U(!0),S(!1),A().then((function(e){return e}))}},"Retry now"),i.a.createElement("div",null,"Retrying in ".concat(D/1e3," sec."))))},j=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(O,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.c4188367.chunk.js.map