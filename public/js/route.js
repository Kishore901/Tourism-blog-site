//require everything here
const sidenavbar = document.querySelector(".sidenavbar");
const Contentdiv = document.querySelector(".Contentdiv");
const sidenavbaricon = document.querySelector(".sidenavbaricon");

sidenavbar.addEventListener("click", (e) => {
    if (e.target.classList.contains("placelist")) {
        console.log(e.target.textContent);
        fetchcontent(e.target.textContent)
    }
})

sidenavbaricon.addEventListener("click",()=>{
    console.log("here");
    if(sidenavbar.classList.contains("vanishsidenavbar")){
        sidenavbar.classList.remove("vanishsidenavbar");
        sidenavbaricon.innerHTML = `<i class="icon fas fa-chevron-left"></i>`
    }
    else{
        sidenavbar.classList.add("vanishsidenavbar");
        sidenavbaricon.innerHTML = `<i class="icon fas fa-chevron-right"></i>`

    }

})

//function to display content
function displaycontent(content){
    Contentdiv.textContent = content;
}

//function to fetch content
async function fetchcontent(content){
    const fetchedcontent =  await fetch(`/JSON/${content}.json`)
    const jsoncontent = await fetchedcontent.json();
    await displaycontent(jsoncontent.hello);
}