import axios from "axios";

export const fetchMovies = async (type = "") => {
	//	If you don't set type, the type parameter doesn't get added to the URL, 
	// so when you select all in the dropdown, it sets the type to an empty string
	// and then this function gets called with the empty string it doesn't send the
	// type parameter to the API.
	const YOUR_API_KEY = "";
	const res = await axios.get(
		`https://www.omdbapi.com/?s=bat&apikey=${YOUR_API_KEY}${type?.length ? "&type=" + type : ""
		}`
	);

	return res.data.Search.map((m) => ({
		...m,
		Rating: Math.floor(Math.random() * (100 - 20) + 20),
	}));
};
