import './_loader.scss'

const Loader = ({isLoading}) => {
    return isLoading && <div className="lds-wrapper"><div className="lds"><div></div><div></div><div></div></div></div>
}

export default Loader
