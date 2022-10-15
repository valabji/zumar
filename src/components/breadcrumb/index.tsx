import { useEffect } from "react"
import getCategoryData from "./getCategoryData"
import "../../style/components/breadcrumb.scss"

export default function({id}: breadcrumb){
    let categoryList: category[] = []
    const getData = (categoryId: number) =>{
        const data = getCategoryData(categoryId)
        if(data!=null){
            categoryList.push(data)
            if(data.parentID != null){
                getData(data.parentID)
            }
        }
    } 
    getData(id)
    categoryList.reverse()
    return <div className="breadcrumb-container" >
        <a href={"/"} className="breadcrumb-item" >Home</a>
        {categoryList.map((category)=>{
            return <span><span className="breadcrumb-item" style={{cursor:"default"}}>{">"}</span><a href={"/category/"+category.id} className="breadcrumb-item" >{category.name}</a></span>
        })}
    </div>
}