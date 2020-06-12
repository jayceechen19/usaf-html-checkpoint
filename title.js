console.log('can you see me')
document.addEventListener('DOMContentLoaded',function(){
            console.log("can you see me")
    var imgButton = document.getElementById('toComments')
    imgButton.addEventListener('click', function(){
        window.location.href='comments.html';
    }) 


    var searchButton = document.getElementById('searchButton')
    
    searchButton.addEventListener('click', function(){

        var searchBar = document.getElementById('searchBar')
        let value = searchBar.nodeValue.toLowerCase();
        console.log(value)
//        Get form element 
//        get text from field
//        if name from imgFolder contains userSubmittedText   displayMoviePoster

        window.location.href='comments.html';    
    })
})