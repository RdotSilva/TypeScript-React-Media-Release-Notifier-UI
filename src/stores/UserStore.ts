import { makeAutoObservable } from "mobx";

class UserStore {
  name: string = "";
  genres: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setName = (name: string) => {
    this.name = name;
  };

  setGenres = (genres: string[]) => {
    this.genres = genres;
  };
}

export default UserStore;
