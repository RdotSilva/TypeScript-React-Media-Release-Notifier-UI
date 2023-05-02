import { makeAutoObservable } from "mobx";
import { GenreUserOptions } from "../utils/genres";

class UserStore {
  name: string = "";
  genres: GenreUserOptions = {
    action: false,
    adventure: false,
    animation: false,
    comedy: false,
    crime: false,
    documentary: false,
    drama: false,
    family: false,
    fantasy: false,
    history: false,
    horror: false,
    music: false,
    mystery: false,
    romance: false,
    scienceFiction: false,
    tvMovie: false,
    thriller: false,
    war: false,
    western: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setName = (name: string) => {
    this.name = name;
  };

  setGenres = (genres: GenreUserOptions) => {
    this.genres = genres;
  };
}

export default UserStore;
