import './styles.css';
import React from 'react';
import * as selectors from '../../reducers'
import { connect } from 'react-redux';

const UserPermission = ({email,role,username,userid,canlogin,canaddartist,canaddalbum,canaddtrack}) => (
    <button className="userPermission">
        <div >{username}</div>
    </button>
)

export default connect(
    (state, {id})=>({
        email:Object.values(selectors.getUsers(state,id))[0],
        role:Object.values(selectors.getUsers(state,id))[1],
        username:Object.values(selectors.getUsers(state,id))[2],
        userid:id,
        canlogin:Object.values(selectors.getUsers(state,id))[4],
        canaddartist:Object.values(selectors.getUsers(state,id))[5],
        canaddalbum:Object.values(selectors.getUsers(state,id))[6],
        canaddtrack:Object.values(selectors.getUsers(state,id))[7],
        }),
    undefined
)(UserPermission)
