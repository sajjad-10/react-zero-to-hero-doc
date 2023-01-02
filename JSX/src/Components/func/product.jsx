function product() {
    const count = 2;
    const imageUrl = "https://picsum.photos/100";
    return (
        <div>
            <span className="m-2 text-info">Product Name</span>
            <span className="m-2 badge bg-primary">
                {count === 0 ? "zero" : count}
            </span>
            <button className="m-2 btn btn-sm btn-success">+</button>
            {count !== 0 && (
                <button className="m-2 btn btn-sm btn-warning">-</button>
            )}
            {count !== 0 ? (
                <button className="m-2 btn btn-sm btn-danger">delete</button>
            ) : (
                ""
            )}
            <img src={imageUrl} alt="" style={{ borderRadius: "50%" }} />
        </div>
    );
}

export default product;
