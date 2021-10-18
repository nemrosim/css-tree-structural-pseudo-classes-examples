import React from 'react';
import { Styled } from './styled';
import { Wave } from './Wave';

export const App = () => (
    <>
        <Wave.Top />
        <Styled.Layout>
            <Styled.Container>
                <Styled.Card>One</Styled.Card>
                <Styled.Card />
                <Styled.Card>Two</Styled.Card>
                <Styled.Card>Three</Styled.Card>
            </Styled.Container>
        </Styled.Layout>
        <Wave.Bottom />
    </>
);
