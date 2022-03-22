import Movies from "../src/movies/modelMovies.js";
import Rent from "../src/rent/modelRent.js";
import Users from "../src/users/modelUsers.js";
import connection from "./BD.js";

//DB CONNECTION
connection();

//FAKE EXAMPLE OF MOCKRENT, THIS IDS ONLY EXISTS IN MY BD.
const mockRent = [{idMovie: "62331bfe92e3e46d1ae3aa27", idUser: "6232ee8dd2243c99605d3275"}]

await Rent.insertMany(mockRent);

const mockMovies = [
    {"title": "intocable","year": 2011,"genre": "comedia","actor": "omar sy","duration": 109},
    {"title": "gladiator","year": 2000,"genre": "accion","actor": "russell crowe","duration": 150},
    {"title": "forrest gump","year": 1994,"genre": "comedia","actor": "tom hanks","duration": 142},
    {"title": "la vida es bella","year": 1997,"genre": "drama","actor": "roberto benigni", "duration": 117}
]

await Movies.insertMany(mockMovies);

const mockUsers = [
    {"name": "alex","email": "alex@api.com","password": "alex", "role": "administrator"},
    {"name": "pablo","email": "pablo@api.com","password": "pablo","role": "administrator"},
    {"name": "mihai","email": "mihai@api.com","password": "mihai","role": "client"},
    {"name": "david","email": "david@api.com","password": "david","role": "client"},
    {"name": "susana","email": "susana@api.com","password": "susana","role": "client"}
]

await Users.insertMany(mockUsers)

console.log('1 Rent, 4 Movies, 5 Users added');
