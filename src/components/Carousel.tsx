type CarouselProps = {
    images: string[];
}

export const Carousel = (props: CarouselProps): JSX.Element => {

    const nextSlide = (currentSlide: number) => {
        const nextSlide = currentSlide + 1;
        if (nextSlide >= props.images.length) {
            return 0;
        }
        return nextSlide;
    }

    const prevSlide = (currentSlide: number) => {
        const prevSlide = currentSlide - 1;
        if (prevSlide < 0) {
            return props.images.length - 1;
        }
        return prevSlide;
    }


    return (
    <div className="carousel w-fit">
        {
            props.images.map((imageUrl, index) => {
                return (
                    <div id={"slide" + index} className="carousel-item relative w-fit p-10">
                        <img src={imageUrl} className="w-fit" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-12 top-1/2">
                        <a href={"#slide" + prevSlide(index)} className="btn btn-circle">❮</a> 
                        <a href={"#slide" + nextSlide(index)} className="btn btn-circle">❯</a>
                    </div>
                </div> 
                )}
            )
        }
  
    </div>
    );
  }