import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';
import cookie2 from 'react-cookies';
import { Redirect } from 'react-router';
import Axios from 'axios';
import lib from './../isLogin';
import course from "./course";
import CourseCards from "./CourseCards";
import createAbsoluteGrid from "../../lib/AbsoluteGrid.jsx";
import "./Courses.css";


var course123=[]
var displayObject = <CourseCards />;
var render;
var zoom = 0.7;
class CourseHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: lib.getUser()["email"],
          type: lib.getUser()["type"],
          courses: [],
          sampleItems: [],
          status:400
          //courseID: []
        };
        this.onFilter = this.onFilter.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        // this.sampleItems = [
        //     { key: 1, name: 'Test', sort: 0, filtered: 0 },
        //     { key: 2, name: 'Test 1', sort: 1, filtered: 0 },
        //     { key: 3, name: 'Test 2', sort: 2, filtered: 0 }
        // ];
        console.log("Inside courseHome page")
    }

    componentDidMount() {
        console.log("did mount of main page");
        const { email } = this.state;
        const { type } = this.state;
       //const { courseID} = this.state;
        console.log("Email: " + email);
        console.log("TypeOfUser: " + type);
       // console.log("course id:", courseID);
        Axios.get("http://localhost:3001/mainPage", { params: { email: email, type: type} })
            .then(response => {
                //   const parsedResponse = JSON.parse(res); --------------> This does not workfor reading response
                // console.log("Response data:"+response.data[0].name);  ---------> This works. Since only 1 array of response is received, we are using response[0]
                console.log("All courses response data -- Course Home",response.data)
                if (response.status == 200) {
                    // console.log("Response.data: "+response.data[0].coursename);
                    
                    this.setState(
                        {
                            courses: this.state.courses.concat(response.data),
                           // courseID: response.data.courseID
                        });
                    for(let i=0;i<this.state.courses.length;i++){
                        
                        course123.push(this.state.courses[i])
                        
                        course123[i].sort=i;
                        course123[i].key = i+1;
                        course123[i].name = "abc";
                    }

                    this.setState({
                        sampleItems: course123,
                        status:200
                      // courseID: response.data.courseID
                    });

                    console.log("NEw Final",this.state.sampleItems);
                }

            });
    }



    onFilter = function (event) {
        var search = new RegExp(event.target.value, 'i');
        this.state.sampleItems.forEach(function (item) {
            item.filtered = !item.name.match(search);
        });
        render();
    };

    //Change the item's sort order
    onMove = function (a, b) {
        console.log(a)
        console.log(b)
        let x = this.state.sampleItems;
        var source = x[a - 1];
        var target = x[b - 1];
        //alert(source+"--"+target)

        //If we're in the same group, we can just swap orders
        var targetSort = target.sort;
        //alert(targetSort);
        //CAREFUL, For maximum performance we must maintain the array's order, but change sort
        x.forEach(function (item) {
            console.log(item.sort)
            console.log(source)
            console.log(target)
            //Decrement sorts between positions when target is greater
            if (target.sort > source.sort && (item.sort <= target.sort && item.sort > source.sort)) {
                item.sort--;
                //Incremenet sorts between positions when source is greator
            } else if (item.sort >= target.sort && item.sort < source.sort) {
                item.sort++;
            }
        });

        source.sort = targetSort;
        //render();
        console.log(x);
        this.setState({
            sampleItems: x
        })
        console.log('in move')
    };

    onDragEnd = function (e) {
        //this.forceUpdate();
    }





    render() {
        // let details = null
        // details = this.state.status ==200 ? <div>
            
        // </div>:<div></div>
        const AbsoluteGrid = createAbsoluteGrid(CourseCards, {
            dragEnabled: true,
            someProp: "my component needs this"
        });

        console.log(this.state.sampleItems);
        let x = null;
        if(this.state.sampleItems.length>0){
            x = (
              <AbsoluteGrid
                items={this.state.sampleItems}
                displayObject={displayObject}
                onMove={this.onMove}
                zoom={zoom}
                dragEnabled={true}
                verticalMargin={42}
                itemWidth={300}
                onDragEnd={this.onDragEnd}
                animation='transform 300ms ease'
              />
            );
        }

        //alert(x)
        if(x===null){
            return (<div></div>);
        }

        return(
            
            <div>{lib.isFaculty() && <button type="button" className="btn btn-primary btn-sm" style={{ marginLeft: "30px" }}>
                <Link to="/createcourses">
                    Create New Course
                  </Link>
            </button>}
                <h3> Your Courses</h3>
                <br></br>
                
           
               {x}

        
            }
          )}
      
                </div>  
                
                )  

                  }
            
      }
export default CourseHome;