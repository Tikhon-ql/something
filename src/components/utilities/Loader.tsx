import '../../styles/_loader.scss'

const Loader = ({isLoading}) => <>{isLoading && <div className="lds-wrapper"><div className="lds"><div></div><div></div><div></div></div></div>}</>

export default Loader
