var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi" }
];

function getMovieTitle( index ){
  return movieList[index].title;
}

console.log(getMovieTitle(3));

function addMovie( movie ){
  movieList.push(movie);


  return JSON.stringify(movieList);
}

var newMovie = { title: "How to train your dragon", year: "2015", length: 130, rating: "7.8", genre: "animation" };
console.log(addMovie(newMovie));

function movieByRating(){
  
  movieList.sort(function(a, b) { return a.rating - b.rating });
  return JSON.stringify(movieList);
  

}

console.log(movieByRating());

function findByTitle( title ){
  var mName = [];
  var mTitle;
  for(var i = 0; i < movieList.length; i++){
    mTitle = movieList[i].title;
    n = mTitle.search(title);

    if(n!=-1){
      mName[i] = movieList[i];
    }

  }
  return JSON.stringify(mName);
}

console.log(findByTitle("Matrix"));
