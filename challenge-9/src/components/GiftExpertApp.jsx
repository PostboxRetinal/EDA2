import {useState} from 'react';
import {AddCategory } from './AddCategory';
import {GifGrid} from './GifGrid';

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['New Categories']);

    const onAddCategory = (category) => {
        setCategories( list => [...list, category]);
    }

    return (
        <>
            <h1>GifExpert<br/></h1>
            <h3> Add category and show on input update</h3>
            <AddCategory onAddCategory={onAddCategory} />
            {
                categories.map(
                    (category,key) => {
                        return <GifGrid category={category} key={key} />
                    }
                )
            }
        </>
    )
}