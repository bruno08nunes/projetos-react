import React from "react";
import "./Carrossel.css";
import Slider from "react-slick";

const Carrossel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        focusOnSelect: true
    };

    return (
        <div className="div-carrossel">
            <Slider {...settings}>
                <div className="div-item">
                    <img src="https://picsum.photos/1280/420?random=1" alt="" />
                    <h2>Teste</h2>
                </div>
                <div className="div-item">
                    <img src="https://picsum.photos/1280/420?random=2" alt="" />
                    <h2>Teste</h2>
                </div>
                <div className="div-item">
                    <img src="https://picsum.photos/1280/420?random=3" alt="" />
                    <h2>Teste</h2>
                </div>
                <div className="div-item">
                    <img src="https://picsum.photos/1280/420?random=4" alt="" />
                    <h2>Teste</h2>
                </div>
                <div className="div-item">
                    <img src="https://picsum.photos/1280/420?random=5" alt="" />
                    <h2>Teste</h2>
                </div>
                <div className="div-item">
                    <img src="https://picsum.photos/1280/420?random=6" alt="" />
                    <h2>Teste</h2>
                </div>
                <div className="div-item">
                    <img src="https://picsum.photos/1280/420?random=7" alt="" />
                    <h2>Teste</h2>
                </div>
                <div className="div-item">
                    <img src="https://picsum.photos/1280/420?random=8" alt="" />
                    <h2>Teste</h2>
                </div>
                <div className="div-item">
                    <img src="https://picsum.photos/1280/420?random=9" alt="" />
                    <h2>Teste</h2>
                </div>
                <div className="div-item">
                    <img src="https://picsum.photos/1280/420?random=10" alt="" />
                    <h2>Teste</h2>
                </div>
            </Slider>
        </div>
    );
};

export default Carrossel;
