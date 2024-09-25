import {useState} from 'react';
import {AddCategory } from './AddCategory';
import {GifGrid} from './GifGrid';


export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['Zodiac']);

    const onAddCategory = (category) => {
        setCategories( list => [...list, category]);
    }

    return (
        <>
            <h1>GifExpert</h1>
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