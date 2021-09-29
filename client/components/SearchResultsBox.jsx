import React from 'react';


const SearchResultsBox = (props) => {
  console.log(props, 'props in result box')
    
      console.log(props.list, 'props.list');
      return (
    
        <ul className="searchResultList">
          {props.list.map((movie) => {
      return <li key={movie.id}>{movie.title}</li>
    })}
        </ul>
      )
    
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