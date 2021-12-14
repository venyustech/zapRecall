import './styles.css';
export default function Finish(props) {

    return (
        <div className="inicio">
            <section>
                <div className='logo-card'>
                    Fimmmmmmmmmmmm
                </div>
                <button
                    className='login-bottom'
                    onClick={() => props.setActualPage('TelaInicial')}>
                    Praticar React
                </button>
            </section >
        </div >
    );
}