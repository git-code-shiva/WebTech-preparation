const moviesOrignalList=  [
    { title: "The Shawshank Redemption", genre: "Drama" },
    { title: "The Godfather", genre: "Crime" },
    { title: "The Godfather: Part II", genre: "Crime" },
    { title: "The Dark Knight", genre: "Action" },
    { title: "12 Angry Men", genre: "Drama" },
    { title: "Schindler's List", genre: "Drama" },
    { title: "The Lord of the Rings: The Return of the King", genre: "Adventure" },
    { title: "Pulp Fiction", genre: "Crime" },
    { title: "The Good, the Bad and the Ugly", genre: "Western" },
    { title: "Fight Club", genre: "Drama" },
    { title: "Forrest Gump", genre: "Drama" },
    { title: "Inception", genre: "Action" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Adventure" },
    { title: "Star Wars: Episode V - The Empire Strikes Back", genre: "Action" },
    { title: "The Lord of the Rings: The Two Towers", genre: "Adventure" },
    { title: "The Matrix", genre: "Action" },
    { title: "Goodfellas", genre: "Crime" },
    { title: "One Flew Over the Cuckoo's Nest", genre: "Drama" },
    { title: "Seven Samurai", genre: "Adventure" },
    { title: "Se7en", genre: "Crime" },
    { title: "City of God", genre: "Crime" },
    { title: "The Silence of the Lambs", genre: "Thriller" },
    { title: "It's a Wonderful Life", genre: "Drama" },
    { title: "Life is Beautiful", genre: "Comedy" },
    { title: "The Usual Suspects", genre: "Crime" },
    { title: "Léon: The Professional", genre: "Action" },
    { title: "Spirited Away", genre: "Animation" },
    { title: "Saving Private Ryan", genre: "Drama" },
    { title: "Interstellar", genre: "Adventure" },
    { title: "The Green Mile", genre: "Drama" },
    { title: "The Prestige", genre: "Drama" },
    { title: "The Intouchables", genre: "Comedy" },
    { title: "The Lion King", genre: "Animation" },
    { title: "The Pianist", genre: "Drama" },
    { title: "The Departed", genre: "Crime" },
    { title: "Whiplash", genre: "Drama" },
    { title: "Gladiator", genre: "Action" }
  ]

  let movies= [];

  localStorage.setItem("moviesList", JSON.stringify(moviesOrignalList));
  movies = JSON.parse(localStorage.getItem('moviesList'));

  const titleInput = document.getElementById("title")
  const genreInput = document.getElementById("genre")
  const resultULtag = document.getElementById("results")
  const countTag = document.getElementById("count")

  let searchResult = [];

  document.getElementById('search').addEventListener("click", (event)=>{
    if(titleInput.value){
        searchResult = searchByTitle(titleInput.value);
    }
    else if(genreInput.value){
        searchResult = searchByGenre(genreInput.value);
    }
    displayResults(searchResult);
  });

  const searchByTitle=(searchTerm)=>{
    return movies.filter(movie=> movie.title.toLowerCase().includes(searchTerm.toLowerCase().trim()));
  }

  const searchByGenre=(searchTerm)=>{
    return movies.filter(movie=> movie.genre.toLowerCase().includes(searchTerm.toLowerCase().trim()));
  }

  const displayResults=(list)=>{
    resultULtag.innerHTML = "";
    list.map(ele=>{
        let childTag = `<li>${ele.title}(${ele.genre})</li>`;
        resultULtag.innerHTML += childTag;
    })
    countByGenre(list);
  }

  const sortByTitle=()=>{
    const sortedMovies = searchResult.sort((a,b)=> a.title.localeCompare(b.title));
    displayResults(sortedMovies);
  }

  const sortByGenre=()=>{
    const sortedMovies = searchResult.sort((a,b)=> a.genre.localeCompare(b.title));
    displayResults(sortedMovies);
  }

  const countByGenre=(list)=>{
    let countObject= {};
    list.map(item=>{
        countObject[item.genre] = (countObject[item.genre] | 0)+1;
    })
    countTag.innerHTML = "";
    for(key in countObject){
        countTag.innerHTML += `<li>${key} : ${countObject[key]}</li>`
    }
  }

//   const searchBoth=(title,genre)=>{
//     return movies.filter(movie=> movie.title.toLowerCase().includes(title.toLowerCase().trim()) && movie.genre.toLowerCase().includes(genre.toLowerCase().trim()));
//   }

