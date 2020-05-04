import React from 'react';
import AppBar from '../_components/AppBar';
import styled from 'styled-components';

const isMobile = window.innerWidth < 600;
const FirstContainer = styled.div`
    position: relative;
    // background-color: hsl(221, 51%, 14%);
    // height: calc(100vh - 2.5em);
    width: 100vw;
    padding: 4.5em 0;
    z-index: 4;
`;

const SecondContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:  hsl(221, 51%,95%);

`;

const ThirdContainer = styled.div`

`;

const ExplainBox = styled.div`
    box-shadow: 2px 2px 2px #112;
    background-color: white;
    font-weight: 300;
    font-size: 16px;
    margin: 1em 0;
    text-align: center;
    padding: 1em 1.5em;
    width: 80vw;    
`;

const LightText = styled.p`
    font-size: 32px;
    font-weight: 300;
    padding: 2px 4px;
    color:  hsl(221, 51%, 84%);    
    text-align: center;
    z-index: 5;
`;

const Hl = styled.span`
    font-weight: 600;
`;

const BlueCircle = styled.div`
    position: absolute;
    top: 40vh;
    width: 60vw;
    left: 0vw;
    height: 150px;
    border-bottom: 1.5em solid hsl(221, 51%, 94%);
    // border-radius: 50%;
    border-bottom-right-radius: 100%;
    z-index: 0;
`;

const FirstPlanet = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: tomato;
    position: absolute;
    top: calc(40vh - 10px);
    left: calc(60vw - 40px);
    z-index: -1;
`;
const FirstPlanetDetail = styled.div`
    width: 20px;
    height: 20px;
    background-color: ;
    border-radius: 40%;

`;
const Home: React.FC = () => {
    const [reviews] = React.useState(() => {
        const rev = [];
        const firstMaleName = ['John', 'Andy', 'Michael', 'Steven', 'Dwight', 'Jim'];
        const firstFemaleName = ['Karen', 'Angela', 'Pam', 'Holly', 'Phyllis', 'Meredith', 'Erin', 'Jan'];
        const surName = ['Gonzales', 'Harper', 'Scott',]
        for (let i = 0; i < 3; i++) {
            rev.push({
                
            });
        }
    })


	return (<>
        <AppBar />
		<div style={{backgroundColor: 'hsl(221, 51%, 14%)'}}>			
            <FirstContainer>
            
                <LightText>
                    The voyage of your dreams starts now!
                </LightText>

                <LightText style={{textAlign: 'left', marginLeft: '2em'}}>
                    Ok then
                </LightText>

                {/* <BlueCircle />
                <FirstPlanet > 
                    <FirstPlanetDetail></FirstPlanetDetail>
                </FirstPlanet> */}                
            </FirstContainer>
            <SecondContainer>
            {[<div>First you select one of the available <Hl>planets</Hl></div>, 
            <div>Then, you choose one of the <Hl>spaceship</Hl> and <Hl>technology</Hl> plan</div>, 
            <div>Checkout time! You can pay using <Hl>credit card</Hl>, <Hl>online transfer</Hl> and <Hl>cryptocurrency</Hl>!</div>, 
            <div>Enjoy your outworldly vacation!</div>].map((e: any, i: number) => <ExplainBox style={{
                borderTop: `4px solid hsl(${i*125}, 91%, 54%)`
            }}>
                {e}
            </ExplainBox>)}
            </SecondContainer>
            <ThirdContainer>
                {
                    
                }
            </ThirdContainer>
		</div>
        </>
	);
};

export default Home;
