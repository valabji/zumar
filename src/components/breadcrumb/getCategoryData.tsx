import categories from "../../database/categories.json"
export default function (id: number): category | null {
  for(let i=0;i<categories.length;i++){
    if(id==categories[i].id){
      return categories[i]
  }
  }
  return null
}
