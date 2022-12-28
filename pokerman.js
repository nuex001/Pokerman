
const bodyCont = document.querySelector("#container");
const updateUI = (data) => {
  console.log(data);
  bodyCont.insertAdjacentHTML("beforeEnd", `
  <div class="box">
  <h1>${data.name}</h1>
<img src="${data.sprites.front_default}" alt="">
<p><span>${data.abilities[0].ability.name}</span> <span>${data.abilities[1].ability.name}</span></p>
</div>
  `);

};

// working to fetch all pokerman
// let count = 0;
// "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=
const getPoke = async (resource) => {
  const url = `${resource}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
  // console.log(data);
};

// getPoke()
//   .then((data) => {
//     updateUI(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//const get all pokers
const getPokers = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon/`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
  // console.log("dsds");
};
getPokers().then((data) => {
  data.results.forEach((data) => {
     console.log(data.url);
    getPoke(data.url)
      .then((data) => {
        updateUI(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});


// const btn = document.querySelector("button");
// btn.addEventListener("click",()=>{
  
// })