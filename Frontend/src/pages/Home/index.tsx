import './styles.sass'
import URLSubmitter from '../../components/URLSubmitter';
import QuestionAsker from '../../components/QuestionAsker';
import SidebarComponent from '../../components/SidebarComponent';
const Home = () =>{
    return (
        <main className='Home_container'>
            <div className="Chat_main_container">
                <SidebarComponent />
                <section className='Chat_container'>
                    <URLSubmitter />
                    <QuestionAsker />
                </section>
            </div>
        </main>
    );
}

export default Home;