import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';
import cookie2 from 'react-cookies';
import { Redirect } from 'react-router';
import Axios from 'axios';
import lib from './../isLogin';
import course from "./course";

class CourseCards extends Component {
    constructor(props) {
        super(props);
        
        }
        
    

   
    

    render() {
        console.log("New Props",this.props)

        return (

            <div>

            
                <div
                    className="card text-white bg-primary mb-3"
                    style={{ width: "18rem" }}
                >
                    <br />

                    <div class="card-header bg-transparent border-success">

                        {this.props.item.courseID}
                        
                    </div>
                    <div class="card-body text-dark ">
                        <h5 class="card-title">{this.props.item.courseName}</h5>
                        <button className="btn btn-primary">
                            <Link to={`/courses/${this.props.item.courseID}`}>
                                Go to Course
                      </Link>
                        </button>
                        <br /> <br />
                    </div>
                </div>
                <br /> <br /> <br />
            </div>
        );

    }

}

export default CourseCards;