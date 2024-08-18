export default function GlowingText2({text, size}) {

    return (
        <>
            <div className="self-center">
                <span
                    className={`absolute mx-auto flex border w-fit bg-gradient-to-r blur-xl from-pink-500 via-teal-500 to-cyan-500 bg-clip-text ${size}  font-extrabold text-transparent select-none text-center`}>
                                        {text}
                </span>
                <h1
                    className={`relative mx-auto w-fit justify-center flex bg-gradient-to-r from-pink-500 via-teal-500 to-cyan-500 bg-clip-text ${size} font-extrabold text-transparent select-auto text-center`}>
                    {text}
                </h1>
            </div>
        </>
    )
}