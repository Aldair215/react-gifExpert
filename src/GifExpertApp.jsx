import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        // console.log(newCategory)

        if (categories.includes(newCategory)) return
        setCategories(() => [...categories, newCategory])
    }


    return (
        <>
            {/* titulo */}
            <h1>GiftExpertApp</h1>

            {/* Input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            ></AddCategory>

            {categories.map((category) => (
                <GifGrid
                    key={category}
                    category={category}
                ></GifGrid>
            ))
            }

        </>
    )
}
