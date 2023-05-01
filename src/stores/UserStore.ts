import { makeAutoObservable } from "mobx";

class UserStore {
  name: string = "";
  genres: {} = {};

  constructor() {
    makeAutoObservable(this);
  }

  setName = (name: string) => {
    this.name = name;
  };

  setGenres = (genres: {}) => {
    this.genres = genres;
  };
}

export default UserStore;
