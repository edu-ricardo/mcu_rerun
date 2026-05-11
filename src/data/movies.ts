export interface Movie {
  id: string;
  title: string;
  releaseDate: string;
  phase: number;
  icon: string;
}

export const mcuMovies: Movie[] = [
  // Phase 1
  { id: 'iron-man', title: 'Iron Man', releaseDate: '2008-05-02', phase: 1, icon: '🚀' },
  { id: 'the-incredible-hulk', title: 'The Incredible Hulk', releaseDate: '2008-06-13', phase: 1, icon: '🤢' },
  { id: 'iron-man-2', title: 'Iron Man 2', releaseDate: '2010-05-07', phase: 1, icon: '🚀' },
  { id: 'thor', title: 'Thor', releaseDate: '2011-05-06', phase: 1, icon: '⚡' },
  { id: 'captain-america-the-first-avenger', title: 'Captain America: The First Avenger', releaseDate: '2011-07-22', phase: 1, icon: '🛡️' },
  { id: 'the-avengers', title: 'The Avengers', releaseDate: '2012-05-04', phase: 1, icon: '🅰️' },

  // Phase 2
  { id: 'iron-man-3', title: 'Iron Man 3', releaseDate: '2013-05-03', phase: 2, icon: '🚀' },
  { id: 'thor-the-dark-world', title: 'Thor: The Dark World', releaseDate: '2013-11-08', phase: 2, icon: '⚡' },
  { id: 'captain-america-the-winter-soldier', title: 'Captain America: The Winter Soldier', releaseDate: '2014-04-04', phase: 2, icon: '🛡️' },
  { id: 'guardians-of-the-galaxy', title: 'Guardians of the Galaxy', releaseDate: '2014-08-01', phase: 2, icon: '🎧' },
  { id: 'avengers-age-of-ultron', title: 'Avengers: Age of Ultron', releaseDate: '2015-05-01', phase: 2, icon: '🅰️' },
  { id: 'ant-man', title: 'Ant-Man', releaseDate: '2015-07-17', phase: 2, icon: '🐜' },

  // Phase 3
  { id: 'captain-america-civil-war', title: 'Captain America: Civil War', releaseDate: '2016-05-06', phase: 3, icon: '🛡️' },
  { id: 'doctor-strange', title: 'Doctor Strange', releaseDate: '2016-11-04', phase: 3, icon: '🔮' },
  { id: 'guardians-of-the-galaxy-vol-2', title: 'Guardians of the Galaxy Vol. 2', releaseDate: '2017-05-05', phase: 3, icon: '🎧' },
  { id: 'spider-man-homecoming', title: 'Spider-Man: Homecoming', releaseDate: '2017-07-07', phase: 3, icon: '🕷️' },
  { id: 'thor-ragnarok', title: 'Thor: Ragnarok', releaseDate: '2017-11-03', phase: 3, icon: '⚡' },
  { id: 'black-panther', title: 'Black Panther', releaseDate: '2018-02-16', phase: 3, icon: '🐾' },
  { id: 'avengers-infinity-war', title: 'Avengers: Infinity War', releaseDate: '2018-04-27', phase: 3, icon: '🅰️' },
  { id: 'ant-man-and-the-wasp', title: 'Ant-Man and the Wasp', releaseDate: '2018-07-06', phase: 3, icon: '🐜' },
  { id: 'captain-marvel', title: 'Captain Marvel', releaseDate: '2019-03-08', phase: 3, icon: '⭐' },
  { id: 'avengers-endgame', title: 'Avengers: Endgame', releaseDate: '2019-04-26', phase: 3, icon: '🅰️' },
  { id: 'spider-man-far-from-home', title: 'Spider-Man: Far From Home', releaseDate: '2019-07-02', phase: 3, icon: '🕷️' },

  // Phase 4
  { id: 'black-widow', title: 'Black Widow', releaseDate: '2021-07-09', phase: 4, icon: '🕷️' },
  { id: 'shang-chi-and-the-legend-of-the-ten-rings', title: 'Shang-Chi and the Legend of the Ten Rings', releaseDate: '2021-09-03', phase: 4, icon: '🐉' },
  { id: 'eternals', title: 'Eternals', releaseDate: '2021-11-05', phase: 4, icon: '♾️' },
  { id: 'spider-man-no-way-home', title: 'Spider-Man: No Way Home', releaseDate: '2021-12-17', phase: 4, icon: '🕷️' },
  { id: 'doctor-strange-in-the-multiverse-of-madness', title: 'Doctor Strange in the Multiverse of Madness', releaseDate: '2022-05-06', phase: 4, icon: '🔮' },
  { id: 'thor-love-and-thunder', title: 'Thor: Love and Thunder', releaseDate: '2022-07-08', phase: 4, icon: '⚡' },
  { id: 'black-panther-wakanda-forever', title: 'Black Panther: Wakanda Forever', releaseDate: '2022-11-11', phase: 4, icon: '🐾' },

  // Phase 5
  { id: 'ant-man-and-the-wasp-quantumania', title: 'Ant-Man and the Wasp: Quantumania', releaseDate: '2023-02-17', phase: 5, icon: '🐜' },
  { id: 'guardians-of-the-galaxy-vol-3', title: 'Guardians of the Galaxy Vol. 3', releaseDate: '2023-05-05', phase: 5, icon: '🎧' },
  { id: 'the-marvels', title: 'The Marvels', releaseDate: '2023-11-10', phase: 5, icon: '⭐' },
  { id: 'deadpool-and-wolverine', title: 'Deadpool & Wolverine', releaseDate: '2024-07-26', phase: 5, icon: '⚔️' },
  { id: 'captain-america-brave-new-world', title: 'Captain America: Brave New World', releaseDate: '2025-02-14', phase: 5, icon: '🛡️' },
  { id: 'thunderbolts', title: 'Thunderbolts*', releaseDate: '2025-05-02', phase: 5, icon: '💥' },

  // Phase 6 (and beyond to Doomsday)
  { id: 'the-fantastic-four-first-steps', title: 'The Fantastic Four: First Steps', releaseDate: '2025-07-25', phase: 6, icon: '4️⃣' },
  { id: 'avengers-doomsday', title: 'Avengers: Doomsday', releaseDate: '2026-05-01', phase: 6, icon: '🅰️' },
];
