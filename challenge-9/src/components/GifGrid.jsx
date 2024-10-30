import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const getGifs = async (category) => {
	const apiKey = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
	const res = await fetch(url);
	const { data } = await res.json();

	const gifs = data.map(({ id, title, images }) => {
		return {
			id: id,
			title: title,
			url: images.original.url,
		};
	});

	return gifs;
};

export const GifGrid = ({ category }) => {
	const [inputValue, setInputValue] = useState('');
	const [gifs, setGifs] = useState([]);
	const [newCategory, setNewCategory] = useState('');
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		if (inputValue) {
			getGifs(inputValue).then(setGifs);
		}
	}, [inputValue]);

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleCategoryChange = (e) => {
		setNewCategory(e.target.value);
	};

	const handleAddCategory = () => {
		setCategories([...categories, newCategory]);
		setNewCategory('');
	};

	return (
		<div>
			<h3>{category}</h3>

			<div>
				{gifs.map((gif) => (
					<div key={gif.id}>
						<h4>{gif.title}</h4>
						<img src={gif.url} alt={gif.title} />
					</div>
				))}
			</div>
			<input
				type="text"
				value={newCategory}
				onChange={handleCategoryChange}
				placeholder="Add new category"
			/>
			<ul>
				{categories.map((cat, index) => (
					<li key={index}>{cat}</li>
				))}
			</ul>
			<input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				placeholder="Search for gifs"
			/>
			<br />
			<button onClick={handleAddCategory}>Add Category</button>
		</div>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};
