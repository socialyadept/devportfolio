import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Blog.css"



class Blogs extends Component {
    render() {
        console.log(this.props.theme);
        return (
            <div className="blogs-main">
                <Header theme={this.props.theme} />
                <Footer theme={this.props.theme} />
            </div>
        );
    }
}

export default Blogs;
