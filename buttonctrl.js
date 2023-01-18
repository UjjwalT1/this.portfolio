const btn=document.querySelectorAll("[data-skl]")
const cert=document.querySelectorAll("[data-cert]")
let ovly=document.querySelector("#overlay")
let ovly2=document.querySelector("#overlay2")

ovly.addEventListener("click",()=>{
    ovly.classList.remove("act")
})
ovly2.addEventListener("click",()=>{
    ovly2.classList.remove("act")
})

btn.forEach(e=>{
    e.addEventListener("click",()=>{
        let str=e.dataset.skl
        const target=document.querySelector(".popup")
        target.parentElement.classList.add("act")
        if(str=="C++"){
            target.innerHTML='<span style="color: aliceblue; font-size: 1.7em;">'+str+'</span> <div style="background-color: aliceblue; width: 100%; height: 3px; margin: 3px 0 20px 0;"></div> Using C++ I have used concepts of Pointers,Classes and their inheritence, Operator Overloading and other concepts like reading and writing data to external text file.This is my go to language for problem solving.I also use C++ to implement DATA STRUCTURES and ALGORITHM concepts  such as <ul> <li>Arrays</li> <li>Linked Lists</li><li> Tree</li>   <li>Graphs</li><li>DP, Greedy etc...</li>'
        }
        else if(str=="JavaScript"){
            target.innerHTML='<span style="color: aliceblue; font-size: 1.7em;">'+str+'</span> <div style="background-color: aliceblue; width: 100%; height: 3px; margin: 3px 0 30px 0;"></div> I learned JavaScript for web development and while doing so I learned that its also a fine language which offers all the capabilities like Cpp like I also learned that the array in JS is capable of performing operation of other data structures such as Stack and Queue and it contains Object as a datatype unlike C++ which can also be used as a HASH MAP. It also had many additional features that were suitable for web development such as: <ul> <li>Asynchronous JS</li> <li>Fetching data from external sources.</li>  '
        }
        else if(str=="Front-End"){
            target.innerHTML='<span style="color: aliceblue; font-size: 1.7em;">'+str+'</span> <div style="background-color: aliceblue; width: 100%; height: 3px; margin: 3px 0 50px 0;"></div> Along with JS I also learned HTML and CSS for front-end web development. Utilising the knowledge I gained from HTML,CSS ans JS I created this project (this.Portfolio) . I have also created another frontend project that is mostly based on API. More details about my projects are in the PROJECTS TAB.'
        }
        else if(str=="Python"){
            target.innerHTML='<span style="color: aliceblue; font-size: 1.7em;">'+str+'</span> <div style="background-color: aliceblue; width: 100%; height: 3px; margin: 3px 0 50px 0;"></div>Still Working...!'
        }
        else if(str=="Kotlin"){
            target.innerHTML='<span style="color: aliceblue; font-size: 1.7em;">'+str+'</span> <div style="background-color: aliceblue; width: 100%; height: 3px; margin: 3px 0 50px 0;"></div>Language part is mostly done and know learning for android development'
        }
    })

})

cert.forEach(e=>{
    e.addEventListener("click",()=>{
        let str=e.dataset.cert
        const target=document.querySelector(".popup2")
        target.parentElement.classList.add("act")
        if(str=="CSS"){
            target.innerHTML='<img src="photo/CSS hackerrank certificate.jpg">'
        }
        else if(str=="JavaScript"){
            target.innerHTML='<img src="photo/JS certificate.jpg">'
        }
        else if(str=="Problem Solving"){
            target.innerHTML='<img src="photo/Problem Solving -Basic.jpg">'
        }
        else if(str=="SQL"){
            target.innerHTML='<img src="photo/SQL-basic.jpg">'
        }
        else if(str=="Google KickStart"){
            target.innerHTML='<img src="photo/Google KS round G.jpg">'
        }
        else if(str=="Python"){
            target.innerHTML='<img src="photo/Python.jpg">'
        }
    })

})
