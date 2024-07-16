type props = {
    title: string,
    desc: string
}
export const Jumbotron = (props: props) => {
    const { title, desc } = props;
    return (
        <div className="w-full flex flex-col space-y-2">
            <h1 className="text-4xl md:text-5xl">{title}</h1>
            <p className="text-slate-700">{desc}</p>
        </div>
    )
}
