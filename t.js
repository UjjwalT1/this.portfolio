const st=document.querySelectorAll("[data-scrol]")


st.forEach(e=>{
    e.addEventListener("click",()=>{
        let str=e.dataset.scrol
        gsap.to(window, {duration: .2, scrollTo:str});
    })
})
let i=0;

document.querySelector(".rightNav").addEventListener("click",()=>{
    i=(i+1)%2;
   update(i);
})

document.querySelector(".lefttNav").addEventListener("click",()=>{
    i=Math.abs(i-1)%2;
    update(i);   
})

function update(i){
    if(i==0){
        document.querySelector(".pjholder").innerHTML='<img class="activee" style="width:450px; height: 370px;" src="photo/tp.jpg"><div class="activee"><span style="display: block; margin:0px 0 5px 0; font-size: 1.6em; font-weight: 600;">this.Portfolio : </span><span style="position: relative; right:0%; font-size: 1.2em; font-weight: 600;">1/2</span><span style="display: block; margin:0 0 30px 0; width: 100%; height: 5px; background-color: black;"></span><span>This is the name of this porfolio project that I have made. The animations in this project are implemented using CSS animations.The buttons in the title bar that instantly transports to the tab whose name is selected are implemented using SVG: -scrollTo-. The tilting and responding of the div in the home page is implemented using vanilla JS plugin.</span><a href="https://ujjwalt1.github.io/this.portfolio/" class="lnkbtn" >Redirect</a></div>'
       }
       if(i==1){
        document.querySelector(".pjholder").innerHTML='<img class="activee" style="width:450px; height: 370px;" src="photo/si.jpg"><div class="activee"><span style="display: block; margin:0px 0 5px 0; font-size: 1.6em; font-weight: 600;">Search It : </span><span style="position: relative; right:0%; font-size: 1.2em; font-weight: 600;">2/2</span><span style="display: block; margin:0 0 30px 0; width: 100%; height: 5px; background-color: black;"></span><span>This project that I made retrieves most of its data from third party APIs. In the search bar we can search for cities around the world. The keyword entered in the search bar is then processed by the JS code which uses API to fetches nearby Attarctions/Restraunts/ Travel points and Hotels</span><a target="_blank" href="https://ujjwalt1.github.io/searchit/" class="lnkbtn" >Redirect</a></div>'
       }
}



