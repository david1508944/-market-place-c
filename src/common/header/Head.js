import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ChangeUser, userSelector} from "../components/redux/slices/appSlice";
import {NavLink} from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch()
  const user = useSelector(userSelector)

  const logout = () => {
    dispatch(ChangeUser({}))
  }

  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone">
            </i>
            <label>077 777777</label>
            <i className="fa fa-envelope">
            </i>
            <label>Anahit.abrahamyan92@mail.ru</label>
          </div>
          <div className="right row RText">
            {
              !user.username ?
                <NavLink
                  to='auth'
                  className="nav-link"
                >
                  Login
                </NavLink>
                :
                <NavLink
                  to='auth'
                  className="nav-link"
                  onClick={logout}

                >
                  Logout
                </NavLink>
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
