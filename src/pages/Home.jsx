
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import About from '../components/About';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <About />
            <Menu />
        </div>
    );
};

export default Home;
