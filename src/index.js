console.log('%c HI', 'color: firebrick')
document.addEventListener( 'DOMContentLoaded', () =>{
    fetch( "https://dog.ceo/api/breeds/image/random/4" )
      .then( ( res ) => res.json() )
      .then( ( data ) =>
      {
        let array = data.message;
        for ( const item of array )
        {
          let card = document.querySelector( '#dog-image-container' )
          let img = document.createElement( 'img' )
          img.setAttribute( 'src', item )
          card.appendChild( img );
        }
      } );
    
  } );
  
  function findDogByBreed(){
    fetch('https://dog.ceo/api/breeds/list/all')
  }
