import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
import { grayColor, matBlack } from "../../constants/color";

export const VisuallyHiddenInput = styled('input')({
    border: 'none',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
})

export const Link = styled(LinkComponent)({
    textDecoration: 'none',
    color: 'black',
    padding: '1rem',
    '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.1)'
    }
})


export const InputBox = styled('input')`
width:100%;
height:100%;
border:none;
outline:none;
padding:0 3rem;
border-radius:1rem;
background-color:${grayColor};
`
export const SearchField = styled('input')`
padding:1rem;
width:20vmax;
border:none;
outline:none;
border-radius:1rem;
background-color:${grayColor};
`

export const CurveButton = styled('button')`
border-radius:1rem;
padding:1rem 2rem;
border:none;
outline:none;
cursor:pointer;
background-color:${matBlack};
color:white;

`