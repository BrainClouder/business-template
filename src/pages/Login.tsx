import React from 'react';
import styled from 'styled-components';

const isDesktop = window.innerWidth > 600;

const MainContainer = styled.div`
	background-image: url(https://picsum.photos/${window.innerWidth}/${window.innerHeight}?grayscale);
	background-color: hsl(249, 49%, 15%);
	position: absolute;
	height: 100vh;
	width: ${isDesktop ? '62vw' : '100vw'};
	right: 0;
	opacity: 0.8;
`;

const FormContainer = styled.div`
	background-color: hsl(221, 51%, 14%);
	box-shadow: 2px 2px 2px black;
	width: ${isDesktop ? '40vw' : '300px'};
	position: absolute;
	height: 100vh;
	left: 0;
`;

const Form = styled.div`
	background-color: hsl(221, 51%, 14%);
	padding: 1em;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	position: absolute;
	border-radius: 20px;
	width: ${isDesktop ? '350px' : '300px'};
	left: ${isDesktop ? 'calc(20vw - 175px)' : '0'};
	top: 25vh;
`;

const InputText = styled.input`
	background-color: hsl(249, 49%, 85%);
	border-radius: 5px;
	text-align: center;
	font-size: 20px;
	color: hsl(221, 51%, 15%);
	width: 300px;
	box-shadow: inset 0 0 10px black;
	// border: 4px dashed hsl(221, 51%, 54%);
	height: 28px;
`;

const PrimaryButton = styled.button`
	background-color: hsl(221, 51%, 64%);
	padding: 10px 15px;
	border-radius: 10px;
    color: hsl(221, 51%, 98%);
    text-shadow: 1px 1px 2px hsl(221, 51%, 38%);
	font-size: 16px;
	font-family: Arial;
	letter-spacing: 3px;
	border: 2px solid hsl(221, 51%, 74%);
	box-shadow: 0 0 10px hsl(221, 51%, 8%);
	text-transform: uppercase;
	font-weight: 600;
	transition: 200ms;
	&:hover {
		background-color: hsl(221, 51%, 74%);
	}
`;

const SecondaryButton = styled.button`
	background-color: hsl(221, 51%, 14%);
	padding: 10px 15px;
	border-radius: 10px;
	color: hsl(221, 51%, 84%);
	font-size: 16px;
	font-family: Arial;
	letter-spacing: 3px;
	border: 2px solid hsl(221, 51%, 64%);
    box-shadow: 0 0 10px hsl(221, 51%, 8%);
    text-shadow: 1px 1px 2px hsl(221, 51%, 38%);
	text-transform: uppercase;
	font-weight: 400;
	transition: 200ms;
	&:hover {
		background-color: hsl(221, 51%, 44%);
	}
`;

const LabelText = styled.p`
	text-align: center;
	font-size: 18px;
	font-weight: 200;
	color: hsl(221, 51%, 95%);
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 auto;
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin: 8px;
	align-items: center;
`;

const Highlight = styled.span`font-weight: 700;`;

const SmallLabel = styled.p`
	font-size: 12px;
	font-weight: 200;
	margin-top: 5px;
	color: hsl(221, 51%, 75%);
`;

const Login: React.FC = () => {
    return (
        <div>
            <MainContainer />
            <FormContainer>
                <LabelText
                    style={{
                        color: 'hsl(221, 51%, 75%)',
                        fontSize: '32px',
                        letterSpacing: '2px',
                    }}
                >
                    Welcome back
				</LabelText>

                <Form>
                    <InputContainer>
                        <LabelText>Username or e-mail</LabelText>
                        <InputText type={'text'} />
                    </InputContainer>
                    <InputContainer>
                        <LabelText>Your password</LabelText>
                        <InputText type={'password'} />
                        <SmallLabel>Forgot your password?</SmallLabel>
                    </InputContainer>
                    <ButtonContainer>
                        <PrimaryButton>
                            enter
                    </PrimaryButton>
                        <SecondaryButton>
                            register
                    </SecondaryButton>
                    </ButtonContainer>
                </Form>
            </FormContainer>
        </div>
    );
};

export default Login;
