
import styled from "styled-components";


export const StyledContainer = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
color: white;
background: ${props => `url(https://image.tmdb.org/t/p/w1280${props.image})`};
background-size: cover;
`;

export const Title = styled.div`
display: flex;
flex-direction: column;
text-transform: uppercase;
`;

export const StyledCard = styled.div`
width: 90rem;
height: 60rem;
background: #005b96;
opacity: 0.9;
border-radius: 3rem;
padding: 2rem 3rem;
display: flex;
align-items: center;
justify-content: space-evenly;
filter: none;
border: 2px solid white;
`;

export const MoviePoster = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 80%;
opacity: 1;
img {
  width: auto;
  height: 100%;
  border-radius: 0.5rem;
  box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.25);
}
i {
  margin-top: 1rem;
  font-size: 1.2rem;
}
`;

export const StyledInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 45rem;
height: 80%;

h1 {
    margin-top: 0;
}
.desc {
  margin-bottom: 0;
  font-weight: bold;
  color: #61f2f5;
  font-size: 1.2rem;
}

.movie-overview {
  line-height: 1.5rem;
}

.movie-genres {
  display: flex;
  margin-top: 0.5rem;
  div {
    margin-right: 1.2rem;
  }
}
`;

export const StyledButtons = styled.div`
display: flex;
`;

export const StyledCredits = styled.div`
display: flex;
flex-wrap: wrap;
overflow-y: scroll;
width: 100%;
height: 12rem;

::-webkit-scrollbar {
  width: 0.4rem;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 2rem;
  border: 0.2rem solid white;
}
`;

export const StyledActorImage = styled.img`
width: 6rem;
height: 6rem;
object-fit: cover;
border-radius: 100%;
margin-right: 1rem;
margin-top: 1rem;
margin-bottom: 1rem;
`;