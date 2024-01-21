export default function MainContent() {
    return (
        <main className='main-content'>
            <h1 className='name'>Laura Smith</h1>
            <h2  className='major'>Frontend Developer</h2>
            <p className='site'>laurasmith.website</p>
            <EmailBtn />
            <CardInfo />
        </main>
    )
}

function EmailBtn() {
    return (
        <button className='email-btn'>
            <svg className='email-icon' fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330.001 330.001" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_348_"> <path id="XMLID_350_" d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602 L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"></path> <polygon id="XMLID_351_" points="165.001,146.4 310.087,40.001 19.911,40 "></polygon> </g> </g></svg>
            Email
        </button>
    )
}

function CardInfo() {
    return (
        <article>
            <h2 className='title-content'>About</h2>
            <p className='text-content'> I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h2 className='title-content'>Interests</h2>
            <p className='text-content'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </article>
    )
}