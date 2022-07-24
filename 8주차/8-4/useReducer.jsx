// useReducer를 활용하여 User Table 상태관리 앱 만들기

import React, { useReducer,Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import UserTable from "./UserTable";

const checkboxes = [
  {
    id: "filter-username",
    name: "filter-username",
    pathFn: (user) => user.username,
    label: "Filter by Username",
  },

  {
    id: "filter-city",
    name: "filter-city",
    pathFn: (user) => user.address.city,
    label: "Filter by City",
  },

  {
    id: "filter-company",
    name: "filter-company",
    pathFn: (user) => user.company.name,
    label: "Filter by Company",
  },
];

const initialState = {
    users: [],
    searchData: [],
    filters: {}
}

const reducer = (state,action) => {
    // state : { users, searchData, filters}
    // action : {type: String, payload: Object}
    
    switch (action.type) {
        case "init" : {
            const {users}=action.payload
            return {...state,users,searchData: users}
        }
        case "search" : {
            const {query} = action.payload
            const {searchData, filters} = state
            
            if (!query) {
                return {...state,users: searchData}}
            const pathFn = (item) => {
      return Object.values(filters).reduce((acc, fn) => {
        acc.push(fn(item));
        return acc;
      }, []);
    };

            const filteredUsers = searchData.filter((user) => {
                return (pathFn(user)
                              .map((str) => str.toLowerCase())
                              .join()
                              .search(query) !== -1
              );
            });
            return {
                ...state,
                users: filteredUsers}
        }
        case "add.filter" : {
            const {name,pathFn} = action.payload
            return {...state,filters:{ ...state.filters, [name]: pathFn }}
        }
        case "remove.filter" : {
            const {name} = action.payload
            const {[name]: _, ...rest } = state.filters
            return {...state,filters:rest}
        }
        default:
            return state
    }
}

export default function App() {
  const [query,setQuery] = useState('')
  const [state,dispatch] = useReducer(reducer,initialState)
  
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch({type: 'init', payload: {users: res.data}}))
  }, []);

  const handleChange = (e) => {
    const query = e.target.value;
    setQuery(query.trim().toLowerCase());
  };

  useEffect(() => {
    dispatch({type: 'search',payload: {query}})
  }, [query]);

  const handleReset = () => setQuery("");

  const handleCheckboxChange = (pathFn) => (e) => {
    const name = e.target.name;

    if (e.target.checked) {
      // setFilters((filterObj) => ({ ...filterObj, [name]: pathFn }));  
      dispatch({type: 'add.filter',payload: {name,pathFn}})
    }
    else {
        // setFilters(({ [name]: identifier, ...rest }) => rest);
        dispatch({type: 'remove.filter',payload: {name}})
    }
    dispatch({type: 'search',payload: {query}})
  };
  
  const { users } = state

  return (
    <Container>
      <div>
        <label htmlFor="search-query">Search</label>
        <input
          value={query}
          onChange={handleChange}
          id="search-query"
          type="text"
          name="search-query"
        />
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>

      <CheckboxController>
        {checkboxes.map(({ id, name, pathFn, label }) => (
          <Fragment key={id}>
            <input
              type="checkbox"
              onChange={handleCheckboxChange(pathFn)}
              id={id}
              name={name}
            />
            <label htmlFor={id}>{label}</label>
          </Fragment>
        ))}
      </CheckboxController>

      <UserTable users={users} />
    </Container>
  );
}

const Container = styled.div`
  min-height: 600px;
`;

const CheckboxController = styled.div`
  padding: 8px 0;

  input:not(:first-of-type) {
    margin-left: 20px;
  }
`;
