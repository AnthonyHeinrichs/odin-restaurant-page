(()=>{"use strict";function e(){const e=document.getElementById("contentAfterNav"),t=document.createElement("img");t.src="../src/assets/marthas.png",t.alt="Martha's delicious burgers",t.id="homeImg",e.appendChild(t);const n=document.createElement("div");n.classList.add("statement"),e.appendChild(n);const o=document.createElement("p");o.classList.add("statementText"),n.appendChild(o);let c="Fresh burger's in the heart of the historic Kreuzberg district.";c+=" Come try our unique burgers and eat our fresh cut fries.",c+=" We make our buns in house with lots of love and care.",c+=" Come down anytime!",o.innerText="Fresh burger's in the heart of the historic Kreuzberg district. Come try our unique burgers and eat our fresh cut fries. We make our buns in house with lots of love and care. Come down anytime!"}!function(){!function(){const e=["Home","Menu","Contact"],t=document.getElementById("content"),n=document.createElement("navbar"),o=t.appendChild(n),c=document.createElement("div");c.classList.add("title");const d=o.appendChild(c),r=document.createElement("div");r.classList.add("buttons");const a=o.appendChild(r),i=document.createElement("h2");i.classList.add("mainTitle"),d.appendChild(i),i.innerText="Martha's Delicious Burgers";for(let t=0;t<e.length;t++){let n=document.createElement("button");n.id=e[t],n.innerText=e[t],n.type="button",a.appendChild(n)}}();const t=document.getElementById("content"),n=document.createElement("div");n.id="contentAfterNav",t.appendChild(n),e()}();const t=document.getElementById("Home"),n=document.getElementById("Menu"),o=document.getElementById("Contact");t.addEventListener("click",(()=>{contentAfterNav.replaceChildren(),e()})),n.addEventListener("click",(()=>{contentAfterNav.replaceChildren(),console.log("hello from menu")})),o.addEventListener("click",(()=>{contentAfterNav.replaceChildren(),console.log("hello from contact")}))})();