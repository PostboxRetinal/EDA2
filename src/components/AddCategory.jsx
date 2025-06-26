import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onAddCategory }) => {
	const [inputValue, setInputValue] = useState('...');

	const onInputChange = (evt) => {
		setInputValue(evt.target.value);
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		onAddCategory(inputValue);
		setInputValue('');
	};
}

AddCategory.propTypes = {
	onAddCategory: PropTypes.func.isRequired
}
