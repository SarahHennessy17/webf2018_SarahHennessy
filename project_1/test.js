var testSubjects = [
 {
   "Title": "Lady Bird",
   "Mood": "laugh",
   "Your Rating": 9,
   "Title Type": "movie",
   "Genres": "Comedy, Drama",
   "Year": 2017,
   "URL": "https://www.imdb.com/title/tt4925292/",
   "image": "https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX677_AL_.jpg"
 },
 {
   "Title": "Atonement",
   "Mood": "cry",
   "Your Rating": 9,
   "Title Type": "movie",
   "Genres": "Drama, Mystery, Romance, War",
   "Year": 2007,
   "URL": "https://www.imdb.com/title/tt0783233/",
   "image": "https://m.media-amazon.com/images/M/MV5BMGRiYjE0YzItMzk3Zi00ZmYwLWJjNDktYTAwYjIwMjIxYzM3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
 },
 {
   "Title": "Are We Not Cats",
   "Mood": "gross",
   "Your Rating": 4,
   "Title Type": "movie",
   "Genres": "Comedy, Horror, Romance",
   "Year": 2016,
   "URL": "https://www.imdb.com/title/tt5325492/",
   "image": "https://m.media-amazon.com/images/M/MV5BZmU4OTY2YWYtNjlmYi00ODMxLTgxZWQtMjY2OTcyOGNlZjNiXkEyXkFqcGdeQXVyNTcwMDUxOTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
 },
 {
   "Title": "The Shining",
   "Mood": "fear",
   "Your Rating": 9,
   "Title Type": "movie",
   "Genres": "Drama, Horror",
   "Year": 1980,
   "URL": "https://www.imdb.com/title/tt0081505/",
   "image": "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
 },
 {
   "Title": "Lincoln",
   "Mood": "sleep",
   "Your Rating": 5,
   "Title Type": "movie",
   "Genres": "Biography, Drama, History, War",
   "Year": 2012,
   "URL": "https://www.imdb.com/title/tt0443272/",
   "image": "https://m.media-amazon.com/images/M/MV5BMTQzNzczMDUyNV5BMl5BanBnXkFtZTcwNjM2ODEzOA@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
 },
 {
   "Title": "La La Land",
   "Mood": "love",
   "Your Rating": 10,
   "Title Type": "movie",
   "Genres": "Comedy, Drama, Music, Musical, Romance",
   "Year": 2016,
   "URL": "https://www.imdb.com/title/tt3783958/",
   "image": "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SY1000_SX675_AL_.jpg"
 },
 {
   "Title": "The Man from U.N.C.L.E.",
   "Mood": "adventure",
   "Your Rating": 10,
   "Title Type": "movie",
   "Genres": "Action, Adventure, Comedy",
   "Year": 2015,
   "URL": "https://www.imdb.com/title/tt1638355/",
   "image": "https://m.media-amazon.com/images/M/MV5BOTZmMWFhYmQtZDE5YS00YzBlLWJlOGEtYzAwNGU1YzVlYjZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
 },
 {
   "Title": "Taxi Driver",
   "Mood": "think",
   "Your Rating": 9,
   "Title Type": "movie",
   "Genres": "Crime, Drama",
   "Year": 1976,
   "URL": "https://www.imdb.com/title/tt0075314/",
   "image": "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,658,1000_AL_.jpg"
 },
 {
   "Title": "Star Wars: Episode V - The Empire Strikes Back",
   "Mood": "big",
   "Your Rating": 9,
   "Title Type": "movie",
   "Genres": "Action, Adventure, Fantasy, Sci-Fi",
   "Year": 1980,
   "URL": "https://www.imdb.com/title/tt0080684/",
   "image": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,641,1000_AL_.jpg"
 },
 {
   "Title": "Hereditary",
   "Mood": "dark",
   "Your Rating": 10,
   "Title Type": "movie",
   "Genres": "Drama, Horror, Mystery, Thriller",
   "Year": 2018,
   "URL": "https://www.imdb.com/title/tt7784604/",
   "image": "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SY1000_SX675_AL_.jpg"
 }
 ]
 
 var testTV = [
  {
   "Title": "30 Rock",
   "Mood": "laugh",
   "Your Rating": 10,
   "Title Type": "tvSeries",
   "Genres": "Comedy",
   "Year": 2006,
   "URL": "https://www.imdb.com/title/tt0496424/",
   "image": "https://m.media-amazon.com/images/M/MV5BMTQ4NDQ4OTUzOV5BMl5BanBnXkFtZTcwMjMzMTUyNw@@._V1_.jpg"
 },
 {
   "Title": "Grey's Anatomy",
   "Mood": "cry",
   "Your Rating": 7,
   "Title Type": "tvSeries",
   "Genres": "Drama, Romance",
   "Year": 2005,
   "URL": "https://www.imdb.com/title/tt0413573/",
   "image": "https://m.media-amazon.com/images/M/MV5BMTY5OTNjNTctMWYxNC00YjE2LWEzMTMtMTIzMzQ1MzhkODRhXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_SY1000_SX675_AL_.jpg"
 },
 {
   "Title": "The Walking Dead",
   "Mood": "gross",
   "Your Rating": 7,
   "Title Type": "tvSeries",
   "Genres": "Drama, Horror, Sci-Fi, Thriller",
   "Year": 2010,
   "URL": "https://www.imdb.com/title/tt1520211/",
   "image": "https://m.media-amazon.com/images/M/MV5BMTcwMDAzMDk3OF5BMl5BanBnXkFtZTgwMjY0MzcyNjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
 },
 {
   "Title": "Scream: The TV Series",
   "Mood": "fear",
   "Your Rating": 8,
   "Title Type": "tvSeries",
   "Genres": "Crime, Drama, Horror, Mystery, Thriller",
   "Year": 2015,
   "URL": "https://www.imdb.com/title/tt3921180/",
   "image": "https://m.media-amazon.com/images/M/MV5BNjVmY2M3ZTUtMDhkZC00ODk4LTkwMjktNDRjNGRjYTIxZGZiXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg"
 },
 {
   "Title": "The Joy of Painting",
   "Mood": "sleep",
   "Your Rating": 10,
   "Title Type": "tvSeries",
   "Genres": "Documentary, Family",
   "Year": 1983,
   "URL": "https://www.imdb.com/title/tt0383795/",
   "image": "https://m.media-amazon.com/images/M/MV5BNTk1Yjg4ODAtY2NkNi00NDljLThmMWQtOWI4NTJjNmY4NjUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDQzMDg4Nzk@._V1_.jpg"
 },
 {
   "Title": "The Vampire Diaries",
   "Mood": "love",
   "Your Rating": 8,
   "Title Type": "tvSeries",
   "Genres": "Drama, Fantasy, Horror, Mystery, Romance, Thriller",
   "Year": 2009,
   "URL": "https://www.imdb.com/title/tt1405406/",
   "image": "https://m.media-amazon.com/images/M/MV5BODhiODk3NWEtZmNiYi00N2NlLThlN2YtN2VkYTYyMjQxMWEzXkEyXkFqcGdeQXVyNjU2NjA5NjM@._V1_SY1000_CR0,0,710,1000_AL_.jpg"
 },
 {
   "Title": "Game of Thrones",
   "Mood": "adventure",
   "Your Rating": 9,
   "Title Type": "tvSeries",
   "Genres": "Action, Adventure, Drama, Fantasy, Romance",
   "Year": 2011,
   "URL": "https://www.imdb.com/title/tt0944947/",
   "image": "https://m.media-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
 },
 {
   "Title": "Maniac",
   "Mood": "think",
   "Your Rating": 10,
   "Title Type": "tvSeries",
   "Genres": "Comedy, Drama, Sci-Fi",
   "Year": 2018,
   "URL": "https://www.imdb.com/title/tt5580146/",
   "image": "https://m.media-amazon.com/images/M/MV5BMjUyMDE4MzkzN15BMl5BanBnXkFtZTgwMzIwMTYzNjM@._V1_.jpg"
 },
 {
   "Title": "Mad Men",
   "Mood": "big",
   "Your Rating": 10,
   "Title Type": "tvSeries",
   "Genres": "Drama",
   "Year": 2007,
   "URL": "https://www.imdb.com/title/tt0804503/",
   "image": "https://m.media-amazon.com/images/M/MV5BMjMwNzk5Nzg2OV5BMl5BanBnXkFtZTgwMjg1OTk1NDE@._V1_SY1000_CR0,0,685,1000_AL_.jpg"
 },
 {
   "Title": "Sharp Objects",
   "Mood": "dark",
   "Your Rating": 8,
   "Title Type": "tvSeries",
   "Genres": "Crime, Drama, Mystery, Thriller",
   "Year": 2018,
   "URL": "https://www.imdb.com/title/tt2649356/",
   "image": "https://m.media-amazon.com/images/M/MV5BZDk2NzY1MGQtYTA2MS00ZDcxLWJiMzYtNWRmMGU3ZjQ0YTFjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg"
 }
]