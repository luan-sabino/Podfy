export default class FetchApi {

  static async getBestsPodcasts() {
    var endpoint = '';
    if(window.location.hostname !== 'localhost')
      endpoint="/api/";


    await fetch(
      endpoint + "best_podcasts?genre_id=93&page=1&region=us&safe_mode=0",
      { method: "GET", headers: { "content-type": "application/json" } }
    ).then((res) => res.json()).then(data => localStorage.setItem("best_podcasts", JSON.stringify(data))).catch(err => console.log(err));
    
  }

  static async populateAnotherCategory(id, key) {
    var endpoint = '';
    if(window.location.hostname !== 'localhost')
      endpoint="/api/";

    await fetch(
      endpoint + `best_podcasts?genre_id=93&page=1&region=us&safe_mode=0`,
      { method: "GET", headers: { "content-type": "application/json" } }
    ).then((res) => res.json()).then(data => localStorage.setItem(key, JSON.stringify(data))).catch(err => console.log(err));
    
  }

  static async setDataByGenres(){
    var bestsGenres = [144, 151, 68, 127, 135];
    for(let i = 1; i <= 5; i++){
      await this.populateAnotherCategory(bestsGenres[i-1], i);
    }
  }

}
