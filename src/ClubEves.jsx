import "./ClubEves.css";

export default function ClubEves({clubEveHeading, clubEvePara}){

    return(
        <div className="ClubEves">
            <h3>{clubEveHeading}</h3>
            <p>{clubEvePara}</p>

        </div>
    )
}