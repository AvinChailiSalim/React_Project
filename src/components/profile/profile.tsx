type Props = {
    profilePicture?: string
}

export default function Profile({profilePicture}: Props) {
    return(
        <div className="p-5 align-middle">
            <img src={profilePicture} alt='Profile Picture' className="rounded-full h-16 w-fit"/>
        </div>
    )
}