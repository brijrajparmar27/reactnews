import "./Card.css";

const Card = ({data}) => {
    return (
        <div className="news_card">
            <div className="news_img">
                <img src={data.urlToImage}/>
            </div>
            <div className="news_title">
                <h2>{data.title}</h2>
            </div>
            <div className="news_desc">
                <p>{data.description}</p>
            </div>
        </div>
    )
}
export default Card;