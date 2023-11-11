import React from 'react';
import styled from 'styled-components';
import modelS from "/Assets/model-s.png"


function Section() {
    return (
        <Wrap>
            Section
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url(${modelS});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;
