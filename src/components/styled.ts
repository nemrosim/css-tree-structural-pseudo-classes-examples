import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: center;
`;

Container.displayName = 'Container';

export const Card = styled.div`
    background-color: #4fe0f0;
    font-family: sans-serif;
    font-size: 20px;
    display: flex;
    justify-content: center;
    height: 80px;
    width: 80px;
    border-radius: 10px;
    align-items: center;
    margin-left: 20px;
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
        12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
        41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05), 100px 100px 80px rgba(0, 0, 0, 0.07);
`;

Card.displayName = 'Card';

export const Layout = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

Layout.displayName = 'Layout';
