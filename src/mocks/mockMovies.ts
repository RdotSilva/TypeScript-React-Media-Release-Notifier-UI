export interface Movie {
  img: string;
  title: string;
  description: string;
  releaseDate: string;
  linkOne: string;
  linkTwo: string;
}

export const mockMovies: Movie[] = [
  {
    img: "image",
    title: "1",
    description: "Movie 1",
    releaseDate: "4/17/23",
    linkOne: "http://www.linkOne.com",
    linkTwo: "http://www.linktwo.com",
  },
];

/**
 * Incoming movie from TMDB API
 */
export interface IncomingMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

/**
 * This is the shape of the incoming movies from the API call
 */
export const mockIncomingMovies: IncomingMovie[] = [
  {
    adult: false,
    backdrop_path: "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
    genre_ids: [16, 12, 10751, 14, 35],
    id: 502356,
    original_language: "en",
    original_title: "The Super Mario Bros. Movie",
    overview:
      "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    popularity: 13700.561,
    poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    release_date: "2023-04-05",
    title: "The Super Mario Bros. Movie",
    video: false,
    vote_average: 7.5,
    vote_count: 951,
  },
  {
    adult: false,
    backdrop_path: "/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",
    genre_ids: [878, 12, 53, 28],
    id: 700391,
    original_language: "en",
    original_title: "65",
    overview:
      "65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.",
    popularity: 3237.667,
    poster_path: "/rzRb63TldOKdKydCvWJM8B6EkPM.jpg",
    release_date: "2023-03-02",
    title: "65",
    video: false,
    vote_average: 6.3,
    vote_count: 561,
  },
  {
    adult: false,
    backdrop_path: "/5Y5pz0NX7SZS9036I733F7uNcwK.jpg",
    genre_ids: [27, 53],
    id: 758323,
    original_language: "en",
    original_title: "The Pope's Exorcist",
    overview:
      "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
    popularity: 1985.992,
    poster_path: "/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg",
    release_date: "2023-04-05",
    title: "The Pope's Exorcist",
    video: false,
    vote_average: 6.8,
    vote_count: 84,
  },
  {
    adult: false,
    backdrop_path: "/a2tys4sD7xzVaogPntGsT1ypVoT.jpg",
    genre_ids: [53, 35, 80],
    id: 804150,
    original_language: "en",
    original_title: "Cocaine Bear",
    overview:
      "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
    popularity: 1534.574,
    poster_path: "/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
    release_date: "2023-02-22",
    title: "Cocaine Bear",
    video: false,
    vote_average: 6.5,
    vote_count: 787,
  },
  {
    adult: false,
    backdrop_path: "/c3hl9E8E7b9opXDFVF5tSyk0ykr.jpg",
    genre_ids: [16, 35, 10751, 12, 14],
    id: 816904,
    original_language: "es",
    original_title: "Momias",
    overview:
      "Through a series of unfortunate events, three mummies end up in present-day London and embark on a wacky and hilarious journey in search of an old ring belonging to the Royal Family, stolen by ambitious archaeologist Lord Carnaby.",
    popularity: 1477.48,
    poster_path: "/qVdrYN8qu7xUtsdEFeGiIVIaYd.jpg",
    release_date: "2023-01-05",
    title: "Mummies",
    video: false,
    vote_average: 7.2,
    vote_count: 158,
  },
  {
    adult: false,
    backdrop_path: "/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg",
    genre_ids: [27, 53],
    id: 980078,
    original_language: "en",
    original_title: "Winnie the Pooh: Blood and Honey",
    overview:
      "Christopher Robin is headed off to college and he has abandoned his old friends, Pooh and Piglet, which then leads to the duo embracing their inner monsters.",
    popularity: 1236.373,
    poster_path: "/fNTtVbqI92abEKAgz2ynurCUne.jpg",
    release_date: "2023-01-27",
    title: "Winnie the Pooh: Blood and Honey",
    video: false,
    vote_average: 5.8,
    vote_count: 456,
  },
  {
    adult: false,
    backdrop_path: "/sp7MPK2K60LLd7A6zjHKsfgjFil.jpg",
    genre_ids: [27, 53],
    id: 296271,
    original_language: "en",
    original_title: "The Devil Conspiracy",
    overview:
      "The hottest biotech company in the world has discovered they can clone history’s most influential people from the dead. Now, they are auctioning clones of Michelangelo, Galileo, Vivaldi, and others for tens of millions of dollars to the world’s ultra-rich. But when they steal the Shroud of Turin and clone the DNA of Jesus Christ, all hell breaks loose.",
    popularity: 818.565,
    poster_path: "/2lUYbD2C3XSuwqMUbDVDQuz9mqz.jpg",
    release_date: "2023-01-13",
    title: "The Devil Conspiracy",
    video: false,
    vote_average: 6.4,
    vote_count: 119,
  },
  {
    adult: false,
    backdrop_path: "/vppGIY6C0OJiWyc8z2oxTrlp3vd.jpg",
    genre_ids: [27, 53, 14],
    id: 713704,
    original_language: "en",
    original_title: "Evil Dead Rise",
    overview:
      "Two sisters find an ancient book that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
    popularity: 704.083,
    poster_path: "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
    release_date: "2023-04-12",
    title: "Evil Dead Rise",
    video: false,
    vote_average: 7.4,
    vote_count: 17,
  },
  {
    adult: false,
    backdrop_path: "/ceYZCBfwbBwSpGJ6PapNVw5jqLG.jpg",
    genre_ids: [16, 18, 12, 14],
    id: 916224,
    original_language: "ja",
    original_title: "すずめの戸締まり",
    overview:
      "Suzume, 17, lost her mother as a little girl. On her way to school, she meets a mysterious young man. But her curiosity unleashes a calamity that endangers the entire population of Japan, and so Suzume embarks on a journey to set things right.",
    popularity: 418.2,
    poster_path: "/vIeu8WysZrTSFb2uhPViKjX9EcC.jpg",
    release_date: "2022-11-11",
    title: "Suzume",
    video: false,
    vote_average: 8.1,
    vote_count: 121,
  },
  {
    adult: false,
    backdrop_path: "/2rVkDZFLN6DI5PAoraoe9m4IRMN.jpg",
    genre_ids: [12, 14, 35],
    id: 493529,
    original_language: "en",
    original_title: "Dungeons & Dragons: Honor Among Thieves",
    overview:
      "A charming thief and a band of unlikely adventurers undertake an epic heist to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
    popularity: 412.981,
    poster_path: "/A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg",
    release_date: "2023-03-23",
    title: "Dungeons & Dragons: Honor Among Thieves",
    video: false,
    vote_average: 7.5,
    vote_count: 408,
  },
  {
    adult: false,
    backdrop_path: "/r7Dfg9aRZ78gJsmDlCirIIlNH3d.jpg",
    genre_ids: [18],
    id: 785084,
    original_language: "en",
    original_title: "The Whale",
    overview:
      "A reclusive English teacher suffering from severe obesity attempts to reconnect with his estranged teenage daughter for one last chance at redemption.",
    popularity: 390.767,
    poster_path: "/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg",
    release_date: "2022-12-09",
    title: "The Whale",
    video: false,
    vote_average: 8.1,
    vote_count: 2005,
  },
  {
    adult: false,
    backdrop_path: "/cdOQk4GP5ch5e1HHATFG3NXouPL.jpg",
    genre_ids: [10749, 18, 35],
    id: 1016121,
    original_language: "en",
    original_title: "Beautiful Disaster",
    overview:
      "Bad-boy Travis is exactly what college freshman Abby needs and wants to avoid. He spends his nights fighting in underground boxing matches, and his days as the ultimate college campus charmer. But Abby wants nothing to do with Travis. Intrigued by Abby’s resistance, Travis offers her a simple bet: if he loses his next fight, he must remain sex-free for a month. If he wins, Abby must live in his apartment for the same amount of time. Either way, Travis has no idea that Abby’s dark past is about to emerge, and he may have finally met his match.",
    popularity: 337.927,
    poster_path: "/aQs2JO5fBfWBqy3cRAJYmgmRSCe.jpg",
    release_date: "2023-04-04",
    title: "Beautiful Disaster",
    video: false,
    vote_average: 6.1,
    vote_count: 12,
  },
];
