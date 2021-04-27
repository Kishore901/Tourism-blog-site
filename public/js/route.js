//require everything here
const sidenavbar = document.querySelector('.sidenavbar');
const Contentdiv = document.querySelector('.Content-div');
const sidenavbaricon = document.querySelector('.sidenavbaricon');
const contentDivImage1 = document.querySelector('.content-img1');

sidenavbar.addEventListener('click', (e) => {
  if (e.target.classList.contains('placelist')) {
    console.log(e.target.textContent);
    fetchcontent(e.target.textContent);
  }
});

sidenavbaricon.addEventListener('click', () => {
  console.log('here');
  if (sidenavbar.classList.contains('vanishsidenavbar')) {
    sidenavbar.classList.remove('vanishsidenavbar');
    sidenavbaricon.innerHTML = `<i class="icon fas fa-chevron-left"></i>`;
  } else {
    sidenavbar.classList.add('vanishsidenavbar');
    sidenavbaricon.innerHTML = `<i class="icon fas fa-chevron-right"></i>`;
  }
});

//function to display content
function displaycontent(content) {
  console.log(contentDivImage1);
  if (contentDivImage1.classList.contains('content-img1-hidden')) {
    console.log(contentDivImage1);
    contentDivImage1.classList.remove('content-img1-hidden');
    contentDivImage1.classList.add('content-img1-show');
  }
  //   I have added some height and widht to the images, later we can add a div around it and make it proper
  contentDivImage1.src = content.imgsrc;
  Contentdiv.textContent = content.hello;
}

//function to fetch content
async function fetchcontent(content) {
  const fetchedcontent = await fetch(`/JSON/${content}.json`);
  const jsoncontent = await fetchedcontent.json();
  await displaycontent(jsoncontent);
}
