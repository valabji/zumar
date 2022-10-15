export default function ({rate}:RateItem) {
    let stars:boolean[] = []
    for(let i=0;i<5;i++){
        if(i<Math.floor(rate)){
            stars.push(true)
        }else{
            stars.push(false)
        }
    }
  return (
    <span style={{width:132,display:"inline-flex",justifyContent:"space-between"}}>
        {stars.map(star=><img src={star?"/imgs/Star.svg":"/imgs/Star-O.svg"} />)}
    </span>
  )
}