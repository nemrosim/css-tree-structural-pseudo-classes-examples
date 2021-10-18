import React from 'react';
import styled, { css } from 'styled-components';

const StyledSvg = styled.svg<{ isTop?: boolean }>`
    position: absolute;
    ${({ isTop }) => {
        if (isTop) {
            return css`
                top: 0;
            `;
        } else {
            return css`
                bottom: 0;
            `;
        }
    }}
`;

const WAVE_COLOR = '#42BCC9';

const Top = () => {
    return (
        <StyledSvg isTop={true} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
                fill={WAVE_COLOR}
                fillOpacity="1"
                d="M0,256L34.3,261.3C68.6,267,137,277,206,245.3C274.3,213,343,139,411,128C480,117,549,171,617,170.7C685.7,171,754,117,823,122.7C891.4,128,960,192,1029,218.7C1097.1,245,1166,235,1234,208C1302.9,181,1371,139,1406,117.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
            />
        </StyledSvg>
    );
};

export const Bottom = () => {
    return (
        <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
                fill={WAVE_COLOR}
                fillOpacity="1"
                d="m0 64 34.3 21.3C68.6 107 137 149 206 186.7c68.3 37.3 137 69.3 205 64C480 245 549 203 617 160c68.7-43 137-85 206-85.3 68.4.3 137 42.3 206 37.3 68.1-5 137-59 205-58.7 68.9-.3 137 53.7 172 80l34 26.7v160H0Z"
            />
        </StyledSvg>
    );
};

export const Wave = {
    Top,
    Bottom,
};
