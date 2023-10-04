
let jsonString;
let data1;


  async function apiFetch () {
    try {
      // Fetch data from the API
      const response = await fetch("http://universities.hipolabs.com/search?country=United+States");

      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }

      const data = await response.json();





      jsonString = JSON.stringify(data);


      data1 = JSON.parse(jsonString);

      const parentElement = document.querySelector('.container');
      const elementToDelete = parentElement.querySelector('h2');
      if (elementToDelete) {
        parentElement.removeChild(elementToDelete);
      }



      data1.forEach(element => {

        let newDiv = document.createElement('div')
        newDiv.classList.add('card');
        newDiv.innerHTML =
          `<h2>${element["name"]}</h2>
        <div class="text-field">
             <a href="${element["web_pages"]}" >Visit Website</a>
        </div>
        <div class="text-field">
            ${element["country"]}
        </div>
        <div class="text-field">
            Domain: ${element["domains"]}
        </div>
        `
        let container = document.querySelector('.container')
        container.appendChild(newDiv)





      });


    } catch (error) {
      console.error('Error:', error);
    }
  };

  apiFetch();

  




document.querySelector('.search').addEventListener("keydown", function () {
  const searchTerm = document.querySelector('.search').value.toLowerCase();

  let i=0;
  data1.forEach((element) => {
    if (element["name"].toLowerCase() == searchTerm) {
      i=1;
      let container = document.querySelector('.container')
      container.innerHTML =
        `
        <div class="card">
        <h2>${element["name"]}</h2>
        <div class="text-field">
             <a href="${element["web_pages"]}" >Visit Website</a>
        </div>
        <div class="text-field">
            ${element["country"]}
        </div>
        <div class="text-field">
            Domain: ${element["domains"]}
        </div>
        </div>
        `

    } if(i==0){
      let container = document.querySelector('.container')
      container.innerText = `NO RESULTS FOUND`
    }
  })

})

document.querySelector('.search').addEventListener('input', function (e) {
  if(document.querySelector('.search').value.length){
    document.querySelector('.img').setAttribute("src","images/delete-button.png")
  }
})

document.querySelector('.img').addEventListener('click',function(){
  if(document.querySelector('.img').getAttribute("src") == "images/delete-button.png"){
    location.reload()
  }
})

document.querySelector('.search').addEventListener('change',function(){
  console.log(document.querySelector('.search').value)
})









// document.querySelector('.search').addEventListener("change",function(){
//   location.reload()
// })






