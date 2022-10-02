
import styled from 'styled-components';

export const Button = styled.button`
min-width: 116px;
min-height: 116px;
border-radius: 50%;
background-color: powderblue;
color: purple;
font-weight:700;
font-size: 24px;
border: 6px solid white;
transition-duration: 200ms;
cursor: no-drop;



&:last-child{
    background-color: lightpink;
    cursor: no-drop;
}
&:first-child{
    background-color: lightgreen;
    cursor: pointer;
}

&:hover,
&:active{
border: 10px solid white;
font-size: 20px;
color: white;
outline: none;
transition-duration: 400ms;
}
`;

export const FeedBackBox = styled.div`
display:flex;
justify-content: space-between;
padding: 0;
`;

 
   