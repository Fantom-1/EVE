import "./ClubContacts.css";

export default function ClubContacts({orgPosi, orgName, orgContact}){

    return(
        <div className="ClubContacts">
            <h4>{orgPosi}</h4>
            <hr />
            <h5>{orgName}</h5>
            <p>{orgContact}</p>

        </div>
    )
}