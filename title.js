//Movie Database that we have
var MOVIE_DATABASE = [
    {
        image: 'StarWars.jpg',
        title: 'Star Wars: The Force Awakens',
    },
    {
        image:'StarTrek.jpg',
        title: 'Star Trek',
   },
    {
        image: 'OnceUponATime.jpg',
        title: 'Once Upon a Time... in Hollywood',
    },
    {
        image: '1917.jpg',
        title:'1917',
    },
    {
        image: 'Parasite.jpg',
        title: 'Parasite',
    }
]

document.addEventListener('DOMContentLoaded',function(){

    //Loading all the movies in the database
    for(var i=0; i<MOVIE_DATABASE.length; i++){
        //Every third child, create a row
        if (i % 4 === 0){
            var row = document.createElement('row')
            row.className = 'container-fixed row'
            document.body.appendChild(row)
        }

        var div = document.createElement('div')
        div.className = 'col-md-3'

        var link = document.createElement('a')
        link.href = `${MOVIE_DATABASE[i].title}.html`

        var movie = document.createElement('img')
        movie.src = MOVIE_DATABASE[i].image
        movie.className = 'movie'
        movie.title = MOVIE_DATABASE[i].title

        row.appendChild(div)
        div.appendChild(link)
        link.appendChild(movie)
    }

    var searchbar = document.getElementById('searchBar')

    searchbar.addEventListener('input', function (){
        if (search !== ""){
            var searchResults = []
            var search = searchbar.value.toLowerCase();

            //Clears the page
            var rows = document.querySelectorAll(".row")
            for (var i=0; i<rows.length; i++){
                document.body.removeChild(rows[i])
            }
            
            //Finding what matches the search criteria
            for(var i=0; i<MOVIE_DATABASE.length; i++){
                console.log(search)
                if (MOVIE_DATABASE[i].title.toLowerCase().includes(search)){
                    searchResults.push(MOVIE_DATABASE[i])
                }
            }
            
            //Load the search results
            for(var i=0; i<searchResults.length; i++){
                //Every fourth child, create a row
                if (i % 4 === 0){
                    var row = document.createElement('row')
                    row.className = 'container-fixed row'
                    document.body.appendChild(row)
                }
    
                var div = document.createElement('div')
                div.className = 'col-md-3'
        
                var link = document.createElement('a')
                link.href = `${searchResults[i].title}.html`
        
                var movie = document.createElement('img')
                movie.src = searchResults[i].image
                movie.className = 'movie'
                movie.title = searchResults[i].title
        
                row.appendChild(div)
                div.appendChild(link)
                link.appendChild(movie)
            }

            var movies = document.querySelectorAll(".movie")
            for (var i=0; i<movies.length; i++){
                movie.addEventListener('click', function(){
                    window.location.href= `${movie.title}.html`;
                }) 
            }
        }
    })
    
})