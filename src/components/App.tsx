import React, { useState } from 'react';
import { Layout, Container, Card } from './styled';
import { Wave } from './Wave';
import styled, { css } from 'styled-components';

const PseudoClassExample = styled(Card)<{ empty?: string }>`
    &:empty {
        background-color: #46b9fa;
        ${({ empty }) => {
            if (empty) {
                return css`
                    ${empty}
                `;
            }
        }};
    }

    &:last-child {
        background-color: #46fada;
    }
    &:first-child {
        background-color: #e362a8;
    }
`;

const cards = ['One', '', 'Two', 'Three'];

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledInput = styled.textarea`
    width: 250px;
    font-size: 16px;
    border-color: #cccccc;
    border-style: solid;
    padding: 6px;
    border-width: 3px;
    border-radius: 7px;
    box-shadow: 1px 1px 4px 0px rgba(42, 42, 42, 0.3);
`;

/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
 * @constructor
 */
export const App = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [style, setStyle] = useState<string>();

    return (
        <>
            <Wave.Top />
            <Layout>
                <Container>
                    {cards.map((e, index) => {
                        return (
                            <PseudoClassExample empty={style} key={index}>
                                {e}
                            </PseudoClassExample>
                        );
                    })}
                </Container>
                <StyledDiv>
                    <StyledInput
                        rows={5}
                        onChange={(event) => {
                            setStyle(event.currentTarget.value);
                        }}
                        value={style}
                    />
                </StyledDiv>
            </Layout>
            <Wave.Bottom />
        </>
    );
};
