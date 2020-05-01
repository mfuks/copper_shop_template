import React, {Component} from 'react';
import "./_carousel.scss";

class Carousel extends Component
{

    state =
        {
            countSlide: 1,
            liSlideArrayList: []
        };

    //onClickPrevious;
    //onClickNext;
    carouselSlides;


    componentDidMount() {

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

            for (let i = 0; i < liSlideArrayList.length; i++)
            {
                if (liSlideArrayList[i].className === "visible-slide")
                {
                    this.setState(
                        {
                            countSlide: i
                        })
                }
            }

            liSlideArrayList[countSlide].classList.add("visible-slide");
        };

        this.carouselSlides();
    }

    onClickNext = () =>
    {
        const {countSlide, liSlideArrayList} = this.state;

        if(countSlide === liSlideArrayList.length-1)
        {
            liSlideArrayList[countSlide].classList.remove("visible-slide");
            this.setState(
                {
                    countSlide: 0
                });
            liSlideArrayList[0].classList.add("visible-slide");
        }
        else if(0 < countSlide < liSlideArrayList.length-1)
        {
            liSlideArrayList[countSlide].classList.remove("visible-slide");
            this.setState(
                {
                    countSlide: countSlide + 1
                });
            liSlideArrayList[countSlide + 1].classList.add("visible-slide");
        }
    };

    onClickPrevious = () =>
    {
        const {countSlide, liSlideArrayList} = this.state;

        if(countSlide === 0)
        {
            liSlideArrayList[countSlide].classList.remove("visible-slide");
            this.setState(
                {
                    countSlide: liSlideArrayList.length-1
                });
            liSlideArrayList[liSlideArrayList.length-1].classList.add("visible-slide");
        }
        else if(0 < countSlide < liSlideArrayList.length)
        {
            liSlideArrayList[countSlide].classList.remove("visible-slide");
            this.setState(
                {
                    countSlide: countSlide - 1
                });
            liSlideArrayList[countSlide - 1].classList.add("visible-slide");
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
                                    <div>
                                        <p>
                                            Icing pastry powder toffee cupcake gingerbread danish soufflé cake.
                                            Macaroon lemon drops carrot cake pudding. Pastry cake chocolate bar wafer
                                            dessert liquorice marshmallow. Lemon drops sugar plum cupcake.
                                        </p>
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