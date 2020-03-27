import { config, parseOutput } from '../config'
import { styled, React  } from "uebersicht";

const LogoDiv = styled('div')`
position: relative;
display: inline-block;
font-family: 'Helvetica Neue', monospace;
margin-top: -2px;
margin-left: 20px;
font-size:22px;
min-width: ${config.Application.paddedWidth};
flex: 0;
`

export default class Application extends React.Component {
    render() {
        return (
            <LogoDiv></LogoDiv>
        )
    }
}