import { ItemContainer } from "./styles";

export default function ItemRepo({ title, fullName, url, onClick }) {
    return (
        <ItemContainer>
            <div className="content">
                <h3>{title}</h3>
                <p>{fullName}</p>
            </div>
            <div className="actions">
                <a href={url} target="_blank" rel="noreferrer" className="details">See details</a>
                <button onClick={onClick} rel="noreferrer" className="remove">Remove</button>
            </div>
        </ItemContainer>
    );
}
