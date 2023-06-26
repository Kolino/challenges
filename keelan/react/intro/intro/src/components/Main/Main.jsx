import Card from '../Card/Card';
import s from './Main.module.scss';

const Main = () => {
    return (
        <main className={s.main}>
            <Card 
                title='This is a title'
                subTitle='This is a subtitle'
                description='This is a description'
                hasBtn={true} 
            />
            <Card 
                title='This is a title'
                subTitle='This is a subtitle'
                description='This is a description'
                hasBtn={true} 
            />
            <Card 
                title='This is a title'
                subTitle='This is a subtitle'
                description='This is a description'
                hasBtn={true} 
            />
        </main>
    );
};

export default Main;