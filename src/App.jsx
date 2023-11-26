import Header from "/src/components/Header"
import Card from "./components/Card"
import cardData from "/src/js/data.js"
import "./scss/main.scss"

function App() {

  const cards = cardData.map(card => {
    console.log(card)
    return <Card
      key={card.title}
      card={card}
    />
  })

  return (
    <>
      <Header />
      <main>
        <section className="card-list">
          {cards}
        </section>
      </main>
    </>
  )
}

export default App
