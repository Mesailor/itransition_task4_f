import { fetchData } from "./utils";

class BackService {
  host = "";
  async sendCreateReq(user) {
    return await fetchData(`${this.host}/create-user`, "POST", {
      user,
    });
  }
  async sendAuthReq(user) {
    return await fetchData(`${this.host}/auth`, "POST", { user });
  }
  async getAllUsers() {
    return await fetchData(`${this.host}/users`);
  }
  async sendStatusUpdate(ids, status) {
    return await fetchData(`${this.host}/update-status`, "PUT", {
      ids,
      status,
    });
  }
  async deleteUserReq(ids) {
    return await fetchData(`${this.host}/delete`, "DELETE", { ids });
  }
}

const backService = new BackService();

export { backService };
