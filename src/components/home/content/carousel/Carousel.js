import React, {Component} from 'react';
import "./_carousel.scss";

class Carousel extends Component
{
    state =
        {
            countSlide: 1,
            liSlideArrayList: []
        };

    carouselSlides;

    componentDidMount()
    {
        this.carouselSlides = () =>
        {
            const {countSlide} = this.state;
            const $slideLiList = document.querySelectorAll(".carousel li");
            const liSlideArrayList = [];

            for (let i = 0; i < $slideLiList.length; i++)
            {
                liSlideArrayList.push($slideLiList[i]);
                this.setState(
                    {
                        liSlideArrayList: liSlideArrayList
                    })
            }

            liSlideArrayList[countSlide-1].classList.add("small-slide-left");
            liSlideArrayList[countSlide].classList.add("visible-slide");
            liSlideArrayList[countSlide+1].classList.add("small-slide-right");
        };

        this.carouselSlides();
    }

    onClickNext = () =>
    {
        const {countSlide, liSlideArrayList} = this.state;

        if(countSlide === liSlideArrayList.length-1)
        {
            liSlideArrayList[countSlide-1].classList.remove("small-slide-left");
            liSlideArrayList[countSlide].classList.remove("visible-slide");
            liSlideArrayList[0].classList.remove("small-slide-right");

            liSlideArrayList[countSlide].classList.add("small-slide-left");
            liSlideArrayList[0].classList.add("visible-slide");
            liSlideArrayList[1].classList.add("small-slide-right");

            this.setState(
                {
                    countSlide: 0
                });
        }
        else if(0 < countSlide && countSlide < liSlideArrayList.length-1)
        {
            liSlideArrayList[0].classList.remove("small-slide-left");
            liSlideArrayList[countSlide].classList.remove("visible-slide");
            liSlideArrayList[countSlide+1].classList.remove("small-slide-right");

            liSlideArrayList[countSlide].classList.add("small-slide-left");
            liSlideArrayList[countSlide+1].classList.add("visible-slide");
            liSlideArrayList[0].classList.add("small-slide-right");

            this.setState(
                {
                    countSlide: countSlide + 1
                });
        }
        else if (countSlide === 0)
        {
            liSlideArrayList[liSlideArrayList.length-1].classList.remove("small-slide-left");
            liSlideArrayList[countSlide].classList.remove("visible-slide");
            liSlideArrayList[countSlide+1].classList.remove("small-slide-right");

            liSlideArrayList[countSlide].classList.add("small-slide-left");
            liSlideArrayList[countSlide+1].classList.add("visible-slide");
            liSlideArrayList[liSlideArrayList.length-1].classList.add("small-slide-right");

            this.setState(
                {
                    countSlide: countSlide + 1
                });
        }
    };

    onClickPrevious = () =>
    {
        const {countSlide, liSlideArrayList} = this.state;

        if(countSlide === 0)
        {
            liSlideArrayList[liSlideArrayList.length-1].classList.remove("small-slide-left");
            liSlideArrayList[countSlide].classList.remove("visible-slide");
            liSlideArrayList[countSlide+1].classList.remove("small-slide-right");

            liSlideArrayList[liSlideArrayList.length-2].classList.add("small-slide-left");
            liSlideArrayList[liSlideArrayList.length-1].classList.add("visible-slide");
            liSlideArrayList[0].classList.add("small-slide-right");

            this.setState(
                {
                    countSlide: liSlideArrayList.length-1
                });
        }
        else if(0 < countSlide && countSlide < liSlideArrayList.length-1)
        {
            liSlideArrayList[countSlide-1].classList.remove("small-slide-left");
            liSlideArrayList[countSlide].classList.remove("visible-slide");
            liSlideArrayList[countSlide+1].classList.remove("small-slide-right");

            liSlideArrayList[liSlideArrayList.length-1].classList.add("small-slide-left");
            liSlideArrayList[countSlide-1].classList.add("visible-slide");
            liSlideArrayList[countSlide].classList.add("small-slide-right");

            this.setState(
                {
                    countSlide: countSlide - 1
                });
        }
        else if(countSlide === liSlideArrayList.length-1)
        {
            liSlideArrayList[countSlide-1].classList.remove("small-slide-left");
            liSlideArrayList[countSlide].classList.remove("visible-slide");
            liSlideArrayList[0].classList.remove("small-slide-right");

            liSlideArrayList[countSlide-2].classList.add("small-slide-left");
            liSlideArrayList[countSlide-1].classList.add("visible-slide");
            liSlideArrayList[countSlide].classList.add("small-slide-right");

            this.setState(
                {
                    countSlide: countSlide - 1
                });
        }
    };

    render() {
        return (
            <>
                <section className="carousel">
                    <div className="container carousel-cont">
                        <ul className="carousel-slides">
                            <li>
                                <div className="carousel-slide slide-1"/>
                            </li>
                            <li>
                                <div className="carousel-slide slide-2">
                                    <div className="carousel-slide-background">
                                        <div className="carousel-slide-content">
                                            <p>
                                                Icing pastry powder toffee cupcake gingerbread danish soufflé cake.
                                                Macaroon lemon drops carrot cake pudding. Pastry cake chocolate bar
                                                wafer dessert liquorice marshmallow. Lemon drops sugar plum cupcake.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="carousel-slide slide-3"/>
                            </li>
                        </ul>
                        <div className="carousel-btns">
                            <i className="fas fa-4x fa-chevron-left carousel-btn-previous"
                            onClick={this.onClickPrevious}/>
                            <i className="fas fa-4x fa-chevron-right carousel-btn-next"
                            onClick={this.onClickNext}/>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Carousel;





