import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("http://localhost:3000/api/v1/users");
  }

  create(data) {
    return http.post("http://localhost:3000/api/v1/users", data);
  }
}

export default new TutorialDataService();