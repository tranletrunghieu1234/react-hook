import React, { useState, useEffect } from "react";
import queryString from "query-string";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import PostFiltersForm from "./components/PostFilterForm";
function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Tôi tên la hiếu" },
    { id: 2, title: "Tôi ăn cơm" },
    { id: 3, title: "Tôi hủ tiếu mì" },
  ]);

  function handleToDoClick(todo) {
    const index = todoList.findIndex((item) => item.id === todo.id);
    if (index === -1) return;
    let newArr = [...todoList];
    newArr.splice(index, 1);
    setTodoList(newArr);
  }
  function handleTodoOnSubmit(value) {
    //console.log("value", value);
    //add new current todoList
    let newArr = [...todoList];
    const newvalue = {
      id: newArr.length + 1,
      ...value,
    };
    //console.log("newArr", newArr);
    newArr.push(newvalue);
    //console.log("newArr", newArr);
    setTodoList(newArr);
  }
  // react hook bài 7 APi postlits
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });

  function handlePageChange(newPage) {
    //console.log("newPage", newPage);
    setFilter({
      ...filter,
      _page: newPage,
    });
  }

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filter); //convert(_limit=1&_page=1)

        //console.log("paramString", paramString);
        // const requestUrl =
        //   "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1 ";
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;

        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        //console.log("data", data);
        //console.log("pagination", pagination);
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Fail to fetch post list", error.message);
      }
    }
    fetchPostList();
  }, [filter]);
  //// hàm search
  function handleFilterChange(newFilter) {
    console.log("newFilter", newFilter);
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilter.keyword,
    });
  }
  return (
    <div className="App">
      {/* <h1>React hook todoList</h1> */}
      {/* <ColorBox /> */}
      {/* <TodoForm onSubmit={handleTodoOnSubmit} />
      <TodoList todoArr={todoList} onToDoClick={handleToDoClick} /> */}
      <h1 className="text-center">React hook post API</h1>
      <PostFiltersForm onSubmit={handleFilterChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
