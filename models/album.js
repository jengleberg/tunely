var mongoose = require("mongoose");
var Schema = mongoose.Schema;

Song = require('./song');

let AlbumSchema = new Schema({
	artistName: String,
	name: String,
	releaseDate: String,
	genres: [String],
	songs: [Song.schema]
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
