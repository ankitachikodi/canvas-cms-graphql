// var login = require('./Login.js');
// var index = require('./index.js');
// var db = require('./db_connection');
// db.connect();
const courses = require('../backend/models/courses.model')

exports.getSearchCourses = (req, res) => {
    console.log("Get Search Courses");
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end("Search Page");

}

exports.postSearchCourses = async (req, res) => {
    console.log("API", req.body)
    //console.log(courses)
    // console.log(courses.find().exec());

    try {
        // console.log("Courses", await courses.find().exec());
        const coursesAll = await courses.find().exec()
        console.log(coursesAll)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(coursesAll));
    } catch (error) {
        console.log(error)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end("");
    }

}
    // courses.find().exec().then(response => {
        // const result = register.findById(req.email.id)
        //  console.log(" response is:", response);
        // res.send({
        //     success: true,
        //     data: result[0]
        // });

    // }
        // .catch(error => console.log(error));
    //return result

//}9
    //console.log(coursesAll)
    
    // res.send(coursesAll)
    
    // var resultQ = [];
    // console.log("Post Search Page");
    // var query1;
    // var category = req.body.category;
    // console.log("Category: " + category);
    // var categoryVal = req.body.categoryVal;
    // console.log("CategoryVal: " + categoryVal);
    // var selectedVal = req.body.selectedVal;
    // console.log("SelectedVal: " + selectedVal);

    // if (category === "cno_category") {
    //     if (categoryVal === "like") {
    //         query1 = "select * from Courses where courseID like '%" + selectedVal + "%';";
    //     }
    //     else {
    //         query1 = "select * from Courses where courseID " + categoryVal + " " + selectedVal + ";";
    //     }

    //     db.con.query(query1, (err, result) => {
    //         if (err) {
    //             throw err;
    //         }
    //         else {
    //             res.writeHead(200, { 'Content-Type': 'application/json' });
    //             console.log(JSON.stringify(result));
    //             res.end(JSON.stringify(result));
    //         }

    //     });

    // }
    // else if (category === "cname_category") {
    //     if (categoryVal === "like") {
    //         query1 = "select * from Courses where courseName like '%" + selectedVal + "%';";
    //     }
    //     else {
    //         query1 = "select * from Courses where courseName " + categoryVal + " '" + selectedVal + "';";
    //     }
    //     db.con.query(query1, (err, result) => {
    //         if (err) {
    //             throw err;
    //         }
    //         else {
    //             res.writeHead(200, { 'Content-Type': 'application/json' });
    //             console.log(JSON.stringify(result));
    //             res.end(JSON.stringify(result));
    //         }

    //     });
    // }
    // else if (category === "c_term") {
    //     query1 = "select * from Courses where courseTerm=" + "'" + categoryVal + "';";

    //     db.con.query(query1, (err, result) => {
    //         if (err) {
    //             throw err;
    //         }
    //         else {
    //             res.writeHead(200, { 'Content-Type': 'application/json' });
    //             console.log(JSON.stringify(result));
    //             res.end(JSON.stringify(result));
    //         }

    //     });
    // }







// module.exports.getSearchCourses = getSearchCourses;
// module.exports.postSearchCourses = postSearchCourses;