import  { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Article, Category } from "../../Types";
import WysiwygEditorReadOnly from "../WysiwygEditor/WysigEditorReadOnly";
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
    updateArticle: Function
    article: Article
}

export default function UpdateArticleForm({ article , updateArticle}:Props) {
    const [contentState, setContentState] = useState(JSON.parse(article.content))
    const [categories, setCategories] = useState<Category[]>()

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const articleCategories = article.categories.map(category => category.name)

    const onSubmit: SubmitHandler<Inputs> = data => {
        data.content = JSON.stringify(contentState)
        updateArticle(data)
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
        <label htmlFor="title">
            <p>Title:</p>
            <input 
                defaultValue={article.title} 
                id="title"
                {...register("title", { required: true })} />
            {errors.title && <span>This field is required</span>}
        </label>
        <label htmlFor="intro">
            <p>Intro:</p>
            <textarea 
                defaultValue={article.intro}
                id="intro"
                {...register("intro", { required: true })} />
            {errors.intro && <span>This field is required</span>}
        </label>
        <div className="checkboxes">
            {
                categories?
                categories.map(category => {
                    return (
                        <label key={category.id} htmlFor={`checbox${category.id}`}>
                            {category.name} 
                            <input 
                                {...register("categories")} 
                                type="checkbox" 
                                id={`checbox${category.id}`} 
                                defaultChecked={articleCategories.includes(category.name)}
                                value={category.name} />
                        </label>
                    )
                }):null
            }
        </div>
        <input defaultValue={article.image} type={"url"} {...register("image", { required: true })} />
        {errors.image && <span>This field is required</span>}
        <img className="articleImg" src={watch("image")} alt="" />

        <WysiwygEditorReadOnly contentState={JSON.parse(article.content)} editable={true} setContentState={setContentState} />    
        <input className="submit-button" type="submit" />
    </form>
  );
}