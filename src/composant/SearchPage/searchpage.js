
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/searchbar';
import Listcard from '../RepoResults/listcard';
import Message from '../Message/message';
import Loadbtn from '../Button/loadbtn'

function SearchPage() {
  const [repos, setRepos] = useState([]);
  const [searchRepos, setSearchRepos] = useState('');
  const [message, setMessage] = useState('');
  const [page, setPage] = useState(1);

  const fetchRepos = async (searchRepos, page) => {
    try {
      const response = await axios.get( `https://api.github.com/search/repositories?q=${searchRepos}&sort=stars&order=desc&page=${page}&per_page=9`);
      setRepos((prevRepos) => [...prevRepos, ...response.data.items]);
      setPage((prevPage) => prevPage + 1);
      setMessage(`La recherche a donné ${response.data.total_count} résultat(s)`);
    } catch (error) {
      setMessage('Une erreur s\'est produite lors de la recherche des repos.');
      console.error(error);
    }
  };

  const handleSearch = (searchRepos) => {
    setSearchRepos(searchRepos);
    setRepos([]);
    setPage(1);
    fetchRepos(searchRepos, 1);
  };

  const handleLoad = () => {
    fetchRepos(searchRepos, page + 1);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      {message && <Message count={repos.length} />}
      {repos.length > 0 && <Listcard repos={repos} />}
      {repos.length > 0 && (
        <Loadbtn onClick={handleLoad} />
      )}
    </div>
  );
}

export default SearchPage;
