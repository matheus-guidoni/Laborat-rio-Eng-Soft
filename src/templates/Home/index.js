import './styles.css';
import { Component } from 'react';


import { PostCard } from '../../components/PostCard';
import { loadPosts } from '../../utils/loadPosts'
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export class Home extends Component {

  state = {
    posts: [],
    photos: [],
    allPosts: [],
    pages: 0,
    postsPerPage: 5,
    searchTarget: ''
  }


  componentDidMount() {
    this.loadPosts()
  }

  loadPosts = async () => {
    const { pages, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(pages, postsPerPage),
      allPosts: postsAndPhotos
    });
  }

  loadMorePosts = () => {
    console.log("Chamei o botao");
    const {
      posts,
      allPosts,
      postsPerPage
    } = this.state;

    const nextPage = posts.length + postsPerPage;
    const nextPosts = allPosts.slice(0, nextPage);
    //posts.push(...nextPosts);

    this.setState({
      posts: nextPosts
    });
  }

  handleSearch = (e) => {
    const { value } = e.target;
    this.setState({ searchTarget: value });
  }


  render() {
    const { posts, allPosts, searchTarget } = this.state;
    const noMorePosts = posts.length >= allPosts.length ? true : false;
    const filteredPosts = !!searchTarget ?
      posts.filter(post => {
        return post.id.toString()
          .includes(searchTarget.toString())
      }) : posts;
    return (
      <section className="container">
        {!!searchTarget && (
          <>
            <h1> Search value: {searchTarget}</h1><br /><br />
          </>
        )}

        <TextInput
          value={searchTarget}
          onChange={this.handleSearch}
        />
        <br />
        <br />
        <br />
        <div className="posts">
          {filteredPosts.map((post) => (
            <PostCard
              title={post.title}
              body={post.body}
              id={post.id}
              cover={post.cover}
            />
          ))}
        </div>
        {!searchTarget && (
          <Button
            text="Load More Posts"
            disabled={noMorePosts}
            onClick={this.loadMorePosts}
          />
        )}
      </section >
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


