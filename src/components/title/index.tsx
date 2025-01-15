interface TitleProps {
    title: string;
}

const Title = ({ title}: TitleProps) => {
    return (
        <h2 className="text-3xl font-bold text-black text-center mb-12">{title}</h2>
    )
}

export default Title;