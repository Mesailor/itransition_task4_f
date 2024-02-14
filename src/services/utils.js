class Utils {
  async fetchData(url, method = "GET", body = {}) {
    return fetch(url, {
      method,
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: method === "GET" ? null : JSON.stringify(body),
    }).then((response) => response.json());
  }
}

module.exports = new Utils();
