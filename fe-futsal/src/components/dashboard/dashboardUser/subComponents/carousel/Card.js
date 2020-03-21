import gambar from "../../assets/Bola.jpeg";
import React, {Component} from "react";

export default class Card extends Component {
    render() {
        return (
            <>
                <div className="card services-item wow fadeInRight" data-wow-delay="0.3s">
                    <img src={gambar}/>
                    <a className="text-black-50 font-weight-bolder card-header">
                        AllStar Futsall
                    </a>
                    <a className="text-dark services-content">
                        Price/Hours : 8000
                        <br/>
                        Available Field : 9
                    </a>
                    <button type="button" className="btn btn-primary col-4 open-modal-btn float-md-right"
                            onClick={this.openModalHandler}>Book
                    </button>

                </div>
            </>
        )
    }
}
