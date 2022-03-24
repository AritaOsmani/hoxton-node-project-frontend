import  { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import WysiwygEditor from "../WysiwygEditor/WysiwygEditor";
import './NewArticleForm.css'
type Inputs = {
    title: string,
    image:string
    intro:string,
    content: string,
    categories: string
};
type Props = {
    createArticle: Function
}
type Category ={
    name?: string,
    id?: number
}

export default function NewArticleForm({createArticle}:Props) {
    const [contentState, setContentState] = useState("")
    const [categories, setCategories] = useState<Category[]>()

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => {
            data.content = JSON.stringify(contentState)
            createArticle(data)
        };
        
    useEffect(()=>{
        fetch('http://localhost:4000/categories')
        .then(resp => resp.json())
        .then(categoriesFetched => setCategories(categoriesFetched))
    },[])
    return (
    <form 
        className="add-new-article-form"
        onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Title..." {...register("title", { required: true })} />
        {errors.title && <span>This field is required</span>}
        <textarea placeholder="Intro" {...register("intro", { required: true })} />
        {errors.intro && <span>This field is required</span>}
        <div className="checkboxes">
            {
                categories?
                categories.map(category => {
                    return (
                        <label key={category.id} htmlFor={`checbox${category.id}`}>
                        {category.name} <input  {...register("categories")} type="checkbox" id={`checbox${category.id}`} value={category.name} />
                        </label>
                    )
                }):null
            }
        </div>
        <input placeholder="Image Url" type={"url"} {...register("image", { required: true })} />
        {errors.image && <span>This field is required</span>}
        <img className="articleImg" src={watch("image")} alt="" />

        <WysiwygEditor 
            setContentState={setContentState} 
        />
        <input className="submit-button" type="submit" />
    </form>
  );
}