import './styles.css';
export default function TelaInicial(props) {

    return (
        <div className="inicio">
            <section>
                <div className='logo-card'>
                    <img class='logo-image' src='https://i.imgur.com/oWeLiFK.png'></img>
                </div>
                <button
                    className='login-bottom'
                    onClick={() => props.setActualPage('FlashCards')}>
                    Praticar React
                </button>
            </section >
        </div >
    );
}

