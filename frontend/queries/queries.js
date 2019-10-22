import gql from "graphql-tag";





const PROFILE_UPDATE_MUTATION = gql`
  mutation UpdateUserMutation() {
    updateUser(id: $id, data: $data) {
     
      name
      email
      phoneNumber
      aboutMe
      city
      country
      company
      school
      hometown
      language
      gender
    }
  }
`;




const COURSE_ADD_MUTATION = gql`
mutation courseaddmutation($data: courseInput!) {
  addcourse(data: $data) {
    courseID
      courseName
      courseDept
      courseRoom
      courseCapacity
      waitlistCapacity
      courseTerm
  }
}
`;





export {
  PROFILE_UPDATE_MUTATION,
  COURSE_ADD_MUTATION   
};