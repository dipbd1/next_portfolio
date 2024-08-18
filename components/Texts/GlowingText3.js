export default function GlowingText3({text, size}) {

    return (
        <>
            <div className="self-center">
                <span
                    className={` absolute mx-auto flex border w-fit bg-gradient-to-r blur-xl from-purple-400 via-blue-400 to-green-400 bg-clip-text ${size} box-content font-extrabold text-transparent select-none text-center`}>
                                        {text}
                </span>
                <h1
                    className={`relative w-fit justify-center flex bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text ${size} font-extrabold text-transparent select-auto text-center`}>
                    {text}
                </h1>
            </div>
        </>
    )
}