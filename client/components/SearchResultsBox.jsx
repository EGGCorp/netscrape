import React from 'react';
import MovieCard from './MovieCard.jsx';

const SearchResultsBox = (props) => {
  // console.log(props, 'props in result box')
  // console.log(props.list, 'props.list');
      
      return (
        <div className="searchResultList">
          {props.list.map((movie) => {
            return (
              <div key={movie.id} className="movie-div">
                <MovieCard title={movie.title} poster={movie.poster} countrylist={movie.clist} rating={movie.imdbrating} synopsis={movie.synopsis} year={movie.titledate}/>
              </div>
            )
          })}
        </div>
      )
    
    //   sx={{
    //     width: 'full',
    //     height: '100%',
    //     bgcolor: 'primary.dark',
    //     '&:hover': {
    //       backgroundColor: 'primary.main',
    //       opacity: [0.9, 0.8, 0.7],
    //     },
    //   }}
    // />
  //)
}

// { id: 60809, title: "Sex Education", img: "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry…1yciosgK-HiCApIEI2f1WS-60J8dv4NNh59iXV6U_SAlO2uD6w.jpg?r=5cf", … }
// avgrating: 0
// clist: Object { CA: "Canada", FR: "France", DE: "Germany", … }
// id: 60809
// imdbid: "tt7767422"
// imdbrating: 8.3
// img: "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry…1yciosgK-HiCApIEI2f1WS-60J8dv4NNh59iXV6U_SAlO2uD6w.jpg?r=5cf"
// nfid: 80197526
// poster: "https://m.media-amazon.com/images/M/MV5BOTE0MjQ1NDU3OV5BMl5BanBnXkFtZTgwNTI4MTgwNzM@._V1_SX300.jpg"
// runtime: 0
// synopsis: "Insecure Otis has all the answers when it comes to sex advice, thanks to his therapist mom. So rebel Maeve proposes a school sex-therapy clinic."
// title: "Sex Education"
// titledate: "2019-01-11"
// top250: 0
// top250tv: 0
// vtype: "series"
// year: 2018
export default SearchResultsBox;