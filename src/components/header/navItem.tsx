export default function({name,href="#"}: Item){
    return <a href={href} className="header-link" style={{padding:10,marginRight:26, fontWeight:"normal", fontSize:16}} >
        {name}
    </a>
}