import React, { useEffect, useState } from 'react';

const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch('http://www.omdbapi.com/?t=+gardian&apikey=aec88602')
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return <div>{loading ? <h3>로딩중...</h3> : null}</div>;
};

export default Movie;
