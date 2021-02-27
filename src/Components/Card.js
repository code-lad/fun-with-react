function Card(props){
  console.log(props)
  return(
    <div className="Card">
      <h2 className={props.name.color}>{props.name.name}</h2>
    </div>
  )
}
export default Card