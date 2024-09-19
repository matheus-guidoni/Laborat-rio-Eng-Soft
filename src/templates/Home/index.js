import './styles.css';

import { useState, useEffect } from 'react';
import { loadPosts } from '../../utils/loadPosts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { Posts } from '../../components/Posts';
import { CabecalhoRequests } from '../../components/CabecalhoRequests';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [pages] = useState(0);
  const [postsPerPage] = useState(20);
  const [searchTarget, setSearchTarget] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const postsAndPhotos = await loadPosts();
      setPosts(postsAndPhotos.slice(pages, postsPerPage));
      setAllPosts(postsAndPhotos);
    };
    fetchPosts();
  }, [pages, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = posts.length + postsPerPage;
    const nextPosts = allPosts.slice(0, nextPage);
    setPosts(nextPosts);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchTarget(value);
  };

  const filteredPosts = !!searchTarget
    ? posts.filter((post) => post.id.toString().includes(searchTarget.toString()))
    : posts;

  const noMorePosts = posts.length >= allPosts.length;

  return (
    <div className="title">
      <CabecalhoRequests />
      <div style={{ height: '100px' }}></div>
      <section className="container">
        {!!searchTarget && (
          <>
            <h1>Search value: {searchTarget}</h1><br /><br />
          </>
        )}

        <TextInput value={searchTarget} onChange={handleSearch} />
        <Posts filteredPosts={filteredPosts} />

        {!searchTarget && (
          <Button text="Load More Posts" disabled={noMorePosts} onClick={loadMorePosts} />
        )}
      </section>
    </div>
  );
};