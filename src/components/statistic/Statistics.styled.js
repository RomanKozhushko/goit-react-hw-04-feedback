import styled from 'styled-components';

export const StatList = styled.ul`
max-width:170px;
margin: 20px auto;
padding: 0;
`;

export const StatItem = styled.li`
padding: 10px;
margin-left: auto;
margin-right: auto;
list-style: none;
max-width: 200px;
display: flex;
border-radius:10px;
margin-bottom: 13px;
background-color: powderblue;
border: 4px solid purple;
font-size: 22px;
justify-content: space-between;
color: purple;

&:last-child{
    color: red;
    border: 4px solid red;
    font-weight: 700;

}
`;

export const StatItemSpan = styled.span`
font-size: 24px;
font-weight: 700;
margin-left: 5px;
`;

export const StatListName = styled.h2`
text-align: center;
color: white;
`;