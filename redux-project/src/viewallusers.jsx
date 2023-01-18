import React, { useLayoutEffect } from 'react';
import { retierveUsers } from './actions/users.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from "./reducers/users";
const ViewAllUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUser);
  useLayoutEffect(() => {
    console.log("called");
    getUsers();
  }, [])
  async function getUsers() {
    let rspnse = await dispatch(retierveUsers())
    console.log("ResponseData", rspnse);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
          </div>
      {(users.ResponseStatus) ?

        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>UserName</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {users.ResponseData.allUsers.data.Data.map((data) => {
              return <tr> <td>{data.username}</td><td>{data.gender}</td><td>{data.email}</td>   </tr>
            })}
          </tbody>
        </table>
        : "Loading...."
      }
          </div>
      </div>
    </>
  );
};

export default ViewAllUsers;