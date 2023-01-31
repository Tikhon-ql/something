import styled from 'styled-components';

const Ldr = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100vh;

    background-color: #fff;
    z-index: 200;
    opacity: 0.8;

    display: flex;
    align-items: center;
    justify-content: center;

    .lds {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
        
        div {
            display: inline-block;
            position: absolute;
            left: 8px;
            width: 16px;
            background: black;
            animation: lds 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    
            &:nth-of-type(1) {
                left: 8px;
                animation-delay: -0.24s;
            }
            &:nth-of-type(2) {
                left: 32px;
                animation-delay: -0.12s;
            }
            &:nth-of-type(3) {
                left: 56px;
                animation-delay: 0;
            }
        }
    }
    

    @keyframes lds {
        0% {
            top: 8px;
            height: 64px;
        }
        50%, 100% {
            top: 24px;
            height: 32px;
        }
    }
`

const Loader = ({isLoading}) => {
    return isLoading && <Ldr className="lds-wrapper"><div className="lds"><div></div><div></div><div></div></div></Ldr>
}

export default Loader
