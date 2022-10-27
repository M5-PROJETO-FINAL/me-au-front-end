import { Container } from "@mui/material";
import styled from "styled-components";

import bg_footer from "../../assets/bg_footer.svg";


export const ContainerFooter = styled(Container)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    height: 40vh;
    @media screen and (max-width: 768px) {
        height: 70vh;
    }

    max-width: 100vw;

    background-image: url(${bg_footer});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .chip--footer {
        position: relative;
        bottom: -50px
    }
`