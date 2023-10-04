// write your CatList component here
function CatList({catPics}){
    return(
        <>
            {catPics.map(pic => <img src={pic.url} alt="cat" key={pic.id}></img>)}
        </>
    )
}

export default CatList