import React, { useState, setState } from 'react';
import Header from '../../common/header/Header';
import Typography from '@material-ui/core/Typography';
import './Details.css';
import YouTube from 'react-youtube';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom';

function Details(props) {
    
    const opts = {
        width: '90%',
        playerVars: {
            autoplay: 1
        }
    }
            
    const movie= [{
        genres: ["Comedy"],
        trailer_url: "https://www.youtube.com/watch?v=X2m-08cOAbc",
        artists: [{
            wiki_url: "https://en.wikipedia.org/wiki/Ryan_Reynolds",
            id: 0,
            first_name: "Ryan",
            last_name: "Reynolds",
            profile_url: "https://en.wikipedia.org/wiki/Ryan_Reynolds#/media/File:Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_(cropped).jpg"
        }],
        poster_url: "http://image.tmdb.org/t/p/w500//xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
        release_date: "Aug 31, 2021",
        storyline: "Comedy",
        critics_rating: 2.5,
        duration: "2hrs",
        title: "Free Guy"
    },
    {
        genres: ["Action","Sci-fi"],
        trailer_url: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
        artists: [{
            wiki_url: "https://en.wikipedia.org/wiki/Robert_Downey_Jr.",
            id: 1,
            first_name: "Robert ",
            last_name: "Downey Jr",
            profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Downey_McAdams_SDCC_2009_2_%28cropped%29.jpg/170px-Downey_McAdams_SDCC_2009_2_%28cropped%29.jpg"
        }],
        poster_url: "https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXN35F0/image?locale=en-us&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg",
        release_date: "Aug 19, 2019",
        critics_rating: "4",
        storyline: "Thanos will be dead",
        duration: "2hrs",
        title: "Avenger's Endgame"
    },
    {
        genres: ["Action"],
        trailer_url: "https://www.youtube.com/watch?v=AZGcmvrTX9M",
        poster_url: "https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg",
        artists: [{
            wiki_url: "https://en.wikipedia.org/wiki/John_David_Washington",
            id: 2,
            first_name: "Tom",
            last_name: "Washington",
            profile_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/john-david-washington-1590412050.jpg?crop=0.860xw:0.860xh;0.104xw,0.0380xh&resize=480:*"
        }],
        storyline: "A movie based on inversion of time",
        release_date: "November 2020",
        critics_rating: "4",
        duration: "2hrs",
        title: "Tenet"
    },
    {
        genres: ["Action","Sci-fi"],
        trailer_url: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        poster_url: "https://lwlies.com/wp-content/uploads/2017/02/inception-leonardo-dicaprio-joseph-gordon-levitt-768x539-c-default.jpg",
        artists: [{
            wiki_url: "https://en.wikipedia.org/wiki/Leonardo_Dicaprio",
            id: 2,
            first_name: "Leonardo",
            last_name: "DiCaprio",
            profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Leonardo_DiCaprio.jpeg/170px-Leonardo_DiCaprio.jpeg"
        }],
        storyline: "A thief travels through a dream to influence and change thoughts",
        release_date: "May 2010",
        critics_rating: "4",
        duration: "2hrs",
        title: "Inception"
    }]

    const [movieState, setMovieState] = useState(movie);

    
    const starIcons = [{
        id: 1,
        stateId: "star1",
        color: "black"
    },
    {
        id: 2,
        stateId: "star2",
        color: "black"
    },
    {
        id: 3,
        stateId: "star3",
        color: "black"
    },
    {
        id: 4,
        stateId: "star4",
        color: "black"
    },
    {
        id: 5,
        stateId: "star5",
        color: "black"
    }]

    const [starIconsState, setStariconsState] = useState("");
    

    const componentWillMount=()=> {
        let that = this;
        let dataMovie = null;
        // let xhrMovie = new XMLHttpRequest();
        // xhrMovie.addEventListener("readystatechange", function () {
        //     if (this.readyState === 4) {
        //         that.setState({ movie: JSON.parse(this.responseText) });
        //     }
        // })

        // xhrMovie.open("GET", this.props.baseUrl + "movies/" + this.props.match.params.id);
        // xhrMovie.setRequestHeader("Cache-Control", "no-cache");
        // xhrMovie.send(dataMovie);

    }


    const artistClickHandler = (url) => {
        window.location = url;
    }
// need to look at this again
    const starClickHandler = (id) => {
        let starIconList = [];
        for (let star of starIcons) {
            let starNode = star;
            if (star.id <= id) {
                starNode.color = "yellow"
            }
            else {
                starNode.color = "black";

            }
            starIconList.push(starNode);
        }
        setStariconsState(starIconList);
    }

    let movies = movie;
    let moviesId = props.match.params.id;
    console.log(movies[0].artists[0].first_name);
                
    return(
         
        <div>
            
                <div className="details">
    
                <Header id={props.match.params.id} baseUrl={props.baseUrl} showBookShowButton="true" />
                 
                <div className="back">
                    <Typography>
                        <Link to="/">  &#60; Back to Home</Link>
                    </Typography>
                </div>

                
                <div className="flex-containerDetails">
                    <div className="leftDetails">
                        <img src={movies[moviesId].poster_url} alt={movies[moviesId].title} />
                    </div>
                    <div className="middleDetails">
                        <div>
                            <Typography variant="headline" component="h2">{movies[moviesId].title} </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Genre: </span> {movies[moviesId].genres.join(', ')} </Typography>
                            
                        </div>
                        <div>
                            <Typography><span className="bold">Duration:</span> {movies[moviesId].duration} </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Release Date:</span> {new Date(movies[moviesId].release_date).toDateString()} </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold"> Rating:</span> {movies[moviesId].critics_rating}  </Typography>
                        </div>
                        <div className="marginTop16">
                            <Typography><span className="bold">Plot:</span> <a href={movies[moviesId].wiki_url}>(Wiki Link)</a> {movies[moviesId].storyline} </Typography>
                        </div>
                        <div className="trailerContainer">
                            <Typography><span className="bold">Trailer:</span></Typography>
                            <YouTube
                                videoId={movies[moviesId].trailer_url.split("?v=")[1]}

                                opts={opts}
                               
                            />
                        </div>
                    </div>
                    <div className="rightDetails">
                        <Typography> <span className="bold">Rate this movie: </span></Typography>
                        {starIcons.map(star => (
                            <StarBorderIcon className={star.color} key={"star" + star.id} onClick={() => starClickHandler(star.id)} />
                        ))}
                        <div className="bold marginBottom16 marginTop16"><Typography><span className="bold">Artists:</span></Typography></div>
                        <GridList cellHeight={160} cols={2}>
                            {movie[props.match.params.id].artists.map(artist => (
                                <GridListTile className="gridTile" onClick={() => artistClickHandler(artist.wiki_url)} key={artist.id}>
                                    <img src={artist.profile_url} alt={artist.first_name + " " + artist.last_name} />
                                    <GridListTileBar
                                        title={artist.first_name + " " + artist.last_name}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Details;