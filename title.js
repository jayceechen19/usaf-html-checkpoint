//Movie Database that we have
var MOVIE_DATABASE = [
    {
        image: 'StarWars.jpg',
        title: 'Star Wars: The Force Awakens',
        release: 2015,
        actors: 'Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley',
        description: 'Star Wars: The Force Awakens (also known as Star Wars: Episode VII – The Force Awakens) is a 2015 American epic space opera film produced, co-written and directed by J. J. Abrams. It is the first installment in the Star Wars sequel trilogy, following the story of Return of the Jedi (1983), and is the seventh episode of the nine-part "Skywalker saga".'
    },
    {
        image:'StarTrek.jpg',
        title: 'Star Trek',
        release: 2009,
        actors: 'Chris Pine, Zachary Quinto, Simon Pegg',
        description:"On the day of James T. Kirk's birth, his father dies on his damaged starship in a last stand against a Romulan mining vessel looking for Ambassador Spock, who in this time, has grown on Vulcan disdained by his neighbors for his half-human heritage. 25 years later, James T. Kirk has grown into a young rebellious troublemaker."
    },
    {
        image: 'OnceUponATime.jpg',
        title: 'Once Upon a Time... in Hollywood',
        release: 2019,
        actors: 'Brad Pitt, Leonardo DiCaprio',
        description:"A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles."
    },
    {
        image: '1917.jpg',
        title:'1917',
        release: 2019,
        actors: "Dean-Charles Chapman, George MacKay, Daniel Mays",
        description: "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap."
    },
    {
        image: 'Parasite.jpg',
        title: 'Parasite',
        release: 2019,
        actors: 'Kang-ho Song, Sun-kyun Lee, Yeo-jeong Jo',
        description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.'
    }
]

document.addEventListener('DOMContentLoaded',function(){
    
    var searchButton = document.getElementById('searchButton')
    var searchbar = document.getElementById('searchBar')
    var search = searchbar.textContent.toLowerCase();
    var searchResults = []

    if (search === ''){
        for(var i=0; i<MOVIE_DATABASE.length; i++){
            //Every third child, create a row
            if (i % 4 === 0){
                var row = document.createElement('row')
                row.className = 'container-fixed row'
                document.body.appendChild(row)
            }

            var div = document.createElement('div')
            div.className = 'col-md-3'

            var movie = document.createElement('img')
            movie.src = MOVIE_DATABASE[i].image
            movie.id = 'movie'

            movie.addEventListener('click', function(){
                window.location.href='comments.html';
            }) 
            row.appendChild(div)
            div.appendChild(movie)
        }
    }

    searchButton.addEventListener('click', function(){
        for(var i=0; i<MOVIE_DATABASE.length; i++){
            if (MOVIE_DATABASE[i].name.includes(search)){
                
            }
        }
    })
    
})