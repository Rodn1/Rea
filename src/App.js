import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import Postitem from "./components/Postitem";
import PostList from "./components/postList";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript2', body: 'Description'},
        {id: 3, title: 'Javascript3', body: 'Description'},
        {id: 3, title: 'Javascript3', body: 'Description'}

    ])

    const [posts2, setPosts2] = useState([
        {id: 1, title: 'Python', body: 'Description'},
        {id: 2, title: 'Python2', body: 'Description'},
        {id: 3, title: 'Python3', body: 'Description'},
        {id: 3, title: 'Pythont3', body: 'Description'}

    ])



  return (
      <div className="App">
          <PostList posts={posts} title="Список постов 1"/>
          <PostList posts={posts} title="Список постов 2"/>
          <PostList posts={posts2} title="Список постов 3"/>
          <PostList posts={posts2} title="Список постов 4"/>
          </div>
  );
}

export default App;
