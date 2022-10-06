import axios from "axios";

export const fetchMovies = async (type = "") => {
	const res = await axios.get(
		`https://www.omdbapi.com/?s=bat&apikey=6c26eea${
			type?.length ? "&type=" + type : ""
		}`
	);

	return res.data.Search.map((m) => ({
		...m,
		Rating: Math.floor(Math.random() * (100 - 20) + 20),
	}));
};
