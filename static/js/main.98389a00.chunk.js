(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__RkQJI",total:"Cart_total__30P-G",actions:"Cart_actions__deuv2","button--alt":"Cart_button--alt__2k1dg",button:"Cart_button__1z7Yz"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__is0AF",summary:"CartItem_summary__24spa",price:"CartItem_price__ScyJm",amount:"CartItem_amount__2Sopd",actions:"CartItem_actions__3ziHR"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__KstfO",icon:"HeaderCartButton_icon__2T5_a",badge:"HeaderCartButton_badge__2fQBz",bump:"HeaderCartButton_bump__3YlNN"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__4LKlX",modal:"Modal_modal__1eGno","slide-down":"Modal_slide-down__3vE00"}},function(e,t,n){e.exports={meal:"MealItem_meal__3mp43",description:"MealItem_description__2Axyt",price:"MealItem_price__1IXLh"}},,function(e,t,n){e.exports={header:"Header_header__2LEWF","main-image":"Header_main-image__woo1B"}},,function(e,t,n){e.exports={card:"Card_card__2WqrM"}},function(e,t,n){e.exports={input:"Input_input__2dd8I"}},function(e,t,n){e.exports={form:"MealItemForm_form__25y-3"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__22TMP","meals-appear":"AvailableMeals_meals-appear__3g4Mf"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__1GafE"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(2)),r=n(1),s=n.n(r),o=n(10),l=n.n(o),d=n(0),m=function(e){return Object(d.jsx)("div",{className:l.a.backdrop,onClick:e.onHideCart})},u=function(e){return Object(d.jsx)("div",{className:l.a.modal,children:Object(d.jsx)("div",{className:l.a.content,children:e.children})})},j=document.getElementById("overlays"),b=function(e){return Object(d.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(d.jsx)(m,{onHideCart:e.onHideCart}),j),c.a.createPortal(Object(d.jsx)(u,{children:e.children}),j)]})},x=n(4),p=n.n(x),O=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),h=n(5),f=n.n(h),_=function(e){var t="$".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:f.a["cart-item"],children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("div",{className:f.a.summary,children:[Object(d.jsx)("span",{className:f.a.price,children:t}),Object(d.jsxs)("span",{className:f.a.amount,children:["x ",e.amount]})]})]}),Object(d.jsxs)("div",{className:f.a.actions,children:[Object(d.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(d.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},v=function(e){var t=Object(r.useContext)(O),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.addItem(e)},i=function(e){t.removeItem(e)},s=Object(d.jsx)("ul",{className:p.a["cart-items"],children:t.items.map((function(e){return Object(d.jsx)(_,{name:e.name,amount:e.amount,price:e.price,onAdd:c.bind(null,e),onRemove:i.bind(null,e.id)},e.id)}))});return Object(d.jsxs)(b,{onHideCart:e.onHideCart,children:[s,Object(d.jsxs)("div",{className:p.a.total,children:[Object(d.jsx)("span",{children:"Total Amount"}),Object(d.jsx)("span",{children:n})]}),Object(d.jsxs)("div",{className:p.a.actions,children:[Object(d.jsx)("button",{className:p.a["button--alt"],onClick:e.onHideCart,children:"Close"}),a&&Object(d.jsx)("button",{className:p.a.button,children:"Order"})]})]})},C=n.p+"static/media/meals.2971f633.jpg",g=n(13),A=n.n(g),N=function(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},y=n(8),I=n.n(y),H=function(e){var t=Object(r.useContext)(O),n=t.items,a=Object(r.useState)(!1),c=Object(i.a)(a,2),s=c[0],o=c[1],l=t.items.reduce((function(e,t){return e+t.amount}),0),m="".concat(I.a.button," ").concat(s?I.a.bump:"");return Object(r.useEffect)((function(){if(0!==n.length){o(!0);var e=setTimeout((function(){o(!1)}),300);return function(){clearTimeout(e)}}}),[n]),Object(d.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(d.jsx)("span",{className:I.a.icon,children:Object(d.jsx)(N,{})}),Object(d.jsx)("span",{children:"Your Cart"}),Object(d.jsx)("span",{className:I.a.badge,children:l})]})},M=function(e){return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsxs)("header",{className:A.a.header,children:[Object(d.jsx)("h1",{children:"ReactMeals"}),Object(d.jsx)(H,{onClick:e.onShowCart})]}),Object(d.jsx)("div",{className:A.a["main-image"],children:Object(d.jsx)("img",{src:C,alt:"A Table full of delicious food!"})})]})},w=n(15),k=n.n(w),B=function(e){return Object(d.jsx)("div",{className:k.a.card,children:e.children})},F=n(3),S=n(16),E=n.n(S),R=s.a.forwardRef((function(e,t){return Object(d.jsxs)("div",{className:E.a.input,children:[Object(d.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(d.jsx)("input",Object(F.a)({ref:t},e.input))]})})),z=n(17),D=n.n(z),T=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(d.jsxs)("form",{className:D.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddtoCart(a)},children:[Object(d.jsx)(R,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(d.jsx)("button",{children:"+ Add"}),!a&&Object(d.jsx)("p",{children:"Please enter a valid amount (1-5)"})]})},P=n(11),G=n.n(P),J=function(e){var t=Object(r.useContext)(O),n="$".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:G.a.meal,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("div",{className:G.a.description,children:e.description}),Object(d.jsx)("div",{className:G.a.price,children:n})]}),Object(d.jsx)("div",{children:Object(d.jsx)(T,{onAddtoCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},Y=n(18),L=n.n(Y),V=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],$=function(e){var t=V.map((function(e){return Object(d.jsx)(J,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(d.jsx)("section",{className:L.a.meals,children:Object(d.jsx)(B,{children:Object(d.jsx)("ul",{children:t})})})},q=n(19),K=n.n(q),Q=function(){return Object(d.jsxs)("section",{className:K.a.summary,children:[Object(d.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(d.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(d.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},W=function(e){return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)(Q,{}),Object(d.jsx)($,{})]})},X=n(14),U={items:[],totalAmount:0},Z=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(F.a)(Object(F.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(X.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(F.a)(Object(F.a)({},l),{},{amount:l.amount-1});(s=Object(X.a)(e.items))[o]=m}return{items:s,totalAmount:d}}return U},ee=function(e){var t=Object(r.useReducer)(Z,U),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(d.jsx)(O.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)(ee,{children:[n&&Object(d.jsx)(v,{onHideCart:function(){a(!1)}}),Object(d.jsx)(M,{onShowCart:function(){a(!0)}}),Object(d.jsx)("main",{children:Object(d.jsx)(W,{})})]})};c.a.render(Object(d.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.98389a00.chunk.js.map