export function load_google_maps() {
  return new Promise(function(resolve, reject) {
    // define the global callback that will run when google maps is loaded
    window.resolveGoogleMapsPromise = function() {
      // resolve the google object
      resolve(window.google);
      // delete the global callback to tidy up since it is no longer needed
      delete window.resolveGoogleMapsPromise;
    };
    // Now, Load the Google Maps API
    const script = document.createElement("script");
    const API_KEY = "AIzaSyD0LffT5nyQbbj_EfmB6CuNh7wZqUDBHGU";
    script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&key=${API_KEY}&callback=resolveGoogleMapsPromise`;
    script.async = true;
    document.body.appendChild(script);
  });
}

export function load_places() {
  let city = "Hyderabad, IN ";
  let query = "Shopping";
  var apiURL =
    "https://api.foursquare.com/v2/venues/search?client_id=IJMBHCJ2ID0Z32QAJVQGN3WKPWCOA2VLKGB5JHSSVGG42AMD&client_secret=VX4WPFT5X341YBTVJCWHE1ZHZPKHNFRGDFEU3BY3Q4D0JYG4&v=20130815%20&limit=50&near=" +
    city +
    "&query=" +
    query +
    "";

  return fetch(apiURL).then(resp => resp.json());
}
