export default class FetchApi {
  static async getBestsPodcasts() {
    let response = await fetch(
      "/best_podcasts?genre_id=93&page=2&region=us&safe_mode=0",
      { method: "GET", headers: { "content-type": "application/json" } }
    ).then((res) => res.json());
    localStorage.setItem("best_podcasts", JSON.stringify(response));
  }
}
