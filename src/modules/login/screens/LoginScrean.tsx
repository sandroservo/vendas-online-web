import { BackgroundInmg, ContainerLogin, LimitContainer, LogoImage, ContainerLoginScreen } from "../styles/loginScreen.styles";


export function LoginScreen() {
    return (
        <ContainerLoginScreen>
            <BackgroundInmg src="./background.png"/>
            <ContainerLogin>
            <LimitContainer>
                <LogoImage src="./logo.png"/>
            </LimitContainer> 
            </ContainerLogin>
        </ContainerLoginScreen>
    )
}