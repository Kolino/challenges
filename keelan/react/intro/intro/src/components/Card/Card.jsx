import s from './Card.module.scss';

const Card = ({ title, subTitle, description, hasBtn }) => {
    return (
        <article class={s.card}>
            {/* TODO: add image */}
            <h3>{title}</h3>
            <h4>{subTitle}</h4>
            <p>{description}</p>
            {hasBtn ? <button>Click me</button> : console.log('no button')}
        </article>
    );
};

export default Card;