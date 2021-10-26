import React, { Component } from 'react';
import Header from '../../common/header/Header';
import Typography from '@material-ui/core/Typography';
import './Details.css';
import YouTube from 'react-youtube';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Link } from 'react-router-dom';

console.log("Hello");

class Details extends Component {

    constructor() {
        super();
        
        this.state = {
            movie: [{
                genres: ["comedy"],
                trailer_url: "https://www.youtube.com/watch?v=X2m-08cOAbc",
                artists: [{
                    wiki_url: "https://en.wikipedia.org/wiki/Ryan_Reynolds",
                    id: 0,
                    first_name: "Ryan",
                    last_name: "Reynolds",
                    profile_url: "https://en.wikipedia.org/wiki/Ryan_Reynolds#/media/File:Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_(cropped).jpg"
                }],
                poster_url: "https://images-eu.ssl-images-amazon.com/images/I/51C0Rw53UrL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
                release_date: "Aug 31, 2021",
                critics_rating: 2.5,
            },
            {
                genres: ["action"],
                trailer_url: "https://www.youtube.com/watch?v=rt-2cxAiPJk",
                artists: [{
                    wiki_url: "https://en.wikipedia.org/wiki/Tom_Holland",
                    id: 0,
                    first_name: "Tom ",
                    last_name: "Holland",
                    profile_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Jamie_Lee_Curtis_%2841851191720%29_%28cropped%29.jpg/220px-Jamie_Lee_Curtis_%2841851191720%29_%28cropped%29.jpg"
                }],
                poster_url: "https://i.insider.com/5d152f42e06ee11bb36a1af7?width=1000&format=jpeg&auto=webp",
                release_date: "Nov 20, 2021",
                critics_rating: "Yet to review",
            },
            {
                genres: ["action"],
                trailer_url: "https://www.youtube.com/watch?v=AZGcmvrTX9M",
                artists: [{
                    wiki_url: "https://en.wikipedia.org/wiki/John_David_Washington",
                    id: 1,
                    first_name: "Tom",
                    last_name: "Washington",
                    profile_url: "https://www.imdb.com/title/tt6723592/mediaviewer/rm1748282625/"
                }],
                poster_url: "https://i.insider.com/5d152f42e06ee11bb36a1af7?width=1000&format=jpeg&auto=webp",
                release_date: "July 20, 2021",
                critics_rating: "4",
            }
        ],
        
            starIcons: [{
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
        }
    }



    componentWillMount() {
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


    artistClickHandler = (url) => {
        window.location = url;
    }

    starClickHandler = (id) => {
        let starIconList = [];
        for (let star of this.state.starIcons) {
            let starNode = star;
            if (star.id <= id) {
                starNode.color = "yellow"
            }
            else {
                starNode.color = "black";

            }
            starIconList.push(starNode);
        }
        this.setState({ starIcons: starIconList });
    }

    render() {
        let movie = this.state.movie;
        const opts = {
            height: '300',
            width: '700',
            playerVars: {
                autoplay: 1
            }
        }
        return (
            <div className="details">
                <Header id={this.props.match.params.id} baseUrl={this.props.baseUrl} showBookShowButton="true" />
                <div className="back">
                    <Typography>
                        <Link to="/">  &#60; Back to Home</Link>
                    </Typography>
                </div>
                <div className="flex-containerDetails">
                    <div className="leftDetails">
                        <img src={movie.poster_url} alt={movie.title} />
                    </div>
                    <div className="middleDetails">
                        <div>
                            <Typography variant="headline" component="h2">{movie.title} </Typography>
                        </div>
                        <div>
                            {/* <Typography><span className="bold">Genre: </span> {movie.genres.join(', ')} </Typography> */}
                            <Typography><span className="bold">Genre: </span>Action </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Duration:</span> {movie.duration} </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold">Release Date:</span> {new Date(movie.release_date).toDateString()} </Typography>
                        </div>
                        <div>
                            <Typography><span className="bold"> Rating:</span> {movie.critics_rating}  </Typography>
                        </div>
                        <div className="marginTop16">
                            <Typography><span className="bold">Plot:</span> <a href={movie.wiki_url}>(Wiki Link)</a> {movie.storyline} </Typography>
                        </div>
                        <div className="trailerContainer">
                            <Typography><span className="bold">Trailer:</span></Typography>
                            <YouTube
                                // videoId={movie.trailer_url.split("?v=")[1]}

                                videoId="rt-2cxAiPJk"
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </div>
                    </div>
                    <div className="rightDetails">
                        <Typography> <span className="bold">Rate this movie: </span></Typography>
                        {this.state.starIcons.map(star => (
                            <StarBorderIcon className={star.color} key={"star" + star.id} onClick={() => this.starClickHandler(star.id)} />
                        ))}
                        <div className="bold marginBottom16 marginTop16"><Typography><span className="bold">Artists:</span></Typography></div>
                        <GridList cellHeight={160} cols={2}>
                            {movie[0].artists.map(artist => (
                                <GridListTile className="gridTile" onClick={() => this.artistClickHandler(artist.wiki_url)} key={artist.id}>
                                    <img src={artist.profile_url} alt={artist.first_name + " " + artist.last_name} />
                                    <GridListTileBar
                                        title={artist.first_name + " " + artist.last_name}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </div>
            </div >);
    }
}

export default Details;
