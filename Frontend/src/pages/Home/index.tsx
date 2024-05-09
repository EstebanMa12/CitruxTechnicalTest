import './styles.sass'
import URLSubmitter from '../../components/URLSubmitter';
import QuestionAsker from '../../components/QuestionAsker';
const Home = () =>{
    return (
        <main className='Home_container'>
            <QuestionAsker />
            <URLSubmitter />
        </main>
    );
}

export default Home;