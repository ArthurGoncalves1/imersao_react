import React from "react"
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorite } from "../src/components/Favorite";

function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
                <Header />
                <Timeline searchValue = {valorDoFiltro} playlists={config.playlists}></Timeline>
                <Favorites favorites={config.favorites}></Favorites>
            </div>
        </>
    );
}

export default HomePage


const StyledHeader = styled.div`
    section img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }

    #banner{
        height: 230px;
        width: 100vw;
        object-fit: cover;
    }
`;






function Header() {
    return (
        <StyledHeader>
            <img id="banner" src={`https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80`} />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline({searchValue, ... propriedades}) {
    const playlistNames = Object.keys(propriedades.playlists);

    // Statement
    // Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                //console.log(playlistName);
                //console.log(videos);
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}

        </StyledTimeline>
    )
}

function Favorites(propriedades) {
    const favoritos = propriedades.favorites
    return (
        <StyledFavorite>
            <section>
                <h2>AluraTubes Favoritos</h2>
                <div>
                    {favoritos.map((fav) => {
                        return (
                            <a key={fav.url} href={fav.url}>
                                <img src={fav.pic} />
                                <span>
                                    {fav.name}
                                </span>
                            </a>
                        )
                    })}
                </div>
            </section>
        </StyledFavorite>



    )
}
