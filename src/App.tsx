import './App.css'

function App() {
    return (
        <div>
            <Picture/>
            <PageTitle/>
            <PageText />
            <SeeMoreBtn />
            <SaveBtn />
        </div>
    )
}

export default App

function Picture() {
    return <img/>
}

function PageTitle() {
    return <h1>Headline</h1>
}

function PageText() {
    return <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
}

function SeeMoreBtn () {
    return <button>See more</button>
}

function SaveBtn () {
    return <button>Save</button>
}