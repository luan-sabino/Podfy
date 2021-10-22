export default class FetchApi {

  static async getBestsPodcasts() {
    var endpoint = '';
    if(window.location.hostname !== 'localhost')
      endpoint="/api";


    let response = await fetch(
      endpoint + "/best_podcasts?genre_id=93&page=1&region=us&safe_mode=0",
      { method: "GET", headers: { "content-type": "application/json" } }
    ).then((res) => res.json());
    localStorage.setItem("best_podcasts", JSON.stringify(response));
  }

  static async populateAnotherCategory(id, key) {
    var endpoint = '';
    if(window.location.hostname !== 'localhost')
      endpoint="/api";

    let response = await fetch(
      endpoint + `/best_podcasts?genre_id=93&page=1&region=us&safe_mode=0`,
      { method: "GET", headers: { "content-type": "application/json" } }
    ).then((res) => res.json());
    localStorage.setItem(key, JSON.stringify(response));
  }

  static async setDataByGenres(){
    var bestsGenres = [144, 151, 68, 127, 135];
    for(let i = 1; i <= 5; i++){
      await this.populateAnotherCategory(bestsGenres[i-1], i);
    }
  }

}
