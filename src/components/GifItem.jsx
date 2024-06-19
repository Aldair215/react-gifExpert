
export const GifItem = ({ title, url, id }) => {
    return (
        <div className="card grid">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
