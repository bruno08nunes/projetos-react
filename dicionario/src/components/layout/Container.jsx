import Title from "./Title";

const Container = ({ text, Action, children, action }) => {
    return (
        <section>
            <Title text={text} Action={Action} action={action} />
            {children}
        </section>
    );
};

export default Container;
