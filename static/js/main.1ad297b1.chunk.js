(this["webpackJsonpfcc-js-calc"]=this["webpackJsonpfcc-js-calc"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(1),c=n.n(i),r=n(8),a=n.n(r),l=(n(14),n(2)),d=n(4),h=n(5),u=n(7),o=n(6);n(15);function p(e){return Object(s.jsx)("button",{id:e.id,onClick:e.onClick,children:e.val})}var y=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"renderKeys",value:function(e,t){var n=this;return Object(s.jsx)(p,{id:e,val:t,onClick:function(){return n.props.onClick(t)}})}},{key:"render",value:function(){return Object(s.jsxs)("div",{id:"keys",children:[Object(s.jsxs)("div",{id:"first-row",children:[this.renderKeys("clear","AC"),this.renderKeys("divide","/"),this.renderKeys("multiply","*")]}),Object(s.jsxs)("div",{id:"second-row",children:[this.renderKeys("seven","7"),this.renderKeys("eight","8"),this.renderKeys("nine","9"),this.renderKeys("subtract","-")]}),Object(s.jsxs)("div",{id:"third-row",children:[this.renderKeys("four","4"),this.renderKeys("five","5"),this.renderKeys("six","6"),this.renderKeys("add","+")]}),Object(s.jsxs)("div",{id:"forth-row",children:[this.renderKeys("one","1"),this.renderKeys("two","2"),this.renderKeys("three","3"),this.renderKeys("equals","=")]}),Object(s.jsxs)("div",{id:"fifth-row",children:[this.renderKeys("zero","0"),this.renderKeys("decimal",".")]})]})}}]),n}(c.a.Component),b=[],j="",f=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).updateDisplay=e.updateDisplay.bind(Object(l.a)(e)),e.handleClick=e.handleClick.bind(Object(l.a)(e)),e.calc=e.calc.bind(Object(l.a)(e)),e}return Object(h.a)(n,[{key:"updateDisplay",value:function(e){var t=document.querySelector("#display");"string"!==typeof e?j=e.toString().replaceAll(",",""):"number"===typeof e&&(j=e),t.innerHTML=j}},{key:"handleClick",value:function(e){var t=b.lastIndexOf("+"),n=b.lastIndexOf("-"),s=b.lastIndexOf("*"),i=b.lastIndexOf("/"),c=Math.max(t,n,s,i)+1,r=b.slice(c);switch(e){case"0":switch(!0){case/\d.|[1-9]+/g.test(r):b.push(e),this.updateDisplay(b)}break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":switch(!0){case 0===b[0]&&"."!==b[1]:b=[e];break;default:b.push(e)}this.updateDisplay(b);break;case".":switch(!0){case r.includes("."):break;default:b.push(e),this.updateDisplay(b)}break;case"+":case"-":case"*":case"/":"*"!==b[b.length-1]&&"/"!==b[b.length-1]&&"+"!==b[b.length-1]&&"-"!==b[b.length-1]||"*"!==b[b.length-2]&&"/"!==b[b.length-2]&&"+"!==b[b.length-2]&&"-"!==b[b.length-2]?("*"===b[b.length-1]||"/"===b[b.length-1]||"+"===b[b.length-1]||"-"===b[b.length-1])&&"-"!==e||"-"===b[b.length-1]&&"-"===e?(b.pop(),b.push(e)):b.push(e):(b.splice(-2),b.push(e)),this.updateDisplay(b);break;case"=":this.calc(b);break;case"AC":b=[0],this.updateDisplay(b)}}},{key:"calc",value:function(e){if(e.length>0){j=e.toString().replaceAll(",","");var t=Function('"use strict";return ('+j+")")();b=[t],this.updateDisplay(t)}}},{key:"componentDidMount",value:function(){b=[0],this.updateDisplay(b)}},{key:"render",value:function(){return Object(s.jsxs)("div",{id:"calc",children:[Object(s.jsx)("div",{id:"display"}),Object(s.jsx)(y,{onClick:this.handleClick})]})}}]),n}(c.a.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),i(e),c(e),r(e)}))};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.1ad297b1.chunk.js.map