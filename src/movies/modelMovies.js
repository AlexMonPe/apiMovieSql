
import mongoose from 'mongoose';

// Schema: Data structure of collection Movies
const Schema = new mongoose.Schema({
    title: String,
    year: Number,
    genre: String,
    actor: String,
    duration: Number,
});
const Movies = mongoose.model('Movies', Schema);
export default Movies;
