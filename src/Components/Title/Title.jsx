
const Title = ({heading,paragraph }) => {
    return (
        <div className="pb-12 pt-12">
            <h2 className="lg:text-4xl text-xl font-semibold text-center text-[#0064A5] mb-6">{heading}</h2>
            <p className="lg:text-lg text-base mx-auto text-center w-[70%]">{paragraph}</p>
        </div>
    );
};

export default Title;