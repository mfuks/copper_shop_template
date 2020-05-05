import React, {Component} from 'react';
import "./_carousel.scss";

class Carousel extends Component
{
    state =
        {
            countSlide: 0,
            liSlideArrayList: []
        };

    carouselSlides;

    componentDidMount() {

        this.carouselSlides = () =>
        {
            const {countSlide} = this.state;
            const $slideLiList = document.querySelectorAll(".carousel li");
            const liSlideArrayList = [];

            const $btns = document.querySelector(".carousel .btns");

            for (let i = 0; i < $slideLiList.length; i++)
            {
                liSlideArrayList.push($slideLiList[i]);
                this.setState(
                    {
                        liSlideArrayList: liSlideArrayList
                    })
            }

            for (let i = 0; i < liSlideArrayList.length; i++)
            {
                liSlideArrayList[i].classList.add("hidden");
            }

            if(liSlideArrayList.length === 0)
            {
                $btns.classList.add("hidden")
            }
            else if (liSlideArrayList.length === 1)
            {
                liSlideArrayList[countSlide].classList.remove("hidden");
                liSlideArrayList[countSlide].classList.add("visible-slide");
            }
            else if(liSlideArrayList.length === 2)
            {
                liSlideArrayList[countSlide].classList.add("visible-slide");
                liSlideArrayList[countSlide].classList.remove("hidden");
            }
            else
            {
                liSlideArrayList[liSlideArrayList.length - 1].classList.remove("hidden");
                liSlideArrayList[countSlide].classList.remove("hidden");
                liSlideArrayList[countSlide+1].classList.remove("hidden");

                liSlideArrayList[liSlideArrayList.length - 1].classList.add("small-slide-left");
                liSlideArrayList[countSlide].classList.add("visible-slide");
                liSlideArrayList[countSlide+1].classList.add("small-slide-right");
            }

        };

        this.carouselSlides();
    }

    onClickNext = () =>
    {
        let previous1, next1, current2, next2;
        const {countSlide, liSlideArrayList} = this.state;

        if (liSlideArrayList.length > 2)
        {
            if (countSlide === liSlideArrayList.length - 1)
            {
                previous1 = countSlide - 1;
                next1 = 0;
                current2 = 0;
                next2 = 1;

                this.setState(
                    {
                        countSlide: 0
                    });
            }
            else if (0 < countSlide && countSlide < liSlideArrayList.length - 1)
            {
                previous1 = countSlide - 1;
                next1 = countSlide + 1;
                current2 = countSlide + 1;

                if(countSlide + 2 > liSlideArrayList.length - 1)next2 = 0;
                else next2 = countSlide + 2;

                this.setState(
                    {
                        countSlide: countSlide + 1
                    });
            }
            else if (countSlide === 0)
            {
                previous1 = liSlideArrayList.length - 1;
                next1 = countSlide + 1;
                current2 = countSlide + 1;
                next2 = countSlide + 2;

                this.setState(
                    {
                        countSlide: countSlide + 1
                    });
            }
            liSlideArrayList[previous1].classList.remove("small-slide-left");
            liSlideArrayList[previous1].classList.add("hidden");
            liSlideArrayList[countSlide].classList.remove("visible-slide");
            liSlideArrayList[next1].classList.remove("small-slide-right");


            liSlideArrayList[countSlide].classList.add("small-slide-left");
            liSlideArrayList[current2].classList.add("visible-slide");
            liSlideArrayList[next2].classList.add("small-slide-right");
            liSlideArrayList[next2].classList.remove("hidden");
        }
        else if (liSlideArrayList.length === 2)
        {
            liSlideArrayList[0].classList.toggle("visible-slide");
            liSlideArrayList[0].classList.toggle("hidden");
            liSlideArrayList[countSlide].classList.toggle("visible-slide");
            liSlideArrayList[countSlide].classList.toggle("hidden");
        }
    };

    onClickPrevious = () =>
    {
        let previous1, next1, previous2, current2;
        const {countSlide, liSlideArrayList} = this.state;

        if (liSlideArrayList.length > 2)
        {
            if(countSlide === 0)
            {
                previous1 = liSlideArrayList.length - 1;
                next1 = countSlide + 1;

                previous2 = liSlideArrayList.length - 2;
                current2 = liSlideArrayList.length - 1;

                this.setState(
                    {
                        countSlide: liSlideArrayList.length - 1
                    });
            }
            else if(0 < countSlide && countSlide < liSlideArrayList.length - 1)
            {
                previous1 = countSlide - 1;
                next1 = countSlide +1;

                current2 = countSlide - 1;

                if(countSlide - 2 < 0) previous2 = liSlideArrayList.length - 1;
                else previous2 = countSlide - 2;

                this.setState(
                    {
                        countSlide: countSlide - 1
                    });
            }
            else if(countSlide === liSlideArrayList.length - 1)
            {
                previous1 = countSlide - 1;
                next1 = 0;

                previous2 = countSlide -2;
                current2 = countSlide -1;

                this.setState(
                    {
                        countSlide: countSlide - 1
                    });
            }
            liSlideArrayList[previous1].classList.remove("small-slide-left");
            liSlideArrayList[countSlide].classList.remove("visible-slide");
            liSlideArrayList[next1].classList.remove("small-slide-right");
            liSlideArrayList[next1].classList.add("hidden");

            liSlideArrayList[previous2].classList.remove("hidden");
            liSlideArrayList[previous2].classList.add("small-slide-left");
            liSlideArrayList[current2].classList.add("visible-slide");
            liSlideArrayList[countSlide].classList.add("small-slide-right");
        }
        else if (liSlideArrayList.length === 2)
        {
            liSlideArrayList[0].classList.toggle("visible-slide");
            liSlideArrayList[0].classList.toggle("hidden");
            liSlideArrayList[1].classList.toggle("visible-slide");
            liSlideArrayList[1].classList.toggle("hidden");
        }
    };

    render() {
        return (
            <>
                <section className="carousel">
                    <div className="container carousel-cont">
                        <ul className="carousel-slides">
                            <li>
                                <div className="carousel-slide slide-0">
                                    <div className="carousel-slide-background">
                                        <div className="carousel-slide-content">
                                            <p>
                                                Icing pastry powder toffee cupcake gingerbread danish soufflé cake.
                                                Macaroon lemon drops carrot cake pudding. Pastry cake chocolate bar wafer
                                                dessert liquorice marshmallow. Lemon drops sugar plum cupcake.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="carousel-slide slide-1"/>
                            </li>
                            <li>
                                <div className="carousel-slide slide-2"/>
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