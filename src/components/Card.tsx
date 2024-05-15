type CardProps = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export const Card = (props: CardProps): JSX.Element => {
    return (
    <a href={"/projects/" + props.id} className="hover:scale-[1.02] transform transition duration-100">
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-10">
            <figure><img src={props.imageUrl} alt="image" className="max-h-48"  /></figure>
            <div className="card-body text-start">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    </a>
    );
  }