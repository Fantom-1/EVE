import "./SearchBox.css";

export default function SearchBox(){
    return(
        <div className="searchFormContainer">
            <form style={{maxWidth: "32rem"}}>
                <div className="search_bar">
                    
                    <input type="text" id="searchInput" placeholder="Explore Events & Clubs..." />
                    <label htmlFor="searchInput" ><i className="fa-solid fa-magnifying-glass"></i></label>
                </div>
            </form>
        </div>
    )
}