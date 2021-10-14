const Favourite = ({isFav,handleFavroute}) => {
    let classes = "cursor-pointer fa fa-heart";
    classes += isFav ? "" : "-o";
    return ( 
        <i className={classes} onClick={handleFavroute}></i>
     );
}
 
export default Favourite;